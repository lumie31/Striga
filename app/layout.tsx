import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AppProvider } from './shared/context/AppProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lumi Group - Striga',
  description: 'Working with the Striga API',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <main className='flex mx-auto max-w-screen-2xl lg:max-w-full'>
          <div className='hidden md:flex'>
            <Sidebar />
          </div>
          <section className='grow flex flex-col md:ml-[120px] w-full mt-4 md:w-auto'>
            <Navbar />
            <Footer />
            <AppProvider>{children}</AppProvider>
          </section>
        </main>
      </body>
    </html>
  );
}
