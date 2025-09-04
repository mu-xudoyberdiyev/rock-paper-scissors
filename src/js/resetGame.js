import {
  elChoosingZone,
  elGamingZone,
  elModeChangerButton,
  elPickedHandRobotImg,
  elPickedHandUserImg,
  elStatusContainer,
} from "./htmlSelection.js";

const resetGame = () => {
  elStatusContainer.classList.remove("scale-100");
  elStatusContainer.classList.add("scale-0");

  elChoosingZone.classList.remove("hidden");
  elChoosingZone.classList.add("block");

  elGamingZone.classList.remove("flex");
  elGamingZone.classList.add("hidden");

  elPickedHandRobotImg.classList.remove(
    "shadow-[0px_0px_0px_65px_rgba(255,255,255,0.05),0px_0px_0px_130px_rgba(255,255,255,0.05),0px_0px_0px_200px_rgba(255,255,255,0.05)]"
  );

  elPickedHandUserImg.classList.remove(
    "shadow-[0px_0px_0px_65px_rgba(255,255,255,0.05),0px_0px_0px_130px_rgba(255,255,255,0.05),0px_0px_0px_200px_rgba(255,255,255,0.05)]"
  );

  elModeChangerButton.classList.remove("scale-0");
  elModeChangerButton.classList.add("scale-100");
};

export default resetGame;
