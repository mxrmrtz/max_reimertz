"use client";

import styles from "./styles/globals.css";
import { Inter } from "next/font/google";
import NavBar from "./components/Navbar";
import { usePathname } from "next/navigation";

import { AnimatePresence } from "framer-motion";

export default function RootLayout({ children }) {
	const path = usePathname();
	console.log(path);

	return (
		<html lang="en">
			<body>
				<NavBar />
				<AnimatePresence initial={false}>
					<div key={path}>{children}</div>
				</AnimatePresence>
			</body>
		</html>
	);
}
