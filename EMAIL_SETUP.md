# การตั้งค่าระบบส่งอีเมล Contact Form

## ขั้นตอนการตั้งค่า

### 1. สร้างไฟล์ .env.local
คัดลอกไฟล์ `env.example.txt` และเปลี่ยนชื่อเป็น `.env.local` แล้วแก้ไขค่าต่างๆ:

```bash
cp env.example.txt .env.local
```

### 2. แก้ไขค่าการตั้งค่าใน .env.local

```env
# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false

# Gmail credentials
SMTP_USER=your-email@gmail.com
SMTP_PASS=nqyv lcla gdhl kiir

# Email settings
# For single email:
CONTACT_EMAIL=your-email@gmail.com
# For multiple emails (comma-separated):
# CONTACT_EMAILS=your-email@gmail.com,admin@company.com,sales@company.com
COMPANY_NAME=Nagato Heat Treatment (Thailand) Co., Ltd.

# Next.js Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here

# Optional: Rate limiting
EMAIL_RATE_LIMIT=10
```

### 3. การตั้งค่า Gmail App Password

1. ไปที่ [Google Account Settings](https://myaccount.google.com/)
2. เลือก "Security" จากเมนูด้านซ้าย
3. เปิด "2-Step Verification" (ถ้ายังไม่ได้เปิด)
4. เลือก "App passwords"
5. เลือก "Mail" และ "Other (Custom name)"
6. ใส่ชื่อ "Nagato Contact Form"
7. คัดลอก App Password ที่ได้มา (16 ตัวอักษร)
8. ใส่ App Password ใน `SMTP_PASS` ในไฟล์ .env.local

### 4. เริ่มต้นเซิร์ฟเวอร์

```bash
npm run dev
```

## ฟีเจอร์ที่รองรับ

- ✅ ส่งอีเมลจริงผ่าน Gmail SMTP
- ✅ Rate limiting (จำกัดการส่งอีเมลต่อ IP)
- ✅ Form validation
- ✅ Error handling
- ✅ Success/Error notifications
- ✅ HTML email template
- ✅ Responsive design
- ✅ Multi-language support (ไทย, อังกฤษ, ญี่ปุ่น, จีน)
- ✅ ส่งอีเมลไปยังหลาย recipients
- ✅ อีเมลแสดงผลตามภาษาที่ผู้ใช้เลือก

## การทดสอบ

1. เปิดเว็บไซต์ที่ `http://localhost:3000/contact`
2. เปลี่ยนภาษาเป็นภาษาต่างๆ (ไทย, อังกฤษ, ญี่ปุ่น, จีน)
3. กรอกข้อมูลในฟอร์ม
4. กดปุ่ม "ส่งข้อความ"
5. ตรวจสอบอีเมลที่ `CONTACT_EMAIL` หรือ `CONTACT_EMAILS`
6. อีเมลจะแสดงผลตามภาษาที่ผู้ใช้เลือก

## การแก้ไขปัญหา

### อีเมลไม่ส่ง
- ตรวจสอบ App Password ว่าถูกต้อง
- ตรวจสอบว่าเปิด 2-Step Verification แล้ว
- ตรวจสอบ network connection

### Rate Limit Error
- ระบบจำกัดการส่งอีเมล 10 ครั้งต่อชั่วโมงต่อ IP
- สามารถแก้ไขได้ใน `EMAIL_RATE_LIMIT` ใน .env.local

### Environment Variables ไม่ทำงาน
- ตรวจสอบชื่อไฟล์ว่าเป็น `.env.local` (มีจุดหน้าชื่อ)
- รีสตาร์ทเซิร์ฟเวอร์หลังจากแก้ไข .env.local

## Security Notes

- อย่า commit ไฟล์ .env.local ขึ้น Git
- ใช้ App Password แทนรหัสผ่านปกติ
- เปิด Rate Limiting เพื่อป้องกัน spam
- ใช้ HTTPS ใน production
