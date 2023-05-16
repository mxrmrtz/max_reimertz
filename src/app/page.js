"use client";

import styles from "../app/styles/page.module.css";

import { AnimatePresence, motion as m } from "framer-motion";

import HelixCanvas from "./components/3dhero/HelixCanvas";
import Parallax from "./components/projects/Parallax/Parallax";

export default function Home() {
	return (
		<>
			<m.div
				animate={{ y: "0%" }}
				exit={{ opacity: 1 }}
				initial={{ y: "100%" }}
				transition={{ duration: 0.75, ease: "easeOut" }}
			>
				{/* <main className={styles.main}>
					<div className={styles.hero_container}>
						<HelixCanvas />
					</div>
				</main> */}
				<section className={styles.projects_container}>
					<Parallax />
				</section>
			</m.div>
		</>
	);
}
