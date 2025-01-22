/** @typedef { [number,number] } Coordinate */

export function useInteractPixels() {
	/**
	 * @private
	 * Function to create a Matrix width a amount of rows and columns
	 * @param {number} rows - the amount of rows
	 * @param {number} columns - the amount of columns
	 * @returns { Coordinate[] } the matrix created
	 */
	function populateMatrix(rows, columns) {
		let m = new Array(rows).fill(0);
		for (let i = 0; i < rows; i++) m[i] = new Array(columns).fill(0);
		console.log(m);
		return m;
	}

	/**
	 * @private
	 * Check if position matches the array
	 * @param{ number } i - the row position
	 * @param { number} j - the column position
	 * @param { Coordinate } positionArr - The coordinates of the array
	 */
	function checkIfPositionMatch(i, j, positionArr) {
		return i === positionArr[0] && j === positionArr[1];
	}

	/**
	 * @private
	 * Check if position is in the array of positions
	 * @param { number} i - the row position
	 * @param { number} j - the column position
	 * @param { Coordinate[] } positionsArr - The array of positions. Ex : [[2,3], [2,4]]
	 */
	function isPositionInArray(i, j, positionsArr) {
		for (let position of positionsArr) {
			if (checkIfPositionMatch(i, j, position)) return true;
		}
		return false;
	}

	/**
	 * @private
	 * Check if the coordinate is already in the array
	 * @param { Coordinate } c - the coordinate to be checked
	 * @param { Coordinate[] } arr - The array of coordinates
	 * @returns {boolean}
	 */
	function isCoordinateInArray(c, arr) {
		return !!arr.filter((coord) => coord[0] === c[0] && coord[1] === c[1]).length;
	}

	let rows = 9;
	let columns = 36;

	/** @type {Array<Coordinate>} */
	let letters = [
		[2, 2],
		[3, 2],
		[4, 2],
		[5, 2],
		[6, 2],
		[2, 4],
		[3, 4],
		[4, 4],
		[5, 4],
		[6, 4],
		[3, 5],
		[4, 6],
		[5, 7],
		[2, 8],
		[3, 8],
		[4, 8],
		[5, 8],
		[6, 8],
		[2, 10],
		[2, 12],
		[2, 11],
		[3, 11],
		[4, 11],
		[5, 11],
		[6, 11],
		[2, 14],
		[3, 14],
		[4, 14],
		[5, 14],
		[6, 14],
		[2, 15],
		[2, 16],
		[4, 15],
		[6, 15],
		[6, 16],
		[2, 18],
		[3, 18],
		[4, 18],
		[5, 18],
		[6, 18],
		[2, 19],
		[2, 20],
		[3, 20],
		[4, 19],
		[4, 20],
		[5, 19],
		[6, 20],
		[3, 22],
		[4, 22],
		[5, 22],
		[6, 22],
		[2, 23],
		[2, 24],
		[3, 25],
		[4, 25],
		[5, 25],
		[5, 23],
		[5, 24],
		[6, 25],
		[3, 27],
		[4, 27],
		[5, 27],
		[2, 28],
		[2, 29],
		[6, 28],
		[6, 29],
		[2, 31],
		[2, 32],
		[2, 33],
		[3, 32],
		[4, 32],
		[5, 32],
		[6, 32]
	];
	/** @type { Array<Coordinate>} */
	let matrix = $state(populateMatrix(rows, columns));

	/** @type { Array<Coordinate>} */
	let hoveredLetters = $state([]);

	/**
	 * @public
	 * On hover the letter in interaction panel
	 * @param {Coordinate} c - the [x,y] array
	 */
	function onHoverLetter(c) {
		if (isPositionInArray(c[0], c[1], letters) && !isCoordinateInArray(c, hoveredLetters))
			hoveredLetters.push(c);
	}

	/**
	 * Check if a coordinate is hovered
	 * @param { Coordinate } c - the coordinate to be checked
	 * @unpure
	 */
	function isLetterHovered(c) {
		return !!hoveredLetters.filter((a) => a[0] === c[0] && a[1] === c[1]).length;
	}

	/**
	 * Check if user finished
	 */
	function isFinished() {
		return hoveredLetters.length === letters.length;
	}

	return {
		onHoverLetter,
		isLetterHovered,
		isFinished,
		matrix
	};
}
