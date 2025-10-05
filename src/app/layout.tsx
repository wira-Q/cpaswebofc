import type { Metadata } from "next";
import "./globals.css";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Hari Ulang Tako 2025",
  description: "Landing Page Hari Ulang Tako 2025",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={nunito.variable}>
      <body className="relative min-h-screen bg-gray-900 text-white font-sans">
        {/* Background blob layer */}
        <div className="absolute inset-0 -z-10 blob-bg"></div>

        {/* Konten website */}
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
