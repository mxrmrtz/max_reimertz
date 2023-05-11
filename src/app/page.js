"use client";

import styles from "./page.module.css";
import HelixCanvas from "./components/3dhero/HelixCanvas";
import Parallax from "./components/projects/Parallax/Parallax";
import { useState } from "react";
import ProjectsInformation from "./components/projects/ProjectsInfromation/ProjectsInformation";

export default function Home() {
	const [projectData, setProjectData] = useState({});
	const [isShowing, setIsShowing] = useState(false);
	return (
		<>
			{!isShowing ? (
				<>
					<main className={styles.main}>
						<div className={styles.hero_container}>
							<HelixCanvas />
						</div>
					</main>
					<section className={styles.projects_container}>
						<Parallax
							setIsShowing={setIsShowing}
							setProjectData={setProjectData}
						/>
					</section>
				</>
			) : (
				<section className={styles.projects_information}>
					<ProjectsInformation
						setIsShowing={setIsShowing}
						projectData={projectData}
					/>
				</section>
			)}
		</>
	);
}
