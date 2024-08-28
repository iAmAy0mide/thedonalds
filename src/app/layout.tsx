import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import StoreProvider from "./StoreProvider";
import "@uploadthing/react/styles.css";
import SessionWrapper from "@/components/SessionWrapper/SessionWrapper";
import { Analytics } from "@vercel/analytics/react"

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Donalds",
  description: "Album Gallery for Donalds Family",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body>
          <Analytics />
        {/* <body className={inter.className}> */}
            <StoreProvider>          
              <NavBar />
              {children}
              {/* <Footer /> */}
            </StoreProvider>
        </body>
      </html>
    </SessionWrapper>
  );
}
