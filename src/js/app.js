import loader from "./loader.js";
import modeChanger from "./modeChanger.js";
import gameLogic from "./gameLogic.js";
import resetGame from "./resetGame.js";
import { basic } from "./modes.js";
import { elHands } from "./htmlSelection.js";

import {
  elRule,
  elRuleButton,
  elModeChangerButton,
  elResetGameButton,
  html,
} from "./htmlSelection.js";

// Overflow
const overflow = () => {
  document.body.style.overflow = "hidden";
  setTimeout(() => {
    document.body.style.overflow = "auto";
  }, 100);
};

// GameLogic
elHands.forEach((hand) => {
  hand.onclick = () => gameLogic(hand);
});

// Reset game
elResetGameButton.onclick = () => resetGame();

// Show, close rule modal
elRuleButton.onclick = () => elRule.showModal();
elRule.onclick = () => elRule.close();

elModeChangerButton.onclick = () => {
  localStorage.setItem("mode", html.dataset.mode);
  overflow();
  modeChanger();
};

// Remember all of them...
window.onload = () => {
  loader();
  const mode = localStorage.getItem("mode");
  html.dataset.mode = mode === "" ? basic : mode;
  overflow();
  modeChanger();
};
