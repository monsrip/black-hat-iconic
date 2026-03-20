import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ClientWrapper from "./components/ClientWrapper";

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
    icon: "/company/icon.jpeg",
    shortcut: "/company/icon.jpeg",
    apple: "/company/icon.jpeg",
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ClientWrapper>
          <Navbar />
          {children}
          <Footer />
        </ClientWrapper>
      </body>
    </html>
  );
}