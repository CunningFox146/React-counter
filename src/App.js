import React, { Component } from "react";
import CountersMenu from "./components/CountersMenu";
import Navbar from "./components/navbar";

class App extends Component {
	state = {
		counters: [],
	};

	render() {
		return (
			<React.Fragment>
				<Navbar
					count={this.state.counters.length}
					totalVal={this.getCountersValues()}
				/>
				<CountersMenu
					fns={{
						Clear: this.Clear,
						addCounter: this.addCounter,
						handleIncrement: this.handleIncrement,
						handleDecrement: this.handleDecrement,
					}}
					counters={this.state.counters}
				/>
			</React.Fragment>
		);
	}

	getCountersValues = () => {
		let val = 0;
		this.state.counters.map((c) => (val += c.count));
		return val;
	};

	Clear = () => {
		this.setState({ counters: [] });
	};

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

export default App;
