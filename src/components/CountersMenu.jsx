import React, { Component } from "react";
import Counter from "./counter";

const COUNTERS_NUM = 3;

class CountersMenu extends Component {
	state = {
		counters: [],
	};

	constructor() {
		super();

		for (let i = 0; i < COUNTERS_NUM; i++)
			this.state.counters.push({ id: i, count: 0 });
		console.log(this.state.counters);
	}

	render() {
		console.log("Render Menu!");
		return (
			<React.Fragment>
				{this.state.counters.map((c) => (
					<Counter
						key={c.id}
						id={c.id}
						count={c.count}
						handleIncrement={this.handleIncrement}
						handleDecrement={this.handleDecrement}
					/>
				))}
			</React.Fragment>
		);
	}

	handleIncrement = (id) => {
		console.log("Inc", id);
		const counters = [...this.state.counters];
		counters[id].count = this.state.counters[id].count + 1;
		console.log(counters);
		this.setState({ counters });
	};

	handleDecrement = (id) => {
		console.log("Decr", id);
		const counters = [...this.state.counters];
		counters[id].count = Math.max(this.state.counters[id].count - 1, 0);
		console.log(counters);
		this.setState({ counters });
	};
}

export default CountersMenu;
