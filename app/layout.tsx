import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="preload"
          href="/fonts/Blogger_Sans-Regular.otf"
          as="font"
          type="font/otf"
          crossorigin
        />
        <link
          rel="preload"
          href="/fonts/Blogger_Sans-Light.otf"
          as="font"
          type="font/otf"
          crossorigin
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}