"use client";

import styles from "../app/styles/page.module.css";
import HelixCanvas from "./components/3dhero/HelixCanvas";
import Parallax from "./components/projects/Parallax/Parallax";
import { useState } from "react";
import ProjectsInformation from "./components/projects/ProjectsInfromation/ProjectsInformation";
import { easeInOut, motion as m } from "framer-motion";

export default function Home() {
	return (
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
	);
}
