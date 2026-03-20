import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "BLACK HAT ICONIC",
    template: "%s | BLACK HAT ICONIC",
  },
  description:
    "Advanced software, networking infrastructure, and enterprise technology solutions by BLACK HAT ICONIC.",
  icons: {
    icon: "/company/icon.jpeg",       // normal favicon
    shortcut: "/company/icon.jpeg",   // shortcut icon
    apple: "/company/icon.jpeg",      // iOS icon
  },
  keywords: [
    "Software Development",
    "Networking Solutions",
    "NMS",
    "Electronics Manufacturing",
    "IT Company India"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
