"use client";
import styles from "./styles/globals.css";

import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";

import NavBar from "./components/Navbar";

export default function RootLayout({ children }) {
	const pathName = usePathname();

	return (
		<html lang="en">
			<AnimatePresence initial={false}>
				<body>
					<div key={pathName}>
						<NavBar />
						<div>{children}</div>
					</div>
				</body>
			</AnimatePresence>
		</html>
	);
}
