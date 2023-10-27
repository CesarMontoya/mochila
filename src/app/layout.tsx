'use client'

import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/primereact.min.css';

import './globals.css';
import '@/styles/themes/lara-light-custom.css';
import { ChLi, nunito, nunito_sans } from '@/styles/fonts';
// import { AuthProvider } from '@/context';

export const metadata = {
  title: 'mochila',
  description: 'Powerful app AI for schools, teachers, students and family.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${nunito_sans.variable} ${nunito.variable} ${ChLi.variable}`}>

      <body>
        {/* <AuthProvider> */}
            <PrimeReactProvider>
              {children}
            </PrimeReactProvider>      
        {/* </AuthProvider> */}
      </body>
    </html>
  )
}
