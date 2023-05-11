"use client";

import AnimationWrapper from "../components/AnimationWrapper";
import styles from "../styles/about.module.css";
import { easeInOut, motion as m } from "framer-motion";


const About = () => {
	return (
		<m.div
		initial={{ y: "100%" }}
			animate={{ y: "0%" }}
			transition={{ duration: 0.75, ease: "easeOut" }}
			exit={{opacity:1}}
			className={styles.animation}
		>
			<div className={styles.container}>
				<h1>sadas</h1>
				<h3>asdasdasdasdas</h3>
				<p>sadasdasdasdasdasdasdasd</p>
			</div>
		</m.div>
	);
};

export default About;
