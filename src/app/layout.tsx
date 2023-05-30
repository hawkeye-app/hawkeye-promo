import "./globals.css";
import localFont from "next/font/local";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Metadata } from "next";
import Header from "./components/Header";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], display: "swap" });
const calsans = localFont({
  src: "../../public/font/calsans.otf",
  variable: "--font-calsans",
  display: "swap",
});

export const metadata: Metadata = {
  //Change later
  title: "Hawkeye - Play tennis better & fairer",
  description: "Elevate your game to the next level with the power of AI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-blue-1 ${calsans.variable} ${jakarta.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}