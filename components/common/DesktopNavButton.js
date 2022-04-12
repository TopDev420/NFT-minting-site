import React from "react";
import { scroller } from "react-scroll";
import styles from "./styles/nav.module.css";

const DesktopNavButton = ({ targetElementId, label }) => {
	const onClick = () => {
		scroller.scrollTo(targetElementId, {
			duration: 500,
			smooth: "easeInOutQuint",
		});
	};

	return (
		<li className={styles.menuBtn} onClick={onClick}>
			{label.toUpperCase()}
		</li>
	);
};

export default DesktopNavButton;
