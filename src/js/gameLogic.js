import pickRobot from "./pickRobot.js";
import getWinner from "./getWinner.js";
import { user, tied, robot } from "./status.js";
import {
  elChoosingZone,
  elGamingZone,
  elPickedHandUserImg,
  elPickedHandRobotImg,
  elModeChangerButton,
  origin,
  html,
  elStatusText,
  elStatusContainer,
} from "./htmlSelection.js";
import scoreUpdater from "./scoreUpdater.js";

// Game Logic
const gameLogic = (hand) => {
  const robotChosen = pickRobot(html.dataset.mode);
  const winner = getWinner(hand.dataset.user, robotChosen);
  elChoosingZone.classList.remove("block");
  elChoosingZone.classList.add("hidden");
  elGamingZone.classList.remove("hidden");
  elGamingZone.classList.add("flex");
  elPickedHandUserImg.src = origin + `/src/images/${hand.dataset.user}.svg`;
  elPickedHandRobotImg.src = origin + "/src/images/choosing.svg";

  setTimeout(() => {
    elPickedHandRobotImg.src = origin + `/src/images/${robotChosen}.svg`;
  }, 1000);

  setTimeout(() => {
    scoreUpdater(winner, html.dataset.mode);
    if (winner === user) {
      elPickedHandUserImg.classList.remove(
        "shadow-[0px_3px_3px_0px_rgba(0,0,0,0.20)]"
      );
      elPickedHandUserImg.classList.add(
        "shadow-[0px_0px_0px_65px_rgba(255,255,255,0.05),0px_0px_0px_130px_rgba(255,255,255,0.05),0px_0px_0px_200px_rgba(255,255,255,0.05)]"
      );
      elStatusText.textContent = "win";
    } else {
      if (winner !== tied) {
        elPickedHandRobotImg.classList.remove(
          "shadow-[0px_3px_3px_0px_rgba(0,0,0,0.20)]"
        );
        elPickedHandRobotImg.classList.add(
          "shadow-[0px_0px_0px_65px_rgba(255,255,255,0.05),0px_0px_0px_130px_rgba(255,255,255,0.05),0px_0px_0px_200px_rgba(255,255,255,0.05)]"
        );
      }
      if (winner === robot) {
        elStatusText.textContent = "lose";
      } else {
        elStatusText.textContent = tied;
      }
    }

    elStatusContainer.classList.remove("scale-0");
    elStatusContainer.classList.add("scale-100");
  }, 1500);

  elModeChangerButton.classList.remove("scale-100");
  elModeChangerButton.classList.add("scale-0");
};

export default gameLogic;
