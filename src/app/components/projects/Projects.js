import React, { useState } from "react";
import information from "./information.json";
import styles from "./projects.module.css";

const Projects = () => {
	const { projects } = information;

	return (
		<>
			{projects.map((item) => {
				const className = `bg_${item.name.replace(/\s/g, "").toLowerCase()}`;
				const [clicked, setClicked] = useState(false);
				console.log(clicked);

				return (
					<div
						onClick={() => {
							setClicked(!clicked);
						}}
						key={item.id}
						className={styles.card}
					>
						<section className={styles[className]}>
							<h3>{item.name}</h3>
						</section>
					</div>
				);
			})}
		</>
	);
};

export default Projects;
