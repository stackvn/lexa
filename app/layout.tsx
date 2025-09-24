import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Lexa",
  description: "Generate cool social media posts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth bg-white text-black dark:bg-gradient-to-b from-gray-950 via-black to-gray-950 dark:text-white"
      suppressHydrationWarning={true}
    >
      <body className={`${poppins.className}`}>
        <Header />
        <main className="pt-14">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
