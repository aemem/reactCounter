import React, { useState, useEffect } from "react";

import propTypes from "prop-types";

const Square = () => {
	const [timer, setTimer] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setTimer(timer + 1);
		}, 1000);
		return () => {
			clearInterval(interval);
		};
	});

	return <div className="squares">{timer}</div>;
};

Square.propTypes = {
	timer: propTypes.string,
};

export default Square;
