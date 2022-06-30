import Phaser from 'phaser';

const Game = () => {
	const config = {
		type: Phaser.AUTO,
		width: 800,
		height: 600,
		scene: { preload, create, update }
	};

	new Phaser.Game(config);
};

const preload = () => {};
const create = () => {};
const update = () => {};

export default Game;
