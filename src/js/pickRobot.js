import { spock, lizard, rock, paper, scissors } from "./hands.js";
import { advanced } from "./modes.js";

// Shuffle Array
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// Random index
const randomIndex = (l) => {
  return Math.round(Math.random() * (l - 1));
};

// Pick robot
const pickRobot = (mode) => {
  let hands;
  if (mode === advanced) {
    hands = shuffleArray([paper, scissors, rock, spock, lizard]);
    return hands[randomIndex(hands.length)];
  } else {
    hands = [paper, scissors, rock];
    return hands[randomIndex(hands.length)];
  }
};

export default pickRobot;
