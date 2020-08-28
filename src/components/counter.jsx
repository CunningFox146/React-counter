import React from "react";

const Counter = (props) => {
	console.log("Render counter!");
	return (
		<div>
			<button className="btn btn-info m-1">{props.count}</button>
			<button
				className="btn btn-secondary m-1"
				onClick={() => props.handleIncrement(props.id)}
			>
				+
			</button>
			<button
				className="btn btn-secondary m-1"
				onClick={() => props.handleDecrement(props.id)}
			>
				-
			</button>
		</div>
	);
};

export default Counter;
