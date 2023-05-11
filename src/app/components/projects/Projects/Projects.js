import React, { useState } from "react";
import information from "./information.json";
import styles from "./projects.module.css";

const Projects = ({setProjectData,setIsShowing}) => {
	const { projects } = information;
	const scrollToTop = () => {
		window.scrollTo({top:0})
	}

	return (
		<>
			{projects.map((project) => {
				const className = `bg_${project.name.replace(/\s/g, "").toLowerCase()}`;
				const [clicked, setClicked] = useState(false);
				return (
						<div
							onClick={() => {
								setClicked(!clicked);
								setIsShowing(true)
								setProjectData(project)
								scrollToTop()

							}}
							key={project.id}
							className={styles.card}
						>
							<section className={styles[className]}>
								<h3 className={styles.project_name}>{project.name}</h3>
							</section>
						</div>
				);
			})}
		</>
	);
};

export default Projects;
