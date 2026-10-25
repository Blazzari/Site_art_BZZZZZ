const entries = [
  ...document.querySelectorAll<HTMLAnchorElement>('[data-photo]'),
];
const viewer = document.querySelector<HTMLDialogElement>('.photo-viewer');
if (viewer && entries.length) {
  let index = 0;
  const stage = viewer.querySelector<HTMLElement>('.photo-viewer-image')!;
  const render = (next: number) => {
    index = (next + entries.length) % entries.length;
    const entry = entries[index];
    const image = entry.querySelector('img, svg')!.cloneNode(true) as Element;
    if (image instanceof HTMLImageElement) image.loading = 'eager';
    stage.replaceChildren(image);
    viewer.querySelector('[data-count]')!.textContent =
      `${index + 1} / ${entries.length}`;
  };
  entries.forEach((entry, i) =>
    entry.addEventListener('click', (event) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
        return;
      event.preventDefault();
      render(i);
      viewer.showModal();
    }),
  );
  viewer
    .querySelector('.photo-close')!
    .addEventListener('click', () => viewer.close());
  viewer
    .querySelector('[data-prev]')!
    .addEventListener('click', () => render(index - 1));
  viewer
    .querySelector('[data-next]')!
    .addEventListener('click', () => render(index + 1));
  viewer.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      render(index + (event.key === 'ArrowRight' ? 1 : -1));
    }
  });
  let startX = 0;
  let startY = 0;
  stage.addEventListener(
    'touchstart',
    (event) => {
      startX = event.touches[0].clientX;
      startY = event.touches[0].clientY;
    },
    { passive: true },
  );
  stage.addEventListener(
    'touchend',
    (event) => {
      const dx = event.changedTouches[0].clientX - startX;
      const dy = event.changedTouches[0].clientY - startY;
      if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5)
        render(index + (dx < 0 ? 1 : -1));
    },
    { passive: true },
  );
}
