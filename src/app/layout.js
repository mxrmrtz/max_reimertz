import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Max Reimertz</title>
      </head>
      <body className={inter.className}>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}

