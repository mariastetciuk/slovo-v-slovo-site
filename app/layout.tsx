import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "СЛОВО В СЛОВО",
  description: "Читання Біблії слово в слово",
   icons: {
    icon: {
      url: '/favicon.png',
      href: '/favicon.png'
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body
      >
        {children}
      </body>
    </html>
  );
}
