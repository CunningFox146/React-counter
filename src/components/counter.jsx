import React, { Component } from "react";

class Counter extends Component {
	state = {};

	render() {
		console.log("Render counter!");
		return (
			<div>
				<button className="btn btn-primary m-1">{this.props.count}</button>
				<button
					className="btn btn-secondary m-1"
					onClick={() => this.props.handleIncrement(this.props.id)}
				>
					+
				</button>
				<button
					className="btn btn-secondary m-1"
					onClick={() => this.props.handleDecrement(this.props.id)}
				>
					-
				</button>
			</div>
		);
	}
}

export default Counter;
