import { useState } from "react";
import { motion as m } from "framer-motion";

import Parallax from "@containers/Parallax";

import styles from "@styles/page.module.css";

export default function Home() {
	return (
						<m.div
							animate={{ y: "0%" }}
							initial={{ y: "100%" }}
							transition={{ duration: 0.75, ease: "easeOut" }}
							exit={{ opacity: 1 }}
						>
		<>
			{/* <main className={styles.main}>
						<div className={styles.hero_container}>
							<HelixCanvas />
						</div>
					</main> */}
				<section className={styles.projects_container}>
					<Parallax />
				</section>
		</>
			</m.div>
	);
}
