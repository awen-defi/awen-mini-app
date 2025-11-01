import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const variables = [inter.variable];
const allFontVariables = variables.join(" ");

export { inter, allFontVariables };
