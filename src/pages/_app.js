import React from "react";
import NextApp from "next/app";
import { AnimatePresence, motion } from "framer-motion";
import { useTransition, animated } from "@react-spring/web";

import NavBar from "@components/Navbar";

import "@styles/globals.css";

export default class Application extends NextApp {
	render() {
		const { Component, pageProps, router } = this.props;
		console.log(router.pathname);
		// const [transitions, api] = useTransition(data, () => ({
		// 	from: { opacity: 0 },
		// 	enter: { opacity: 1 },
		// 	leave: { opacity: 1 },
		//   }))

		return (
			<React.StrictMode>
				<NavBar />
				<AnimatePresence initial={false}>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.6, ease: "easeInOut" }}
						key={router.pathname}
					>
						<Component {...pageProps} />
					</motion.div>
				</AnimatePresence>
			</React.StrictMode>
		);
	}
}
