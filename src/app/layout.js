"use client";

import styles from "./styles/globals.css";
import { Inter } from "next/font/google";
import NavBar from "./components/Navbar";
import { usePathname } from "next/navigation";

import { AnimatePresence } from "framer-motion";

export default function RootLayout({ children }) {
	const path = usePathname();

	return (
		<html lang="en">
			<body>
				<AnimatePresence initial={false}>
					<NavBar />
					<div key={path}>{children}</div>
				</AnimatePresence>
			</body>
		</html>
	);
}
