import { Inter, Lusitana } from 'next/font/google';

// تنظیم فونت Inter
export const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
});

// تنظیم فونت Lusitana
export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'], // Lusitana معمولاً نیاز به تعیین وزن دارد
  variable: '--font-lusitana' // باید متفاوت از --font-inter باشد
});