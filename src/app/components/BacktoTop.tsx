'use client';

import { useState, useEffect } from 'react';
import { MdKeyboardArrowUp } from 'react-icons/md';

const BacktoTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-sky-800 hover:bg-sky-900 text-white p-3 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-sky-800 focus:ring-offset-2"
          aria-label="กลับไปด้านบน"
        >
          <MdKeyboardArrowUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
};

export default BacktoTop;