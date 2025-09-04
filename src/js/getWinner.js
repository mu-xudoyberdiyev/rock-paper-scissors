import { spock, scissors, lizard, paper, rock } from "./hands.js";
import { tied, user, robot } from "./status.js";

const getWinner = (u, r) => {
  if (u === r) return tied;
  else {
    if (u === spock) {
      if (r === scissors || r === rock) return user;
      else return robot;
    } else if (u === scissors) {
      if (r === paper || r === spock) return user;
      else return robot;
    } else if (u === paper) {
      if (r === rock || r === spock) return user;
      else return robot;
    } else if (u === rock) {
      if (r === spock || r === scissors) return user;
      else return robot;
    } else if (u === lizard) {
      if (r === spock || r === paper) return user;
      else return robot;
    }
  }
};
export default getWinner;
