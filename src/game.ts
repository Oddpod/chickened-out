import Phaser from 'phaser';
import Chicken, { CHICKEN_FRAMES } from '~/actors/chicken';

class Scene extends Phaser.Scene {
	preload() {
		this.load.atlas(CHICKEN_FRAMES, 'chicken/chicken.png', 'chicken/chicken.json')
	}

	create() {
		this.anims.create(Chicken);
		this.add.sprite(
			Number(this.game.config.width)/2,
			Number(this.game.config.height)/2,
			CHICKEN_FRAMES,
			'Sprite-0002 0.'
		).play('idle');
	}

	update() {

	}
}

const Game = () => {
	const config: Phaser.Types.Core.GameConfig = {
		type: Phaser.AUTO,
		parent: 'game-screen',
		pixelArt: true,
		width: 100,
		height: 75,
		scene: [Scene]
	}

	new Phaser.Game(config)
};

export default Game;
