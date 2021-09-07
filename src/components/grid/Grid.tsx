import React, { useEffect, useState } from "react";
import Box from "../box/Box";
import "./grid.scss";

const Grid = () => {
	const [gridMatrix, setGridMatrix] = useState<string[][]>([]);
	useEffect(() => {
		const gMatrix: string[][] = Array(11)
			.fill("")
			.map(() => Array(21).fill(""));

		setGridMatrix(gMatrix);
	}, []);

	return (
		<div className="grid">
			{gridMatrix.map((row, rowIndex) => (
				<>
					{row.map((col, colIndex) => (
						<Box rowIndex={rowIndex} columnIndex={colIndex} />
					))}
				</>
			))}
		</div>
	);
};

export default Grid;
