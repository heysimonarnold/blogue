const audio: Record<string, HTMLAudioElement> = {
  "3": new Audio("/explorations/daft-pad/sounds/work-it.mp3"),
  "4": new Audio("/explorations/daft-pad/sounds/make-it.mp3"),
  "5": new Audio("/explorations/daft-pad/sounds/do-it.mp3"),
  "6": new Audio("/explorations/daft-pad/sounds/makes-us.mp3"),
  w: new Audio("/explorations/daft-pad/sounds/harder.mp3"),
  e: new Audio("/explorations/daft-pad/sounds/better.mp3"),
  r: new Audio("/explorations/daft-pad/sounds/faster.mp3"),
  t: new Audio("/explorations/daft-pad/sounds/stronger.mp3"),
  s: new Audio("/explorations/daft-pad/sounds/more-than.mp3"),
  d: new Audio("/explorations/daft-pad/sounds/hour.mp3"),
  f: new Audio("/explorations/daft-pad/sounds/our.mp3"),
  g: new Audio("/explorations/daft-pad/sounds/never.mp3"),
  z: new Audio("/explorations/daft-pad/sounds/ever.mp3"),
  x: new Audio("/explorations/daft-pad/sounds/after.mp3"),
  c: new Audio("/explorations/daft-pad/sounds/work-is.mp3"),
  v: new Audio("/explorations/daft-pad/sounds/over.mp3"),
};

document.addEventListener("keydown", (event: KeyboardEvent) => {
  const code = event.key;

  if (code) playSound(code);
});

const btns = document.querySelectorAll<HTMLElement>(".btn");

btns.forEach((btn) => {
  const code = btn.dataset.sound;
  btn.addEventListener("click", (_: MouseEvent) => {
    if (code) playSound(code);
  });
});

function playSound(code: string) {
  const key = document.querySelector<HTMLElement>(`.key${code}`);

  const sound = audio[code];
  if (!sound || !key) return;

  sound.currentTime = 0;
  sound.play();

  key.classList.add("is-pressed");
  key.addEventListener(
    "transitionend",
    () => key.classList.remove("is-pressed"),
    { once: true },
  );
}
