const btn45 = document.querySelector<HTMLButtonElement>(".btn-45");
const btnPlayPause = document.querySelector<HTMLElement>(".btn-play-pause");

btn45?.addEventListener("click", () => {
  document.body.classList.toggle("is-angle");
});

btnPlayPause?.addEventListener("click", () => {
  document.body.classList.toggle("is-paused");
  btnPlayPause.classList.toggle("is-playing");
});
