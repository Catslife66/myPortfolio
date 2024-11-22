import Header from "./components/Header";
import "./globals.css";
import { Lato } from "next/font/google";

export const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata = {
  title: "Xiaohong Zhuang's Portfolio",
  description: "Read my portfolio for details....",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={lato.className}>
      <body>
        <Header />
        {children}
        <script src="js/flowbite.min.js"></script>
      </body>
    </html>
  );
}
