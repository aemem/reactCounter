import React, { useState } from "react";
import PropTypes from "prop-types";

import Square from "./square.jsx";
import Clock from "./clock.jsx";

const Home = () => {
	const [timer, setTimer] = useState(0);

	return (
		<div className="row" id="counter">
			<Clock />
			<Square />
			<Square />
			<Square />
			<Square />
			<Square />
			<Square />
		</div>
	);
};

Home.propTypes = {
	name: PropTypes.string,
};

export default Home;
