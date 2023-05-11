import styles from "./projectsinformation.module.css";

const ProjectsInformation = ({ projectData, setIsShowing }) => {
	const images = projectData.examples;
	console.log(images);
	return (
		<>
			<main className={styles.main}>
				<nav>
					<p
						onClick={() => {
							setIsShowing(false);
						}}
					>
						close
					</p>
				</nav>
				<div className={styles.text_wrapper}>
					<h2 className={styles.title}>{projectData.name}</h2>
					<section className={styles.information}>
						<h3 className={styles.role}>{projectData.role}</h3>
						<p className={styles.about}>{projectData.about}</p>
						<p className={styles.tools}>{projectData.tools.join(", ")}</p>
					</section>
				</div>
				<div className={styles.background}>
					<img src={projectData.background} />
				</div>
			</main>
			{images.length > 0 && (
				<section className={styles.examples_section}>
					{images.map((item) => (
						<div key={item.id} className={styles.img_container}>
							<img src={item.img} alt={`Example ${item.id}`} />
						</div>
					))}
				</section>
			)}
		</>
	);
};

export default ProjectsInformation;
