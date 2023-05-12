import Image from "next/image";
import Link from "next/link";

import projectData from "@data/information.json";

import styles from "@styles/projectsinformation.module.css";

const ProjectInformation = ({ project }) => {
	const data = project;
	const images = data.examples;
	console.log(typeof data.background);


	return (
		<>
			<main className={styles.main}>
				<nav>
					<Link className={styles.link} href={"/"}>
						close
					</Link>
				</nav>
				<div className={styles.text_wrapper}>
					<h2 className={styles.title}>{data.name}</h2>
					<section className={styles.information}>
						<h3 className={styles.role}>{data.role}</h3>
						<p className={styles.about}>{data.about}</p>
						<p className={styles.tools}>{data.tools.join(", ")}</p>
					</section>
				</div>
				<div className={styles.background}>
					<Image fill={true} src={`/${data.background}`} alt="Background" />
				</div>
			</main>
			{images.length > 0 && (
				<section className={styles.examples_section}>
					{images.map((item) => (
						<div key={item.id} className={styles.img_container}>
							<Image
								width={500}
								height={500}
								src={`/${item.img}`}
								alt={`Example ${item.id}`}
							/>
						</div>
					))}
				</section>
			)}
		</>
	);
};

export default ProjectInformation;

export async function getStaticPaths() {
	console.log(12313131132)
	console.log(projectData)
	const paths = projectData.projects.map((project) => ({
		params: {
			projectSlug: project.slug
		}
	}));

	console.log(paths)

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps(context) {
	const { projectSlug } = context.params;
	const project = projectData.projects.find(
		(project) => project.slug === projectSlug
	);

	return {
		
		props: { project },
	};
}
