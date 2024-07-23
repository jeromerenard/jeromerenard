import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/common/navbar";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Jerome Renard",
  description: "WorldClass Mixing Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
            <body className={`${inter.className} antialiased`}>
         
            <div>
            {children}
            <SpeedInsights/>
            <Analytics />
            </div>
            </body>
    </html>
  );
}

/*
 <div className="w-screen flex flex-col invisible lg:visible">
             <NavBar/>
              
              </div>*/