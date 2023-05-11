

import styles from "./styles/globals.css";
import { Inter } from "next/font/google";
import NavBar from "./components/Navbar";
import { usePathname } from "next/navigation";

export const metadata = {
	title: "Max Reimertz",
  };

export default function RootLayout({ children }) {

	return (
		<html lang="en">
			<body>
				<NavBar />
				<div>{children}</div>
			</body>
		</html>
	);
}
