import Link from "next/link";
import { motion as m } from "framer-motion";

import styles from "@styles/about.module.css";

const About = () => {
	return (
		<m.div
		animate={{ y: "0%" }}
		exit={{ opacity: 1 }}
		initial={{ y: "100%" }}
		transition={{
		  duration: 0.75,
		  ease: "easeOut",
		}}
		>
			<main className={styles.about_main}>
				<section className={styles.information}>
					<div className={styles.personal_info}>
						<h1>Maximiliam Reimertz</h1>
						<h3>smth smth</h3>
						<div className={styles.contact_info}>
							<Link href={"https://github.com/mxrmrtz"}>GitHub</Link>
							<Link
								href={"https://www.linkedin.com/in/max-reimertz-83a272221/"}
							>
								Linkdin
							</Link>
							<Link href={"https://twitter.com/mxrmrtz"}>Twitter</Link>
							<Link href={"https://www.instagram.com/mxrmrtz/"}>Instagram</Link>
						</div>
					</div>
				</section>
			</main>
		</m.div>
	);
};

export default About;
