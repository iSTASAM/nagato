import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Rate limiting store (in production, use Redis or database)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

interface ContactFormData {
  companyName: string;
  name: string;
  email: string;
  phone: string;
  position: string;
  message: string;
  language: 'th' | 'en' | 'jp' | 'cn';
}

// Rate limiting function
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 60 * 1000; // 1 hour
  const maxRequests = parseInt(process.env.EMAIL_RATE_LIMIT || '10');
  
  const userLimit = rateLimitStore.get(ip);
  
  if (!userLimit || now > userLimit.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }
  
  if (userLimit.count >= maxRequests) {
    return false;
  }
  
  userLimit.count++;
  return true;
}

// Email templates for different languages
const emailTemplates = {
  th: {
    subject: 'ข้อความติดต่อจากเว็บไซต์ - {companyName}',
    title: 'ข้อความติดต่อใหม่จากเว็บไซต์',
    description: 'คุณได้รับข้อความใหม่จากฟอร์มติดต่อบนเว็บไซต์',
    contactInfo: 'ข้อมูลติดต่อ',
    company: 'บริษัท',
    name: 'ชื่อ',
    email: 'อีเมล',
    phone: 'โทรศัพท์',
    position: 'ตำแหน่ง',
    message: 'ข้อความ',
    footer: 'อีเมลนี้ถูกส่งจากฟอร์มติดต่อบนเว็บไซต์ของคุณ<br>ตอบกลับอีเมลนี้โดยตรงเพื่อติดต่อ {name}'
  },
  en: {
    subject: 'Contact Form Submission from Website - {companyName}',
    title: 'New Contact Form Submission',
    description: 'You have received a new message from your website contact form',
    contactInfo: 'Contact Information',
    company: 'Company',
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    position: 'Position',
    message: 'Message',
    footer: 'This email was sent from the contact form on your website.<br>Reply directly to this email to respond to {name}'
  },
  jp: {
    subject: 'ウェブサイトからのお問い合わせ - {companyName}',
    title: '新しいお問い合わせフォーム送信',
    description: 'ウェブサイトのお問い合わせフォームから新しいメッセージを受信しました',
    contactInfo: '連絡先情報',
    company: '会社名',
    name: 'お名前',
    email: 'メールアドレス',
    phone: '電話番号',
    position: '役職',
    message: 'メッセージ',
    footer: 'このメールはウェブサイトのお問い合わせフォームから送信されました。<br>{name}様に返信するには、このメールに直接返信してください'
  },
  cn: {
    subject: '网站联系表单提交 - {companyName}',
    title: '新的联系表单提交',
    description: '您收到了来自网站联系表单的新消息',
    contactInfo: '联系信息',
    company: '公司',
    name: '姓名',
    email: '电子邮件',
    phone: '电话',
    position: '职位',
    message: '消息',
    footer: '此邮件是从您网站的联系表单发送的。<br>直接回复此邮件以回复 {name}'
  }
};

// Validate form data
function validateFormData(data: ContactFormData): string[] {
  const errors: string[] = [];
  
  if (!data.companyName?.trim()) {
    errors.push('Company name is required');
  }
  if (!data.name?.trim()) {
    errors.push('Name is required');
  }
  if (!data.email?.trim()) {
    errors.push('Email is required');
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.push('Invalid email format');
  }
  if (!data.phone?.trim()) {
    errors.push('Phone is required');
  }
  if (!data.position?.trim()) {
    errors.push('Position is required');
  }
  if (!data.message?.trim()) {
    errors.push('Message is required');
  }
  if (!data.language || !['th', 'en', 'jp', 'cn'].includes(data.language)) {
    errors.push('Invalid language selection');
  }
  
  return errors;
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    
    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }
    
    // Parse request body
    const body: ContactFormData = await request.json();
    
    // Validate form data
    const validationErrors = validateFormData(body);
    if (validationErrors.length > 0) {
      return NextResponse.json(
        { error: 'Validation failed', details: validationErrors },
        { status: 400 }
      );
    }
    
    // Check environment variables
    const requiredEnvVars = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS'];
    const missingEnvVars = requiredEnvVars.filter(varName => !process.env[varName]);
    
    if (missingEnvVars.length > 0) {
      console.error('Missing environment variables:', missingEnvVars);
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Get contact emails (support multiple emails)
    const contactEmails = process.env.CONTACT_EMAILS || process.env.CONTACT_EMAIL || '';
    const emailList = contactEmails.split(',').map(email => email.trim()).filter(email => email);
    
    if (emailList.length === 0) {
      console.error('No contact emails configured');
      return NextResponse.json(
        { error: 'No contact emails configured' },
        { status: 500 }
      );
    }
    
    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
    
    // Verify transporter configuration
    await transporter.verify();
    
    // Email content
    const companyName = process.env.COMPANY_NAME || 'Nagato Heat Treatment (Thailand) Co., Ltd.';
    const template = emailTemplates[body.language] || emailTemplates.en;
    
    const mailOptions = {
      from: `"${companyName}" <${process.env.SMTP_USER}>`,
      to: emailList,
      replyTo: body.email,
      subject: template.subject.replace('{companyName}', body.companyName),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #1e40af; margin: 0 0 10px 0;">${template.title}</h2>
            <p style="color: #6b7280; margin: 0;">${template.description}</p>
          </div>
          
          <div style="background-color: white; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="color: #374151; margin: 0 0 15px 0;">${template.contactInfo}</h3>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 120px;">${template.company}:</td>
                <td style="padding: 8px 0; color: #6b7280;">${body.companyName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">${template.name}:</td>
                <td style="padding: 8px 0; color: #6b7280;">${body.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">${template.email}:</td>
                <td style="padding: 8px 0; color: #6b7280;">
                  <a href="mailto:${body.email}" style="color: #1e40af; text-decoration: none;">${body.email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">${template.phone}:</td>
                <td style="padding: 8px 0; color: #6b7280;">
                  <a href="tel:${body.phone}" style="color: #1e40af; text-decoration: none;">${body.phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">${template.position}:</td>
                <td style="padding: 8px 0; color: #6b7280;">${body.position}</td>
              </tr>
            </table>
            
            <div style="margin-top: 20px;">
              <h3 style="color: #374151; margin: 0 0 10px 0;">${template.message}</h3>
              <div style="background-color: #f9fafb; padding: 15px; border-radius: 6px; border-left: 4px solid #1e40af;">
                <p style="margin: 0; color: #374151; white-space: pre-wrap;">${body.message}</p>
              </div>
            </div>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #f3f4f6; border-radius: 8px; text-align: center;">
            <p style="margin: 0; color: #6b7280; font-size: 14px;">
              ${template.footer.replace('{name}', body.name)}
            </p>
          </div>
        </div>
      `,
      text: `
${template.title}

${template.company}: ${body.companyName}
${template.name}: ${body.name}
${template.email}: ${body.email}
${template.phone}: ${body.phone}
${template.position}: ${body.position}

${template.message}:
${body.message}

---
${template.footer.replace('{name}', body.name).replace(/<br>/g, '\n')}
      `,
    };
    
    // Send email
    const info = await transporter.sendMail(mailOptions);
    
    console.log('Email sent successfully:', info.messageId);
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Email sent successfully',
        messageId: info.messageId 
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Error sending email:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to send email',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
