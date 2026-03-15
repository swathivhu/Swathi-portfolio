import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SynthFolio | Swathi P V",
  description: "Generative AI Developer Portfolio of Swathi P V",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
        rel="stylesheet"
        href = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}