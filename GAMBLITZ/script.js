const levels = [
	{
		start: "c1",
		goal: "c5",
		board: [
			"a1wr",
			"a2",
			"a3",
			"a4",
			"a5wq",
			"b1",
			"b2wp",
			"b3",
			"b4wp",
			"b5",
			"c1bp",
			"c2wr",
			"c3wn",
			"c4wb",
			"c5",
			"d1",
			"d2wp",
			"d3",
			"d4wp",
			"d5",
			"e1wr",
			"e2",
			"e3",
			"e4",
			"e5wk"
		],
		boardsize: "5x5",
		promotion: []
	},
	{
		start: "a1",
		goal: "b1",
		board: [
			"a1bp",
			"a2wk",
			"a3wn",
			"a4wb",
			"a5wn",
			"b1",
			"b2wb",
			"b3wk",
			"b4wp",
			"b5wp"
		],
		boardsize: "2x5",
		promotion: ["a5"]
	},
	{
		start: "a4",
		goal: "d1",
		board: [
			"a2wb",
			"a3wr",
			"a4bk",
			"b2wb",
			"b3wr",
			"b4wn",
			"c2wb",
			"c3wr",
			"c4wn",
			"d1",
			"d2wb",
			"d3wr",
			"d4wn"
		],
		boardsize: "4x4",
		promotion: []
	},
	{
		start: "a2",
		goal: "c2",
		board: [
			"a1wn",
			"a2bp",
			"a3wn",
			"a4wn",
			"b1wb",
			"b2wb",
			"b3wb",
			"c2",
			"c3wn",
			"c4wn"
		],
		boardsize: "3x4",
		promotion: ["a4"]
	},
	{
		start: "b1",
		goal: "c1",
		board: [
			"a2wb",
			"a3wp",
			"a4wb",
			"a5wp",
			"b1bp",
			"b2wk",
			"b3wn",
			"b4wn",
			"b5wb",
			"c1",
			"c2wb",
			"c3wp",
			"c4wb",
			"c5wp"
		],
		boardsize: "3x5",
		promotion: ["b5"]
	},
	{
		start: "a1",
		goal: "c1",
		board: [
			"a1bp",
			"a2wr",
			"a3wn",
			"a4wr",
			"a5wn",
			"b1wp",
			"b2wn",
			"b3wp",
			"b4wn",
			"b5wp",
			"c1",
			"c2wr",
			"c3wn",
			"c4wr",
			"c5wn"
		],
		boardsize: "3x5",
		promotion: ["a5"]
	},
	{
		start: "a1",
		goal: "e1",
		board: [
			"a1bp",
			"a2wb",
			"a3wb",
			"b1wn",
			"b2wr",
			"b3wr",
			"c2wp",
			"c3wp",
			"d2wb",
			"d3wn",
			"e1",
			"e2wp",
			"e3wb",
			"f2wn",
			"f3wp"
		],
		boardsize: "6x3",
		promotion: ["a3"]
	},
	{
		start: "a1",
		goal: "e1",
		board: [
			"a1bp",
			"a2wb",
			"a3wb",
			"b2wb",
			"b3wn",
			"c2wn",
			"c3wp",
			"d2wr",
			"d3wn",
			"e1",
			"e2wr",
			"e3wp"
		],
		boardsize: "5x3",
		promotion: ["a3"]
	},
	{
		start: "a1",
		goal: "d3",
		board: [
			"a1bp",
			"a2wn",
			"a3wn",
			"a4wn",
			"a5wn",
			"b1wr",
			"b2wp",
			"b3wp",
			"b4wp",
			"b5wp",
			"c1wn",
			"c2wp",
			"c3wn",
			"c4wp",
			"c5wp",
			"d3"
		],
		boardsize: "4x5",
		promotion: ["a5"]
	},
	{
		start: "a2",
		goal: "f2",
		board: [
			"a2bn",
			"b1wb",
			"b2wp",
			"b3wb",
			"c1wp",
			"c2wb",
			"c3wp",
			"d1wn",
			"d2wp",
			"d3wn",
			"e1wp",
			"e2wn",
			"e3wp",
			"f2"
		],
		boardsize: "6x3",
		promotion: []
	},
	{
		start: "a1",
		goal: "d1",
		board: [
			"a1bn",
			"a2wb",
			"a3wq",
			"b1wk",
			"b2wp",
			"b3wn",
			"c2wb",
			"c3wp",
			"d1",
			"d2wr",
			"d3wb"
		],
		boardsize: "4x3",
		promotion: []
	},
	{
		start: "a3",
		goal: "f1",
		board: [
			"a3bn",
			"a2wn",
			"b2wn",
			"b3wb",
			"c2wn",
			"c3wb",
			"d2wn",
			"d3wb",
			"e1wr",
			"e2wr",
			"e3wb",
			"f1",
			"f2wr",
			"f3wr"
		],
		boardsize: "6x3",
		promotion: []
	},
	{
		start: "d1",
		goal: "a1",
		board: [
			"a1",
			"a2wr",
			"a3wb",
			"a4wn",
			"b2wr",
			"b3wb",
			"b4wn",
			"c2wr",
			"c3wb",
			"c4wn",
			"d1bp",
			"d2wr",
			"d3wb",
			"d4wn"
		],
		boardsize: "4x4",
		promotion: ["d4"]
	},
	{
		start: "b2",
		goal: "b1",
		board: [
			"a3wn",
			"a4wn",
			"a5wb",
			"b1",
			"b2bp",
			"b3wr",
			"b4wb",
			"b5wb",
			"c3wn",
			"c4wn",
			"c5wb"
		],
		boardsize: "3x5",
		promotion: ["b5"]
	},
	{
		start: "a1",
		goal: "d3",
		board: [
			"a1br",
			"a2wn",
			"a3wb",
			"b1wn",
			"b2wr",
			"b3wp",
			"c1wn",
			"c2wn",
			"c3wb",
			"d3"
		],
		boardsize: "4x3",
		promotion: []
	},
	{
		start: "b1",
		goal: "b5",
		board: [
			"a2wn",
			"a3wn",
			"a4wb",
			"b1bb",
			"b2wp",
			"b3wp",
			"b4wn",
			"b5",
			"c2wn",
			"c3wn",
			"c4wb"
		],
		boardsize: "3x5",
		promotion: []
	},
	{
		start: "b1",
		goal: "b5",
		board: [
			"a2wn",
			"a3wn",
			"a4wp",
			"b1bb",
			"b2wp",
			"b3wb",
			"b4wn",
			"b5",
			"c2wn",
			"c3wn",
			"c4wp"
		],
		boardsize: "3x5",
		promotion: []
	},
	{
		start: "a1",
		goal: "c1",
		board: [
			"a1bp",
			"a2wn",
			"a3wn",
			"a4wn",
			"a5wn",
			"a6wn",
			"b2wb",
			"b3wp",
			"b4wn",
			"b5wp",
			"b6wp",
			"c1",
			"c2wn",
			"c3wn",
			"c4wn",
			"c5wn",
			"c6wn"
		],
		boardsize: "3x6",
		promotion: ["a6"]
	},
	{
		start: "b1",
		goal: "d1",
		board: [
			"a3wn",
			"a4wp",
			"a5wn",
			"b1bp",
			"b2wn",
			"b3wn",
			"b4wr",
			"b5wn",
			"b6wn",
			"c2wp",
			"c3wp",
			"c4wn",
			"c5wp",
			"c6wp",
			"d1",
			"d2wn",
			"d3wp",
			"d4wn",
			"d5wp",
			"d6wn",
			"e3wn",
			"e4wp",
			"e5wn"
		],
		boardsize: "5x6",
		promotion: ["b6"]
	},
	{
		start: "b1",
		goal: "c1",
		board: [
			"a2wr",
			"a3wp",
			"a4wp",
			"a5wr",
			"b1bp",
			"b2wn",
			"b3wn",
			"b4wb",
			"b5wb",
			"c1",
			"c2wb",
			"c3wp",
			"c4wp",
			"c5wp"
		],
		boardsize: "3x5",
		promotion: ["b5"]
	}
];

let currentLevel = 0;
let moveCount = 0;
let mainPiece = {};
let goalPosition = "";
let selectedPiece = null;
let boardConfig = [];
let promotionSquares = [];

document.querySelector(".intro-screen-btn").addEventListener("click", () => {
	document.querySelector(".intro-screen").style.display = "none";
});
document.querySelector(".info-screen-btn").addEventListener("click", () => {
	document.querySelector(".info-screen").style.display = "none";
	document.querySelector(".mid-header").style.display = "flex";
	currentLevel = getHighestUnlockedLevel();
	loadLevel(levels[currentLevel]);
});

function getHighestUnlockedLevel() {
	let highestLevel = 0;
	let allLevelsCleared = true;
	for (let level in scoreboard) {
		if (scoreboard[level] !== "--") {
			highestLevel = Math.max(highestLevel, parseInt(level));
		} else {
			allLevelsCleared = false;
		}
	}
	return allLevelsCleared ? 0 : highestLevel;
}

let scoreboard = {};
levels.forEach((level, index) => {
	scoreboard[index + 1] = "--";
});

function loadScores() {
	const savedScores = localStorage.getItem("chessScoreboard");
	if (savedScores) {
		scoreboard = JSON.parse(savedScores);
	}
}

function loadSelectedArtStyle() {
	const savedStyle = localStorage.getItem("selectedArtStyle");
	if (savedStyle) {
		updatePieceStyles(savedStyle);
		document.getElementById("styleDropdown").value = savedStyle;
		const styleDropdown = document.getElementById("styleDropdown");
		if (styleDropdown) {
			styleDropdown.value = savedStyle;
		}
	} else {
		updatePieceStyles(styles[0]);
	}
}

document.addEventListener("DOMContentLoaded", () => {
	loadScores();
	const highestUnlockedLevel = getHighestUnlockedLevel();
	document.querySelector(
		".info-screen-btn .btn-text"
	).textContent = `Play Level ${highestUnlockedLevel + 1}`;

	const chessboard = document.getElementById("chessboard");
	drawBoard(chessboard);
	loadLevel(levels[currentLevel]);

	document.getElementById("resetButton").addEventListener("click", () => {
		loadLevel(levels[currentLevel]);
	});

	const levelDropdown = document.getElementById("levelDropdown");
	levels.forEach((level, index) => {
		const option = document.createElement("option");
		option.value = index;
		option.textContent = `Level ${index + 1}`;
		levelDropdown.appendChild(option);

		if (index > 0 && scoreboard[index] === "--") {
			option.disabled = true;
		}
	});

	levelDropdown.addEventListener("change", () => {
		currentLevel = parseInt(levelDropdown.value);
		loadLevel(levels[currentLevel]);
	});
});

function drawBoard(boardElement, rows, cols) {
	boardElement.innerHTML = "";
	document.documentElement.style.setProperty("--rows", rows);
	document.documentElement.style.setProperty("--cols", cols);

	const columns = "ABCDEFGH";
	for (let row = rows; row >= 1; row--) {
		for (let col = 0; col < cols; col++) {
			const square = document.createElement("div");
			square.classList.add("square", (row + col) % 2 === 0 ? "white" : "black");
			square.id = `${columns[col].toLowerCase()}${row}`;
			boardElement.appendChild(square);

			square.addEventListener("dragover", (e) => {
				e.preventDefault();
				square.classList.add("drag-over");
			});
			square.addEventListener("dragleave", () => {
				square.classList.remove("drag-over");
			});
			square.addEventListener("drop", (e) => {
				e.preventDefault();
				square.classList.remove("drag-over");
				if (
					selectedPiece &&
					boardConfig.includes(square.id) &&
					!square.dataset.piece
				) {
					movePiece(square.id);
				}
			});

			square.addEventListener("click", () => {
				if (
					selectedPiece &&
					boardConfig.includes(square.id) &&
					!square.dataset.piece
				) {
					movePiece(square.id);
				}
			});
		}
	}
}

function loadLevel(level) {
	moveCount = 0;
	updateMoveCountDisplay();
	clearBoard();

	document.getElementById("levelDropdown").value = currentLevel;

	const [cols, rows] = level.boardsize.split("x").map(Number);
	drawBoard(document.getElementById("chessboard"), rows, cols);

	grayOutUnusedSquares(level);
	mainPiece = {
		position: level.start,
		piece: getPiece(level.start, level.board)
	};
	goalPosition = level.goal;
	promotionSquares = level.promotion;
	selectedPiece = null;
	boardConfig = [
		level.start,
		level.goal,
		...level.board.map((item) => item.slice(0, 2))
	];
	level.board.forEach((item) => {
		const position = item.slice(0, 2);
		const piece = getPiece(position, level.board);
		placePiece(position, piece);
	});
	placePiece(level.start, mainPiece.piece, true);

	const goalSquare = document.getElementById(goalPosition);
	if (goalSquare) {
		goalSquare.classList.add("target-square");
	}
}

function clearBoard() {
	document.querySelectorAll(".square").forEach((square) => {
		square.textContent = "";
		square.classList.remove(
			"highlight",
			"selected-piece",
			"gray-out",
			"target-square"
		);
		delete square.dataset.piece;
		delete square.dataset.main;
	});
}

function grayOutUnusedSquares(level) {
	const usedSquares = [
		level.start,
		level.goal,
		...level.board.map((item) => item.slice(0, 2))
	];
	document.querySelectorAll(".square").forEach((square) => {
		if (!usedSquares.includes(square.id)) {
			square.classList.add("gray-out");
		}
	});
}

function updateMoveCountDisplay() {
	document.getElementById("moveCount").textContent = `Moves: ${moveCount}`;
}

function getPiece(position, board) {
	const piece = board.find((item) => item.startsWith(position));
	if (piece) {
		return piece.slice(2);
	}
	return "";
}

function placePiece(position, piece, isMain = false) {
	const square = document.getElementById(position);
	if (square) {
		square.textContent = piece[1];
		square.dataset.piece = piece;
		square.draggable = true;
		if (isMain) {
			square.dataset.main = "true";
		}
		square.addEventListener("click", (e) => {
			e.stopPropagation();
			if (boardConfig.includes(position) && square.dataset.piece) {
				selectPiece(position, piece);
			}
		});
		square.addEventListener("dragstart", (e) => {
			if (boardConfig.includes(position) && square.dataset.piece) {
				e.dataTransfer.setData("text/plain", position);
				selectPiece(position, piece);
			}
		});

		square.addEventListener("touchstart", handleTouchStart, { passive: true });
		square.addEventListener("touchmove", handleTouchMove, { passive: false });
		square.addEventListener("touchend", handleTouchEnd, { passive: true });
	}
}

let touchStartX = 0;
let touchStartY = 0;
let touchPiece = null;

function handleTouchStart(e) {
	const touch = e.touches[0];
	touchStartX = touch.clientX;
	touchStartY = touch.clientY;
	touchPiece = e.target;
	selectPiece(touchPiece.id, touchPiece.dataset.piece);
}

function handleTouchMove(e) {
	e.preventDefault();
	const touch = e.touches[0];
	const touchX = touch.clientX;
	const touchY = touch.clientY;
	const elem = document.elementFromPoint(touchX, touchY);

	if (
		elem &&
		elem.classList.contains("square") &&
		boardConfig.includes(elem.id) &&
		!elem.dataset.piece
	) {
		document
			.querySelectorAll(".square.drag-over")
			.forEach((square) => square.classList.remove("drag-over"));
		elem.classList.add("drag-over");
	}
}

function handleTouchEnd(e) {
	const touch = e.changedTouches[0];
	const touchX = touch.clientX;
	const touchY = touch.clientY;
	const elem = document.elementFromPoint(touchX, touchY);

	if (
		elem &&
		elem.classList.contains("square") &&
		boardConfig.includes(elem.id) &&
		!elem.dataset.piece
	) {
		movePiece(elem.id);
	}

	document
		.querySelectorAll(".square.drag-over")
		.forEach((square) => square.classList.remove("drag-over"));
	touchPiece = null;
}

function movePiece(position) {
	if (selectedPiece) {
		const validMoves = getValidMoves(selectedPiece.position, selectedPiece.piece);
		if (validMoves.includes(position)) {
			if (promotionSquares.includes(position) && selectedPiece.piece[1] === "p") {
				showPromotionOptions(
					position,
					selectedPiece.piece[0],
					selectedPiece.position
				);
			} else {
				placePiece(position, selectedPiece.piece, selectedPiece.isMain);
				clearSquare(selectedPiece.position);
				moveCount++;
				updateMoveCountDisplay();
				if (selectedPiece.isMain && position === goalPosition) {
					updateScoreboard(currentLevel + 1, moveCount);
					showLevelClearPopup(currentLevel + 1, moveCount);
				}
				setTimeout(function () {
					selectedPiece = null;
					clearHighlights();
				}, 100);
			}
		}
	}
}

function clearSquare(position) {
	const square = document.getElementById(position);
	if (square) {
		square.textContent = "";
		delete square.dataset.piece;
		delete square.dataset.main;
	}
}

function highlightSelectedPiece(position) {
	const square = document.getElementById(position);
	if (square) {
		square.classList.add("selected-piece");
	}
}

function clearHighlights() {
	document.querySelectorAll(".square.highlight").forEach((square) => {
		square.classList.remove("highlight");
	});
	document.querySelectorAll(".square.selected-piece").forEach((square) => {
		square.classList.remove("selected-piece");
	});
}

function selectPiece(position, piece) {
	if (!piece) return;

	clearHighlights();
	selectedPiece = {
		position,
		piece,
		isMain: document.getElementById(position).dataset.main === "true"
	};
	highlightValidMoves(position, piece);
	highlightSelectedPiece(position);
}

function highlightValidMoves(position, piece) {
	const validMoves = getValidMoves(position, piece);
	validMoves.forEach((move) => {
		const square = document.getElementById(move);
		if (square && !square.dataset.piece) {
			square.classList.add("highlight");
		}
	});
}

function getValidMoves(position, piece) {
	const moves = [];
	const col = position.charCodeAt(0);
	const row = parseInt(position[1], 10);

	if (piece[1] === "p") {
		// pawn moves
		if (piece[0] === "w" && row > 1) {
			moves.push(`${String.fromCharCode(col)}${row - 1}`);
			if (row === 8) {
				for (let r = row - 1; r >= 6; r--) {
					// Down
					if (addValidMove(moves, col, r)) break;
				}
			} else if (row > 1) {
				moves.push(`${String.fromCharCode(col)}${row - 1}`);
			}
		} else if (piece[0] === "b" && row < 8) {
			if (row === 1) {
				for (let r = row + 1; r <= 3; r++) {
					// Up
					if (addValidMove(moves, col, r)) break;
				}
			} else if (row < 8) {
				moves.push(`${String.fromCharCode(col)}${row + 1}`);
			}
		}
	} else if (piece[1] === "r") {
		// rook moves
		for (let r = row + 1; r <= 8; r++) {
			// Up
			if (addValidMove(moves, col, r)) break;
		}
		for (let r = row - 1; r >= 1; r--) {
			// Down
			if (addValidMove(moves, col, r)) break;
		}
		for (let c = col + 1; c <= "h".charCodeAt(0); c++) {
			// Right
			if (addValidMove(moves, c, row)) break;
		}
		for (let c = col - 1; c >= "a".charCodeAt(0); c--) {
			// Left
			if (addValidMove(moves, c, row)) break;
		}
	} else if (piece[1] === "b") {
		// bishop moves
		for (let i = 1; i < 8; i++) {
			// Up-right diagonal
			if (addValidMove(moves, col + i, row + i)) break;
		}
		for (let i = 1; i < 8; i++) {
			// Up-left diagonal
			if (addValidMove(moves, col - i, row + i)) break;
		}
		for (let i = 1; i < 8; i++) {
			// Down-right diagonal
			if (addValidMove(moves, col + i, row - i)) break;
		}
		for (let i = 1; i < 8; i++) {
			// Down-left diagonal
			if (addValidMove(moves, col - i, row - i)) break;
		}
	} else if (piece[1] === "n") {
		// knight moves
		const knightMoves = [
			[1, 2],
			[1, -2],
			[-1, 2],
			[-1, -2],
			[2, 1],
			[2, -1],
			[-2, 1],
			[-2, -1]
		];
		knightMoves.forEach((move) => {
			let newRow = row + move[0];
			let newCol = col + move[1];
			if (
				newRow >= 1 &&
				newRow <= 8 &&
				newCol >= "a".charCodeAt(0) &&
				newCol <= "h".charCodeAt(0)
			) {
				moves.push(`${String.fromCharCode(newCol)}${newRow}`);
			}
		});
	} else if (piece[1] === "q") {
		// queen moves
		for (let r = row + 1; r <= 8; r++) {
			// Up
			if (addValidMove(moves, col, r)) break;
		}
		for (let r = row - 1; r >= 1; r--) {
			// Down
			if (addValidMove(moves, col, r)) break;
		}
		for (let c = col + 1; c <= "h".charCodeAt(0); c++) {
			// Right
			if (addValidMove(moves, c, row)) break;
		}
		for (let c = col - 1; c >= "a".charCodeAt(0); c--) {
			// Left
			if (addValidMove(moves, c, row)) break;
		}
		for (let i = 1; i < 8; i++) {
			// Up-right diagonal
			if (addValidMove(moves, col + i, row + i)) break;
		}
		for (let i = 1; i < 8; i++) {
			// Up-left diagonal
			if (addValidMove(moves, col - i, row + i)) break;
		}
		for (let i = 1; i < 8; i++) {
			// Down-right diagonal
			if (addValidMove(moves, col + i, row - i)) break;
		}
		for (let i = 1; i < 8; i++) {
			// Down-left diagonal
			if (addValidMove(moves, col - i, row - i)) break;
		}
	} else if (piece[1] === "k") {
		// king moves
		const kingMoves = [
			[1, 0],
			[-1, 0],
			[0, 1],
			[0, -1],
			[1, 1],
			[1, -1],
			[-1, 1],
			[-1, -1]
		];
		kingMoves.forEach((move) => {
			let newRow = row + move[0];
			let newCol = col + move[1];
			if (
				newRow >= 1 &&
				newRow <= 8 &&
				newCol >= "a".charCodeAt(0) &&
				newCol <= "h".charCodeAt(0)
			) {
				moves.push(`${String.fromCharCode(newCol)}${newRow}`);
			}
		});
	}

	return moves.filter(
		(move) =>
			boardConfig.includes(move) && !document.getElementById(move).dataset.piece
	);
}

function addValidMove(moves, col, row) {
	const position = `${String.fromCharCode(col)}${row}`;
	if (boardConfig.includes(position)) {
		moves.push(position);
		if (document.getElementById(position).dataset.piece) {
			return true;
		}
	}
	return false;
}

function showPromotionOptions(position, color, originalPosition) {
	const promotionContainer = document.createElement("div");
	promotionContainer.classList.add("promotion-options");

	const queenOption = document.createElement("button");
	queenOption.textContent = "Queen";
	queenOption.addEventListener("click", () => {
		promotePawn(position, color, "q", originalPosition);
		document.body.removeChild(promotionContainer);
	});

	const knightOption = document.createElement("button");
	knightOption.textContent = "Knight";
	knightOption.addEventListener("click", () => {
		promotePawn(position, color, "n", originalPosition);
		document.body.removeChild(promotionContainer);
	});

	promotionContainer.appendChild(queenOption);
	promotionContainer.appendChild(knightOption);
	document.body.appendChild(promotionContainer);
}

function promotePawn(position, color, newPiece, originalPosition) {
	const piece = color + newPiece;
	placePiece(position, piece, selectedPiece.isMain);
	clearSquare(originalPosition);
	moveCount++;
	updateMoveCountDisplay();
	setTimeout(function () {
		selectedPiece = null;
		clearHighlights();
	}, 100);
}

const styles = [
	"staunty",
	"alpha",
	"caliente",
	"california",
	"cardinal",
	"cburnett",
	"horsey",
	"letter",
	"maestro",
	"merida",
	"monarchy",
	"pixel",
	"tatiana"
];

document.addEventListener("DOMContentLoaded", () => {
	const styleDropdown = document.getElementById("styleDropdown");
	styles.forEach((style) => {
		const option = document.createElement("option");
		option.value = style;
		option.textContent = style.charAt(0).toUpperCase() + style.slice(1);
		styleDropdown.appendChild(option);
	});

	styleDropdown.addEventListener("change", () => {
		const selectedStyle = styleDropdown.value;
		updatePieceStyles(selectedStyle);
	});

	if (!document.documentElement.innerHTML.includes("io/RA")) {
		for (let e of document.getElementsByTagName("html")) {
			e.style.display = "none";
		}
	}
	const toggleColorSchemeButton = document.getElementById("toggleColorScheme");
	toggleColorSchemeButton.addEventListener("click", () => {
		if (
			window.matchMedia("(prefers-color-scheme: dark)").matches &&
			!document.documentElement.dataset.theme
		) {
			document.documentElement.dataset.theme = "light";
		} else if (
			window.matchMedia("(prefers-color-scheme: light )").matches &&
			!document.documentElement.dataset.theme
		) {
			document.documentElement.dataset.theme = "dark";
		} else if (document.documentElement.dataset.theme === "dark") {
			document.documentElement.dataset.theme = "light";
		} else {
			document.documentElement.dataset.theme = "dark";
		}
	});

	loadSelectedArtStyle();
});

function updatePieceStyles(style) {
	const pieceTypes = [
		"wn",
		"bn",
		"wb",
		"bb",
		"wp",
		"bp",
		"wr",
		"br",
		"wq",
		"bq",
		"wk",
		"bk"
	];
	pieceTypes.forEach((type) => {
		document.documentElement.style.setProperty(
			`--p-${type}`,
			`url('https://raw.githubusercontent.com/lichess-org/lila/master/public/piece/${style}/${
				type[0]
			}${type[1].toUpperCase()}.svg')`
		);
	});
	localStorage.setItem("selectedArtStyle", style);
}

function updateScoreboard(level, moves) {
	if (scoreboard[level] === "--" || moves < scoreboard[level]) {
		scoreboard[level] = moves;
		displayScoreboard();
		localStorage.setItem("chessScoreboard", JSON.stringify(scoreboard));
	}
	enableNextLevel(level);
}

function enableNextLevel(level) {
	if (levels[level]) {
		const levelDropdown = document.getElementById("levelDropdown");
		levelDropdown.querySelector(`option[value="${level}"]`).disabled = false;
	}
}

function displayScoreboard() {
	const scoreboardElement = document.getElementById("scoreboard-container");
	let scoreboardHTML = `<div class="scoreboard"><div id="close-score" onclick="document.getElementById('scoreboard-container').classList.toggle('show');"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="#212121" class="nc-icon-wrapper"><path d="M27,1H5C2.791,1,1,2.791,1,5V27c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V5c0-2.209-1.791-4-4-4Zm-4.293,20.293c.391,.391,.391,1.023,0,1.414-.195,.195-.451,.293-.707,.293s-.512-.098-.707-.293l-5.293-5.293-5.293,5.293c-.195,.195-.451,.293-.707,.293s-.512-.098-.707-.293c-.391-.391-.391-1.023,0-1.414l5.293-5.293-5.293-5.293c-.391-.391-.391-1.023,0-1.414s1.023-.391,1.414,0l5.293,5.293,5.293-5.293c.391-.391,1.023-.391,1.414,0s.391,1.023,0,1.414l-5.293,5.293,5.293,5.293Z" fill="#212121"></path></g></svg></div><h2>Scoreboard</h2><hr>`;
	scoreboardHTML += `<div class="scores">`;
	console.log(scoreboard);
	for (let level in scoreboard) {
		scoreboardHTML += `<p><span>Lv. ${level}</span> ${scoreboard[level]}</p>`;
	}
	scoreboardHTML += `</div></div>`;
	scoreboardElement.innerHTML = scoreboardHTML;
}

document
	.getElementById("scoreboard-container")
	.addEventListener("click", (e) => {
		if (!e.target.closest(".scoreboard")) {
			document.getElementById("scoreboard-container").classList.toggle("show");
		}
	});

document.getElementById("scoreboardButton").addEventListener("click", () => {
	const scoreboardElement = document.getElementById("scoreboard-container");
	scoreboardElement.classList.toggle("show");
	displayScoreboard();
});

function showLevelClearPopup(level, moves) {
	const popup = document.createElement("div");
	popup.className = "level-clear";

	if (currentLevel < levels.length - 1) {
		const popupContent = `
            <div class="lvl-clear-box">
                <h2>Level ${level} Completed</h2>
                <p><span>Score:</span> ${moves} moves</p>
                <div class="next-lvl btn btn-right">
                    <span class="btn-text">Play Level ${level + 1}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><g fill="#212121" class="nc-icon-wrapper"><line x1="3" y1="10" x2="17" y2="10" fill="none" stroke="#212121" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" data-color="color-2"></line><polyline points="12 15 17 10 12 5" fill="none" stroke="#212121" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline></g></svg>
                </div>
                <div class="same-lvl btn btn-rotate">
                    <span class="btn-text">Play Again</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                        <g fill="#212121" class="nc-icon-wrapper">
                            <polyline points="1.872 3.305 2.28 6.25 5.224 5.843" fill="none" stroke="#212121" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                        </polyline>
                            <path d="M16.232,8.484c-.265-3.763-3.401-6.734-7.232-6.734-3.031,0-5.627,1.86-6.71,4.5" fill="none" stroke="#212121" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                        </path>
                            <circle cx="14.127" cy="14.127" r=".75" fill="#212121" data-color="color-2" data-stroke="none" stroke="none">
                        </circle>
                            <circle cx="9" cy="16.25" r=".75" fill="#212121" data-color="color-2" data-stroke="none" stroke="none">
                        </circle>
                            <circle cx="3.873" cy="14.127" r=".75" fill="#212121" data-color="color-2" data-stroke="none" stroke="none">
                        </circle>
                            <circle cx="1.75" cy="9" r=".75" fill="#212121" data-color="color-2" data-stroke="none" stroke="none">
                        </circle>
                            <circle cx="15.698" cy="11.774" r=".75" fill="#212121" data-color="color-2" data-stroke="none" stroke="none">
                        </circle>
                            <circle cx="11.774" cy="15.698" r=".75" fill="#212121" data-color="color-2" data-stroke="none" stroke="none">
                        </circle>
                            <circle cx="6.226" cy="15.698" r=".75" fill="#212121" data-color="color-2" data-stroke="none" stroke="none">
                        </circle>
                            <circle cx="2.302" cy="11.774" r=".75" fill="#212121" data-color="color-2" data-stroke="none" stroke="none">
                        </circle>
                        </g>
                    </svg>
                </div>
            </div>
        `;
		popup.innerHTML = popupContent;
	} else {
		const popupContent = `
        <div class="lvl-clear-box">
            <h2>Level ${level} Completed</h2>
            <p><span>Score:</span> ${moves} moves</p>
            <h4 style="padding: 0 24px;">Congrats on beating the last level.<br>Feel free to backtrack levels to improve your score.</h4>
            <div class="next-lvl btn" style="display:none;"></div>
                <div class="same-lvl btn btn-rotate">
                    <span class="btn-text">Play Again</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                        <g fill="#212121" class="nc-icon-wrapper">
                            <polyline points="1.872 3.305 2.28 6.25 5.224 5.843" fill="none" stroke="#212121" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                        </polyline>
                            <path d="M16.232,8.484c-.265-3.763-3.401-6.734-7.232-6.734-3.031,0-5.627,1.86-6.71,4.5" fill="none" stroke="#212121" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                        </path>
                            <circle cx="14.127" cy="14.127" r=".75" fill="#212121" data-color="color-2" data-stroke="none" stroke="none">
                        </circle>
                            <circle cx="9" cy="16.25" r=".75" fill="#212121" data-color="color-2" data-stroke="none" stroke="none">
                        </circle>
                            <circle cx="3.873" cy="14.127" r=".75" fill="#212121" data-color="color-2" data-stroke="none" stroke="none">
                        </circle>
                            <circle cx="1.75" cy="9" r=".75" fill="#212121" data-color="color-2" data-stroke="none" stroke="none">
                        </circle>
                            <circle cx="15.698" cy="11.774" r=".75" fill="#212121" data-color="color-2" data-stroke="none" stroke="none">
                        </circle>
                            <circle cx="11.774" cy="15.698" r=".75" fill="#212121" data-color="color-2" data-stroke="none" stroke="none">
                        </circle>
                            <circle cx="6.226" cy="15.698" r=".75" fill="#212121" data-color="color-2" data-stroke="none" stroke="none">
                        </circle>
                            <circle cx="2.302" cy="11.774" r=".75" fill="#212121" data-color="color-2" data-stroke="none" stroke="none">
                        </circle>
                        </g>
                    </svg>
                </div>
            </div>
        `;
		popup.innerHTML = popupContent;
	}

	popup.querySelector(".next-lvl").addEventListener("click", () => {
		currentLevel++;
		if (currentLevel < levels.length) {
			loadLevel(levels[currentLevel]);
		}
		document.body.removeChild(popup);
	});
	popup.querySelector(".same-lvl").addEventListener("click", () => {
		loadLevel(levels[currentLevel]);
		document.body.removeChild(popup);
	});

	document.body.appendChild(popup);
}
