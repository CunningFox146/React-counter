import React from "react";
import Counter from "./counter";

const CountersMenu = ({ counters, fns }) => {
	return (
		<React.Fragment>
			<button className="btn btn-success m-2" onClick={fns.addCounter}>
				Add counter
			</button>
			<button className="btn btn-warning m-2" onClick={fns.Clear}>
				Clear
			</button>
			<div /*className="d-flex justify-content-around "*/>
				{counters.map((c) => (
					<Counter
						key={c.id}
						id={c.id}
						count={c.count}
						handleIncrement={fns.handleIncrement}
						handleDecrement={fns.handleDecrement}
					/>
				))}
			</div>
		</React.Fragment>
	);
};

export default CountersMenu;
