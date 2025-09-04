import { elLoader } from "./htmlSelection.js";
const loader = () => {
  setTimeout(() => {
    elLoader.classList.add("opacity-0", "pointer-events-none");
  }, 1000);
};
export default loader;
