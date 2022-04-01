import React from "react";
import PropTypes from "prop-types";

const Clock = () => {
	return (
		<div className="clock">
			<i className="fa-regular fa-clock"></i>
		</div>
	);
};

Clock.propTypes = {
	name: PropTypes.string,
};

export default Clock;
