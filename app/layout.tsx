import Navbar from '@/components/layout/navbar';
import './globals.css';
import Footer from '@/components/layout/footer';
import { Metadata } from 'next';

export const metadata: Metadata ={
  title: "CodanteVagas",
  description: "O CodanteVagas conecta candidatos a empregos ideais, oferecendo funcionalidades intuitivas para busca e gerenciamento de vagas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex flex-1 px-4 sm:px-6 lg:px-8">{children}</main> 
        <Footer />
      </body>
    </html>
  );
}
