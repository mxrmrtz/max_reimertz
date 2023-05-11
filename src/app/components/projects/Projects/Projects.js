"use client";

import information from "../../../../../information.json";
import styles from "../../../styles/projects.module.css";
import Link from "next/link";

const Projects = () => {
	const { projects } = information;
	console.log(projects);

	return (
		<>
		
				{projects.map((project) => {
					const className = `bg_${project.name
						.replace(/\s/g, "")
						.toLowerCase()}`;
					return (
						<Link href={`projects/${project.id}`} key={project.name}>
							<div className={styles.card}>
								<div className={styles.project_container}>
									<h3 className={styles.project_name}>{project.name}</h3>
									<section className={styles[className]}></section>
								</div>
							</div>
						</Link>
					);
				})}
		</>
	);
};

export default Projects;
