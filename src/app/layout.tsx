import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import Head from "next/head";

const inter = Space_Grotesk({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Gent Hulaj</title>
        <meta
          name="description"
          content="This personal portfolio website showcases my skills, projects, and experiences. Built with Next.js, TypeScript, GSAP for animations, and Tailwind CSS for styling, it is designed to be responsive and visually appealing, providing a great user experience on both desktop and mobile devices."
        />
      </Head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
