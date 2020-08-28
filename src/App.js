import React, { Component } from "react";
import CountersMenu from "./components/CountersMenu";
import Navbar from "./components/navbar";

class App extends Component {
	state = {};

	render() {
		return (
			<React.Fragment>
				<Navbar />
				<CountersMenu />
			</React.Fragment>
		);
	}
}

export default App;
