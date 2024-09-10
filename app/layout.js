import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "Xiaohong Zhuang's Portfolio",
  description: "Read my portfolio for details....",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <script src="/js/flowbite.min.js"></script>
      </body>
    </html>
  );
}
