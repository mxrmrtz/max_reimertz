"use client";
import projectData from "../../../../information.json";
import styles from "../../styles/projectsinformation.module.css";
import SimpleParallax from "simple-parallax-js";
import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";


const ProjectInformation = ({ params }) => {
	const id = params.projectId;
	const data = projectData.projects[id];
	const images = data.examples;
  console.log(typeof(data.background))

  const parallaxRef = useRef(null);

	useEffect(() => {
	  const parallaxInstance = new SimpleParallax(parallaxRef.current, {
		scale: 1.5, // Adjust the scale value as needed
		delay:0.1,
		transition: 'cubic-bezier(0,0,0,1)'

	  });
	  return () => {
		parallaxInstance.destroy(); // Clean up the parallax effect when the component unmounts
	  };
	}, []);

	return (
		<>
			<main className={styles.main}>
				<nav>
					<Link className={styles.link}
						href={"/"}
					>
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
				<div ref={parallaxRef} className={styles.background}>
					<Image  fill={true}	 src={`/${data.background}`} alt="Background" />
				</div>
			</main>
			{images.length > 0 && (
				<section className={styles.examples_section}>
					{images.map((item) => (
						<div key={item.id} className={styles.img_container}>
							<Image width={500} height={500} src={`/${item.img}`} alt={`Example ${item.id}`} />
						</div>
					))}
				</section>
			)}
		</>
	);
};

export default ProjectInformation;
