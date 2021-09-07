import React, { useState } from "react";

interface IBoxProps {
	rowIndex: number;
	columnIndex: number;
}

const getRandomColor = () => {
	const letters = "0123456789ABCDEF";
	let color = "#";
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
};

const Box = ({ rowIndex, columnIndex }: IBoxProps) => {
	console.log(rowIndex, columnIndex);

	const [boxColor, setBoxColor] = useState(getRandomColor());

	const clickHandler = (rowIndex: number, columnIndex: number) => {
		setBoxColor(getRandomColor());
	};

	return (
		<div
			className="box"
			style={{ backgroundColor: boxColor }}
			onClick={() => clickHandler(rowIndex, columnIndex)}
		></div>
	);
};

export default Box;
