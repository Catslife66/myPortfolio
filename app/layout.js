import { Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";

export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Xiaohong Zhuang's Portfolio",
  description: "Read my portfolio for details....",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        {children}
        {/* <Script src="/assets/js/flowbite.min.js" strategy="beforeInteractive" /> */}
      </body>
    </html>
  );
}
