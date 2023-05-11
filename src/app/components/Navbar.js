import Link from "next/link";
import styles from "../styles/navbar.module.css";

export default function NavBar() {
	return (
		<nav className={styles.navbar}>
			<ul className={styles.navbar_container}>
				<li>
					<Link className={styles.navbar_link} href={"/"}>
						Projects
					</Link>
				</li>
				<li>
					<Link className={styles.navbar_link} href={"/about"}>
						About
					</Link>
				</li>
			</ul>
		</nav>
	);
}
