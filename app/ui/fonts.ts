import { Inter } from 'next/font/google';

// مقداردهی صحیح فونت
export const inter = Inter({ 
  subsets: ['latin'], // 'latin' به جای 'inter'
  variable: '--font-inter' // اختیاری - برای استفاده به عنوان متغیر CSS
});