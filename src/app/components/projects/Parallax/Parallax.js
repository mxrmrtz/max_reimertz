"use client";
import { useRef, useEffect } from "react";
import styles from "./Parallax.module.css";
import Projects from "../Projects/Projects";

const Parallax = ({setProjectData,setIsShowing}) => {
	useEffect(() => {
		const handleScroll = () => {
			const scrollX = window.scrollX;
			console.log(scrollX);
			const cards = document.getElementsByClassName("card");

			Array.from(cards).forEach((card) => {
				card.style.transform = `translateX(-${scrollX}px)`;
			});
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
		
			<main className={styles.main}>
				<div className={styles.cards_wrapper}>
						<Projects setIsShowing={setIsShowing} setProjectData={setProjectData}/>
				</div>
			</main>
		</>
	);
};
export default Parallax;
