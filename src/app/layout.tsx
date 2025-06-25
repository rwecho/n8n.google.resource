import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";

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
    default: "n8n Google Resource - 自动化工作流平台",
    template: "%s | n8n Google Resource",
  },
  description:
    "强大的自动化工作流平台，帮助您连接 Google 服务和其他应用程序，实现业务流程自动化，提高工作效率。",
  keywords: [
    "n8n",
    "Google",
    "自动化",
    "工作流",
    "集成",
    "API",
    "automation",
    "workflow",
  ],
  authors: [{ name: "n8n Google Resource Team" }],
  creator: "n8n Google Resource",
  publisher: "n8n Google Resource",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "https://n8n-res.0x2a.top"
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "n8n Google Resource - 自动化工作流平台",
    description:
      "强大的自动化工作流平台，帮助您连接 Google 服务和其他应用程序，实现业务流程自动化，提高工作效率。",
    url: process.env.NEXT_PUBLIC_BASE_URL || "https://n8n-res.0x2a.top",
    siteName: "n8n Google Resource",
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "n8n Google Resource - 自动化工作流平台",
    description:
      "强大的自动化工作流平台，帮助您连接 Google 服务和其他应用程序，实现业务流程自动化，提高工作效率。",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
