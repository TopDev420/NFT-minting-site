import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./styles/nav.module.css";

const HamburgerButton = ({ isOpen, onClick }) => {
	const [isMounted, setIsMounted] = useState(false);
	const buttonClass = `${styles.navIcon} ${isOpen ? styles.open : ""}`;

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) return null;

	return (
		<button className={buttonClass} onClick={onClick}>
			<div></div>
		</button>
	);
};

HamburgerButton.defaultProps = {
	isOpen: false,
	onClick: undefined,
};

HamburgerButton.propTypes = {
	isOpen: PropTypes.bool,
	onClick: PropTypes.func,
};

export default HamburgerButton;
