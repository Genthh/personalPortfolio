import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import Head from "next/head";

const inter = Space_Grotesk({ subsets: ["latin"] });
export const metadata = {
  title: "Gent Hulaj - Portfolio",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
