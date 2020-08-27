import React, { Component } from "react";
import Counter from "./counter";

class CountersMenu extends Component {
	state = {
		counters: [],
	};

	render() {
		console.log("Render Menu!");
		return (
			<React.Fragment>
				<button className="btn btn-success m-2" onClick={this.addCounter}>
					Add counter
				</button>
				<div>
					{this.state.counters.map((c) => (
						<Counter
							key={c.id}
							id={c.id}
							count={c.count}
							handleIncrement={this.handleIncrement}
							handleDecrement={this.handleDecrement}
						/>
					))}
				</div>
			</React.Fragment>
		);
	}

	addCounter = () => {
		const counters = [...this.state.counters];
		counters.push({ id: counters.length, count: 0 });
		console.log(counters);
		this.setState({ counters });
	};

	handleIncrement = (id) => {
		const counters = [...this.state.counters];
		if (!counters[id]) {
			console.warn(
				`Tried to handleIncrement for counter with invalid id (${id})!`,
				counters
			);
			return;
		}

		counters[id].count = this.state.counters[id].count + 1;
		console.log(counters);
		this.setState({ counters });
	};

	handleDecrement = (id) => {
		const counters = [...this.state.counters];
		if (!counters[id]) {
			console.warn(
				`Tried to handleIncrement for counter with invalid id (${id})!`,
				counters
			);
			return;
		}

		counters[id].count = Math.max(this.state.counters[id].count - 1, 0);

		if (counters[id].count === 0) {
			counters.splice(id, 1);

			counters.forEach((c, idx) => (c.id = idx)); // Since we've changed the index we need to update ids too
		}

		console.log(counters);

		this.setState({ counters });
	};
}

export default CountersMenu;
