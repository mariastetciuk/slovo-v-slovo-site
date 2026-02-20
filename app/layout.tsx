import type { Metadata } from "next";
import { Roboto_Condensed, Cinzel } from "next/font/google";
import "./globals.css";


const robotoCondensed = Roboto_Condensed({
  subsets: ["latin", "cyrillic"],
  variable: "--font-roboto",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});



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
      <body className={`${robotoCondensed.variable} ${cinzel.variable} text-black`}
      >
        {children}
      </body>
    </html>
  );
}
