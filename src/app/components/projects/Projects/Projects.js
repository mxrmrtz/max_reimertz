import React, { useState } from "react";
import information from "./information.json";
import styles from "./projects.module.css";

const Projects = ({setProjectData,setIsShowing}) => {
	const { projects } = information;

	return (
		<>
			{projects.map((project) => {
				const className = `bg_${project.name.replace(/\s/g, "").toLowerCase()}`;
				const [clicked, setClicked] = useState(false);
				console.log(clicked);
				return (
					<>
						<div
							onClick={() => {
								setClicked(!clicked);
								setIsShowing(true)
								setProjectData(project)
							}}
							key={project.id}
							className={styles.card}
						>
							<section className={styles[className]}>
								<h3>{project.name}</h3>
							</section>
						</div>
					</>
				);
			})}
		</>
	);
};

export default Projects;
