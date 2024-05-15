import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/common/navbar";
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
             <div className="w-screen flex flex-col invisible lg:visible">
              <NavBar/>
              
              </div>
            <div>
            {children}
            </div>
            </body>
    </html>
  );
}
