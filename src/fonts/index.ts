import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const variables = [geistSans.variable, geistMono.variable];
const allFontVariables = variables.join(" ");

export { geistSans, geistMono, allFontVariables };
