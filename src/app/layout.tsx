import "./globals.css";
import { Roboto } from "next/font/google";
import { Metadata } from "next";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Ti-Saúde",
  description: "Quiz para profissionais de saúde que querem aprender TI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${roboto.variable} bg-white text-gray-900 dark:bg-zinc-900 dark:text-white transition-colors duration-300`}
      >
        {children}
      </body>
    </html>
  );
}
