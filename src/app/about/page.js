"use client";

import styles from "../styles/about.module.css";

import { AnimatePresence, motion as m } from "framer-motion";

import Link from "next/link";

const About = () => {
	return (

		<m.div
			 animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      initial={{ y: "100%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
		>
			<main className={styles.about_main}>
				<section className={styles.information}>
					<div className={styles.personal_info}>
						<h1>Maximiliam Reimertz</h1>
						<p>
							Hello! I'm Max, a 24 year old developer/designer that loves being
							creative, i enjoy being creative in what i do, be that with
							editing, making videos or taking photos. So join me on this
							adventure and we will create some dope things together!
						</p>

						<h4>Linux - Consulten</h4>
						<p>may 2022–july 2022</p>

						<h4>Kaspian - Consulten</h4>
						<p>jan. 2023 - feb. 2023</p>
						<h3>education</h3>

						<h4>Hyper Island - Frontend</h4>
						<p>aug. 2022 - present</p>
					</div>
					<div className={styles.contact_info}>
						<Link href={"https://github.com/mxrmrtz"}>GitHub</Link>
						<Link href={"https://www.linkedin.com/in/max-reimertz-83a272221/"}>
							Linkdin
						</Link>
						<Link href={"https://twitter.com/mxrmrtz"}>Twitter</Link>
						<Link href={"https://www.instagram.com/mxrmrtz/"}>Instagram</Link>
					</div>
				</section>
				<section></section>
			</main>
		</m.div>

	);
};

export default About;
