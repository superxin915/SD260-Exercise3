import React from "react";
import "./Button.css";
import Circle from "./Circle";

class Button extends React.Component {
	state = {
		circles: [],
	};

	circleID = 1;

	addCircle = () => {
		const circle = {
			id: this.circleID++,
			number: Math.round(Math.random() * 100),
			color: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
				Math.random() * 255
			)}, ${Math.floor(Math.random() * 255)})`,
		};

		this.setState(previousState => {
			const newArr = [...previousState.circles];
			newArr.push(circle);
			return {
				circles: newArr,
			};
		});
	};

	removeCircle = selectedCircle => {
		this.setState(previousState => ({
			circles: previousState.circles.filter(
				circle => circle !== selectedCircle
			),
		}));
	};

	render = () => (
		<>
			<button onClick={this.addCircle}>Add New Number</button>
			{this.state.circles.map(circle => (
				<Circle
					circle={circle}
					key={circle.id}
					onRemoveCircle={this.removeCircle}
				/>
			))}
		</>
	);
}

export default Button;
