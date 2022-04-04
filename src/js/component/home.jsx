import React, { useState, useEffect } from "react";

const Home = () => {
	const [timer, setTimer] = useState(0);
	const [start, setStart] = useState(false);

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
			<div className="squares">{Math.floor((timer / 100000) % 10)}</div>
			<div className="squares">{Math.floor((timer / 10000) % 10)}</div>
			<div className="squares">{Math.floor((timer / 1000) % 10)}</div>
			<div className="squares">{Math.floor((timer / 100) % 10)}</div>
			<div className="squares">{Math.floor((timer / 10) % 10)}</div>
			<div className="squares">{Math.floor((timer / 1) % 10)}</div>
		</div>
	);
};

export default Home;
