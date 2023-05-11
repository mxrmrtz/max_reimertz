import { easeInOut, motion as m } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const AnimationWrapper = ({ children }) => {
	const path = usePathname();
	console.log(path);
	return (
		<AnimatePresence initial={false} mode={"wait"}>
			<m.div
				key={path}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 1 }}
				transition={{ duration: 0.75, ease: easeInOut }}
			>
				{children}
			</m.div>
		</AnimatePresence>
	);
};

export default AnimationWrapper;
