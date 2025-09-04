import {
  elLogo,
  elRuleImg,
  elModeChangerButton,
  elGameMode,
  elHands,
  elHandImages,
  html,
} from "./htmlSelection.js";

import { basic, advanced } from "./modes.js";

import { scissors, rock, paper, spock, lizard } from "./hands.js";

const logoAdvanced = elLogo.dataset.logoAdvanced;
const logoBasic = elLogo.dataset.logoBasic;
const ruleAdvanced = elRuleImg.dataset.advancedRuleImg;
const ruleBasic = elRuleImg.dataset.basicRuleImg;

// View
const { triangle, polygon } = {
  triangle: "bg-[url(./images/triangle.svg)]",
  polygon: "bg-[url(./images/polygon.svg)]",
};

// Mode changer
const modeChanger = () => {
  if (html.dataset.mode === basic) {
    elLogo.src = logoAdvanced;
    elRuleImg.src = ruleAdvanced;
    elModeChangerButton.textContent = basic;
    elGameMode.classList.remove(triangle);
    elGameMode.classList.add(polygon);

    elGameMode.classList.remove("gap-x-20", "gap-y-6");
    elGameMode.classList.remove("bg-[center_calc(60%)]");
    elGameMode.classList.add("bg-center");

    elHands.forEach((hand) => {
      switch (hand.dataset.user) {
        case scissors:
          hand.classList.add("translate-x-[44px]", "-translate-y-[21px]");
          break;
        case spock:
          hand.classList.remove("hidden");
          hand.classList.add("block");
          hand.classList.add("-translate-x-[43px]", "-translate-y-[20px]");
          break;
        case rock:
          hand.classList.remove("col-start-1", "col-end-3");
          hand.classList.add("-translate-x-[22px]", "translate-y-[16px]");
          break;
        case lizard:
          hand.classList.remove("hidden");
          hand.classList.add("block");
          hand.classList.add("translate-x-[21px]", "translate-y-[16px]");
          break;
        case paper:
          hand.classList.add("col-start-1", "col-end-3");
          break;
        default:
          break;
      }
    });

    elHandImages.forEach((handImage) => {
      handImage.classList.remove("w-[198px]", "h-[203px]");
      handImage.classList.add("w-[145px]", "h-[148px]");
    });

    html.dataset.mode = advanced;
  } else {
    elLogo.src = logoBasic;
    elRuleImg.src = ruleBasic;
    elModeChangerButton.textContent = advanced;
    elGameMode.classList.remove(polygon);
    elGameMode.classList.add(triangle);

    elGameMode.classList.add("gap-x-20", "gap-y-6");
    elGameMode.classList.remove("bg-center");
    elGameMode.classList.add("bg-[center_calc(60%)]");

    elHands.forEach((hand) => {
      switch (hand.dataset.user) {
        case scissors:
          hand.classList.remove("translate-x-[44px]", "-translate-y-[21px]");
          break;
        case spock:
          hand.classList.add("hidden");
          hand.classList.remove("block");
          hand.classList.remove("-translate-x-[43px]", "-translate-y-[20px]");
          break;
        case rock:
          hand.classList.add("col-start-1", "col-end-3");
          hand.classList.remove("-translate-x-[22px]", "translate-y-[16px]");
          break;
        case lizard:
          hand.classList.add("hidden");
          hand.classList.remove("block");
          hand.classList.remove("translate-x-[21px]", "translate-y-[16px]");
          break;
        case paper:
          hand.classList.remove("col-start-1", "col-end-3");
          break;
        default:
          break;
      }
    });

    elHandImages.forEach((handImage) => {
      handImage.classList.remove("w-[145px]", "h-[148px]");
      handImage.classList.add("w-[198px]", "h-[203px]");
    });

    html.dataset.mode = basic;
  }
};

export default modeChanger;
