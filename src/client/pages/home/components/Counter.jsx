import React, { useState, useEffect } from 'react';

const Counter = () => {
	const [ count, setCount ] = useState(0);

	useEffect(() => {
		document.title = count;
	}, [count]);

	return (
		<React.Fragment>
			<p>Conunt is : {count}</p>
			<button onClick={() => setCount(count + 1)}> + </button>
		</React.Fragment>
	);
}

export { Counter };