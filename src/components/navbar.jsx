import React from "react";

const Navbar = ({ count = 0, totalVal = 0 }) => {
	return (
		<nav className="navbar navbar-light bg-light">
			<span>
				<b>Counters num:</b>
				<span className="badge badge-info m-2">{count}</span>
				<b>Total sum:</b>
				<span className="badge badge-secondary m-2">{totalVal}</span>
			</span>
		</nav>
	);
};

export default Navbar;
