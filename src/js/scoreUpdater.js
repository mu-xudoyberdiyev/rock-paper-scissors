import { advanced } from "./modes.js";
import { robot, tied, user } from "./status.js";
import { elScore } from "./htmlSelection.js";

const scoreUpdater = (winner, mode) => {
  if (winner === user) {
    elScore.textContent = Number(elScore.textContent) + 1;
  }
  if (
    mode === advanced &&
    winner === robot &&
    Number(elScore.textContent) > 0
  ) {
    elScore.textContent = Number(elScore.textContent) - 1;
  }
};

export default scoreUpdater;
