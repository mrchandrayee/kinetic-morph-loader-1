// Duration: 4.5s
const DURATION = 4500;
let currentProgress = 0;
let targetProgress = 0;
let startTime = performance.now();
let lastFrameTime = performance.now();
let animationId = null;
let isRunning = false;

const countElement = document.querySelector("#count");
const progressElement = document.querySelector("#fill");
const statusElement = document.querySelector("#status");
const preview = document.querySelector("#preview");
const replayButton = document.querySelector("#replay");

function animate(now) {
  if (!isRunning) return;
  const elapsed = now - startTime;
  targetProgress = Math.min((elapsed / DURATION) * 100, 100);

  // Smoothly interpolate current progress toward the target.
  const delta = Math.max(0, now - lastFrameTime);
  const easing = 1 - Math.exp(-delta / 90);
  currentProgress += (targetProgress - currentProgress) * easing;
  lastFrameTime = now;

  if (targetProgress >= 100 && 100 - currentProgress < 0.15) {
    currentProgress = 100;
  }

  const displayed = Math.floor(currentProgress);
  countElement.textContent = String(displayed);
  progressElement.style.width = `${currentProgress}%`;

  if (currentProgress >= 100) {
    statusElement.textContent = "COMPLETE";
    isRunning = false;
    animationId = null;
    preview.classList.add("done");
    return;
  }
  animationId = requestAnimationFrame(animate);
}

function startLoader() {
  if (animationId !== null) cancelAnimationFrame(animationId);
  currentProgress = 0;
  targetProgress = 0;
  startTime = performance.now();
  lastFrameTime = startTime;
  isRunning = true;
  countElement.textContent = "0";
  progressElement.style.width = "0%";
  statusElement.textContent = "PLEASE WAIT";
  preview.classList.remove("done");
  animationId = requestAnimationFrame(animate);
}

const snippets = {
  html: `<div class="loader">
  <div class="morph-mark">
    <span class="tile"></span>
    <span class="tile accent"></span>
    <span class="tile"></span>
    <span class="tile"></span>
  </div>
  <div class="percent"><strong>0</strong><span>%</span></div>
  <div class="progress"><span></span></div>
</div>
<div class="reveal">Hey</div>`,
  css: `.morph-mark {
  width: 42px;
  height: 42px;
  position: relative;
  animation: orbit 2.8s linear infinite;
}
.tile {
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 4px;
  background: #fff;
  animation: morph 1.25s ease-in-out infinite alternate;
}
.tile.accent { background: #f05b2d; }
@keyframes morph {
  50% { border-radius: 50%; transform: scale(1.06) rotate(45deg); }
}`,
  js: `// Duration: 4.5s
const DURATION = 4500;
let currentProgress = 0;
let targetProgress = 0;
let startTime = performance.now();
let lastFrameTime = performance.now();
let animationId = null;
let isRunning = false;

// requestAnimationFrame updates the counter
// and eases currentProgress toward targetProgress.`
};

const source = document.querySelector("#source");
const tabs = [...document.querySelectorAll(".tabs button")];
function selectTab(name) {
  source.textContent = snippets[name];
  tabs.forEach(tab => {
    const active = tab.dataset.tab === name;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", String(active));
  });
}
tabs.forEach(tab => tab.addEventListener("click", () => selectTab(tab.dataset.tab)));
selectTab("js");
replayButton.addEventListener("click", startLoader);
startLoader();
