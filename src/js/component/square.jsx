import React from "react";
import PropTypes from "prop-types";
import propTypes from "prop-types";

const Square = () => {
	return <div className="squares">{timer}</div>;
};

Square.propTypes = {
	timer: propTypes.string,
};

export default Square;
