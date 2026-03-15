import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SynthFolio | Swathi P V',
  description: 'Generative AI Developer Portfolio of Swathi P V',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
     
      <body className="font-body antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
