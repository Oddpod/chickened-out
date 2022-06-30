import Phaser from 'phaser';

const CHICKEN_FRAMES = 'chicken';
class Scene extends Phaser.Scene {
	preload() {
		this.load.atlas(CHICKEN_FRAMES, 'chicken/chicken.png', 'chicken/chicken.json');
	}

	create() {
		const chickenConfig = {
			key: 'walk',
			frames: CHICKEN_FRAMES
		}
		this.add.image(0,0, 'chicken').setOrigin(0,0)
	}

	update() {

	}
}

const Game = () => {
	const config = {
		type: Phaser.AUTO,
		pixelArt: true,
		width: 100,
		height: 75,
		scene: [Scene]
	};

	new Phaser.Game(config);
};

export default Game;
