# Kinetic Morph Loader

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/kinetic-morph-loader-1/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

Runnable reconstruction of the uploaded 6.67-second video.

## Confirmed details from the video

- Title: **Kinetic Morph Loader**
- Four morphing tiles: three white and one orange.
- Counter progresses to 100%.
- Thin orange progress line.
- White completion panel with the word **Hey**.
- The enlarged code panel clearly shows:
  ```js
  // Duration: 4.5s
  const DURATION = 4500;
  let currentProgress = 0;
  let targetProgress = 0;
  let startTime = performance.now();
  let lastFrameTime = performance.now();
  let animationId = null;
  let isRunning = false;
  ```

## Implemented

- CSS tile morph and orbit animations.
- 4.5-second progress timer.
- `requestAnimationFrame` loop.
- Eased interpolation from current to target progress.
- Percentage counter and progress bar.
- Completion reveal and replay control.
- HTML/CSS/JS source preview tabs.
- Responsive layout and reduced-motion support.

## Run

```bash
python -m http.server 8000
```
Open http://localhost:8000

No npm dependencies required.

## Accuracy note

The enlarged JavaScript declarations and duration are transcribed from the readable video frame. Other small code-panel lines are not fully legible, so the rest is a functional reconstruction of the visible design and behavior, not a verbatim copy of the original source.
