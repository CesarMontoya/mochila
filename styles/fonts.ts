import { Nunito, Nunito_Sans } from 'next/font/google';
import localFont from 'next/font/local';

// Nunito
export const nunito = Nunito({
  subsets: ['latin'],
  display: 'fallback',
  variable: '--font-nunito',
});

// Nunito Sans
export const nunito_sans = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunuto-sans',
});

// Champagne&Limousines
export const ChLi = localFont({
  src: [
    {
      path: './fonts/Champagne&Limousines.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/Champagne&Limousines-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Champagne&LimousinesItalic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: './fonts/Champagne&LimousinesBoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable: '--font-ChLi',  
})