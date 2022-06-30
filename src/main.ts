import './style.css';
import Game from './game';

const app = document.querySelector<HTMLDivElement>('#app')!;
Game();

app.innerHTML = `
  <h1>Chickened Out</h1>
`;
