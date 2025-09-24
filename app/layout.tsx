import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Providers from "./providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Lexa - Generate cool text posts for your socials",
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&family=Dancing+Script&family=Sacramento&family=Great+Vibes&family=Shadows+Into+Light&family=MedievalSharp&family=Uncial+Antiqua&family=Cinzel+Decorative&family=Pirata+One&family=Creepster&family=Press+Start+2P&family=Bangers&family=Fredoka+One&family=Luckiest+Guy&family=Lobster&family=Raleway:wght@400;700&family=Montserrat:wght@400;700&family=Poppins:wght@400;700&family=Oswald:wght@400;700&family=Orbitron:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?
                    family=Pacifico&
                    family=Dancing+Script&
                    family=Sacramento&
                    family=Great+Vibes&
                    family=Shadows+Into+Light&
                    family=MedievalSharp&
                    family=Uncial+Antiqua&
                    family=Cinzel+Decorative&
                    family=Pirata+One&
                    family=Creepster&
                    family=Press+Start+2P&
                    family=Bangers&
                    family=Fredoka+One&
                    family=Luckiest+Guy&
                    family=Lobster&
                    family=Raleway:wght@400;700&
                    family=Montserrat:wght@400;700&
                    family=Poppins:wght@400;700&
                    family=Oswald:wght@400;700&
                    family=Orbitron:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${poppins.className}`}>
        <Providers>
          <div className="min-h-screen px-4 max-w-7xl mx-auto">
            <main>
              <Header />
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
