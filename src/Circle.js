import React from "react";
import "./Circle.css";

export default function Circle(props) {
	return (
		<div
			className='box'
			style={{ backgroundColor: props.circle.color }}
			onClick={() => props.onRemoveCircle(props.circle)}
		>
			{props.circle.number}
		</div>
	);
}