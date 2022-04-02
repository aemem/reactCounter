import React, { useState, useEffect } from "react";

const Home = () => {
	const [timer, setTimer] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setTimer(timer + 1);
		}, 1000);
		return () => {
			clearInterval(interval);
		};
	});
	return (
		<div className="row" id="counter">
			<div className="clock">
				<i className="fa-regular fa-clock"></i>
			</div>
			<div className="squares">{timer}</div>
			<div className="squares">{timer}</div>
			<div className="squares">{timer}</div>
			<div className="squares">{timer}</div>
			<div className="squares">{timer}</div>
			<div className="squares">{timer}</div>
		</div>
	);
};

export default Home;
