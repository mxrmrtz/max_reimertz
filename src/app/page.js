"use client";

import styles from "./page.module.css";
import HelixCanvas from "./components/3dhero/HelixCanvas";
import HeroText from "./components/Paragrapghes/HeroText";

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.hero_container}>
				<HelixCanvas />
			<HeroText/>
			</div>
		</main>
	);
}
