import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "OM EPC Solution | IT & Infrastructure Experts",
  description: "Comprehensive IT, Networking, UPS, and CCTV solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#FAF9F6] text-dark font-sans">
        {children}
      </body>
    </html>
  );
}