import React from "react";
import { Roboto } from "next/font/google"; // Exemplo de importação de fontes
import { Metadata } from "next";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Ti-Saúde",
  description: "Quiz para profissionais de saúde que querem aprender TI",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}