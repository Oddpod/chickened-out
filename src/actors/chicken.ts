export const CHICKEN_FRAMES = 'chicken';

const Chicken: Phaser.Types.Animations.Animation = {
	key: 'idle',
	frames: CHICKEN_FRAMES,
	frameRate: 10,
	repeat: -1
};

export default Chicken;