import React from "react";
import "./Circle.css";

class Circle extends React.Component {
	render = () => (
		<div
			className='box'
			style={{ backgroundColor: this.props.circle.color }}
			onClick={() => this.props.onRemoveCircle(this.props.circle)}
		>
			{this.props.circle.number}
		</div>
	);
}

export default Circle;
