import type { Metadata } from "next";
import { allFontVariables } from "@/fonts";
import "../styles/globals.css";

type RootLayoutPropsType = Readonly<{
  children: React.ReactNode;
}>;

export const metadata: Metadata = {
  title: "Awen Mini App",
  description: "Awen Mini App",
};

export default function RootLayout({ children }: RootLayoutPropsType) {
  return (
    <html lang="en">
      <body className={allFontVariables}>{children}</body>
    </html>
  );
}
