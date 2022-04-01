import React from "react";
import PropTypes from "prop-types";

import Square from "./square.jsx";
import Clock from "./clock.jsx";

const Home = () => {
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
