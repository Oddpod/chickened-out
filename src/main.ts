import './style.css';
import Game from './game';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <h1>Chickened Out</h1>
  <div id="game-screen"></div>
`;

Game();