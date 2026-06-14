import { home } from "./views/home.js";
import { about } from "./views/about.js";
import { edu } from "./views/edu.js";
import { post } from "./views/post.js";

const routes = {
  "#home": home,
  "#about": about,
  "#edu": edu,
}

function navigate() {
  const hash = window.location.hash || '#home';

  if (hash.startsWith('#post/')) {
    const id = hash.slice(6);
    post(id);
    return;
  }

  const render = routes[hash];
  if (render) render();
  else console.error(`No route found for hash: ${hash}`);
}

window.addEventListener('hashchange', navigate);
window.addEventListener('load', navigate);