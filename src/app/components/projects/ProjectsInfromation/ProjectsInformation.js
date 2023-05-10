import styles from "./projectsinformation.module.css";

const ProjectsInformation = ({ projectData,setIsShowing }) => {
	return (
		<>
			<main className={styles.main}>
				<nav><p onClick={() => {
					setIsShowing(false)
				}}>close</p></nav>
				<div className={styles.text_wrapper}>
					<h2 className={styles.title}>{projectData.name}</h2>
					<section className={styles.information}>
						<h3 className={styles.role}>{projectData.role}</h3>
						<p className={styles.about}>{projectData.about}</p>
						<p className={styles.tools}>{projectData.tools.join(", ")}</p>
					</section>
				</div>
				<div className={styles.background}>
				<img src={projectData.background}/>
				</div>
			</main>
		</>
	);
};

export default ProjectsInformation;
