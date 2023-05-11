"use client";

import styles from "../app/styles/page.module.css";
import HelixCanvas from "./components/3dhero/HelixCanvas";
import Parallax from "./components/projects/Parallax/Parallax";
import { useState } from "react";
import ProjectsInformation from "./components/projects/ProjectsInfromation/ProjectsInformation";
import { easeInOut, motion as m } from "framer-motion";

export default function Home() {
	const [projectData, setProjectData] = useState({});
	const [isShowing, setIsShowing] = useState(false);
	return (
		<m.div
			initial={{ y: "100%" }}
			animate={{ y: "0%" }}
			transition={{ duration: 0.75, ease: "easeOut" }}
			exit={{ opacity: 1 }}
			className={styles.animation}
		>
			{!isShowing ? (
				<>
					<main className={styles.main}>
						<div className={styles.hero_container}>
							<HelixCanvas />
						</div>
					</main>
					{/* <section className={styles.projects_container}>
						<Parallax
							setIsShowing={setIsShowing}
							setProjectData={setProjectData}
						/>
					</section> */}
				</>
			) : (
				<section className={styles.projects_information}>
					<ProjectsInformation
						setIsShowing={setIsShowing}
						projectData={projectData}
					/>
				</section>
			)}
		</m.div>
	);
}
