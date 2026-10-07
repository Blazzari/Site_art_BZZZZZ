/** Native horizontal scrolling keeps vertical touch/wheel gestures with the page.
 * Boundary copies provide a one-step loop; the catalogue remains unchanged.
 */
class ArtGallery extends HTMLElement {
  connectedCallback() {
    const track = this.querySelector<HTMLElement>('.gallery-track')!;
    const originals = [
      ...track.querySelectorAll<HTMLElement>('.gallery-slide'),
    ];
    const count = originals.length;
    if (count < 2 || this.dataset.ready) return;
    this.dataset.ready = 'true';
    const controls = this.querySelector<HTMLElement>('.gallery-controls')!;
    const pause = this.querySelector<HTMLButtonElement>('[data-pause]')!;
    const counter = this.querySelector<HTMLElement>('.gallery-count')!;
    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    let paused = motion.matches;
    let visible = false;
    let held = false;
    let keyboard = false;
    let current = 1;
    let idleUntil = 0;
    let timer: ReturnType<typeof setTimeout>;
    let settle: ReturnType<typeof setTimeout>;
    const clone = (source: HTMLElement) => {
      const copy = source.cloneNode(true) as HTMLElement;
      copy.setAttribute('aria-hidden', 'true');
      copy.inert = true;
      return copy;
    };
    track.prepend(clone(originals[count - 1]));
    track.append(clone(originals[0]));
    const slides = [...track.children] as HTMLElement[];
    const target = (index: number) =>
      slides[index].offsetLeft -
      (track.clientWidth - slides[index].clientWidth) / 2;
    const move = (index: number, smooth = true) => {
      current = index;
      track.scrollTo({
        left: target(index),
        behavior: smooth && !motion.matches ? 'smooth' : 'instant',
      });
    };
    const schedule = () => {
      clearTimeout(timer);
      if (!visible || paused || held || keyboard || document.hidden) return;
      timer = setTimeout(
        () => move(current + 1),
        Math.max(3500, idleUntil - Date.now()),
      );
    };
    const interact = () => {
      idleUntil = Date.now() + 5000;
      clearTimeout(timer);
    };
    const updatePause = () => {
      pause.textContent = paused ? 'Lecture' : 'Pause';
      pause.setAttribute(
        'aria-label',
        paused
          ? 'Activer le défilement automatique'
          : 'Mettre le défilement en pause',
      );
    };
    track.addEventListener(
      'scroll',
      () => {
        clearTimeout(timer);
        clearTimeout(settle);
        settle = setTimeout(() => {
          if (held) return;
          current = slides.reduce(
            (best, _, i) =>
              Math.abs(target(i) - track.scrollLeft) <
              Math.abs(target(best) - track.scrollLeft)
                ? i
                : best,
            0,
          );
          if (current === 0) move(count, false);
          else if (current === count + 1) move(1, false);
          counter.textContent = `${current} / ${count}`;
          schedule();
        }, 160);
      },
      { passive: true },
    );
    // Touch-down pauses movement for safe manipulation; vertical scrolling is native.
    track.addEventListener(
      'pointerdown',
      () => {
        held = true;
        interact();
      },
      { passive: true },
    );
    const release = () => {
      if (held) {
        held = false;
        interact();
        schedule();
      }
    };
    window.addEventListener('pointerup', release, {
      signal: this.abort.signal,
    });
    window.addEventListener('pointercancel', release, {
      signal: this.abort.signal,
    });
    track.addEventListener(
      'wheel',
      (event) => {
        if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
          interact();
          schedule();
        }
      },
      { passive: true },
    );
    this.querySelector('[data-previous]')!.addEventListener('click', () => {
      interact();
      move(Math.max(0, current - 1));
    });
    this.querySelector('[data-next]')!.addEventListener('click', () => {
      interact();
      move(Math.min(count + 1, current + 1));
    });
    pause.addEventListener('click', () => {
      paused = !paused;
      updatePause();
      schedule();
    });
    this.addEventListener('keydown', (event) => {
      keyboard = true;
      clearTimeout(timer);
      if (
        event.target === track &&
        ['ArrowLeft', 'ArrowRight'].includes(event.key)
      ) {
        event.preventDefault();
        interact();
        move(
          Math.max(
            0,
            Math.min(
              count + 1,
              current + (event.key === 'ArrowRight' ? 1 : -1),
            ),
          ),
        );
      }
    });
    this.addEventListener('focusout', (event) => {
      if (!this.contains(event.relatedTarget as Node)) {
        keyboard = false;
        schedule();
      }
    });
    motion.addEventListener(
      'change',
      () => {
        paused = motion.matches;
        updatePause();
        schedule();
      },
      { signal: this.abort.signal },
    );
    document.addEventListener('visibilitychange', schedule, {
      signal: this.abort.signal,
    });
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        schedule();
      },
      { threshold: 0.25 },
    );
    observer.observe(track);
    const resize = new ResizeObserver(() => move(current, false));
    resize.observe(track);
    controls.hidden = false;
    updatePause();
    requestAnimationFrame(() => move(1, false));
    this.cleanup = () => {
      clearTimeout(timer);
      clearTimeout(settle);
      observer.disconnect();
      resize.disconnect();
    };
  }
  private abort = new AbortController();
  private cleanup = () => {};
  disconnectedCallback() {
    this.abort.abort();
    this.cleanup();
  }
}
customElements.define('art-gallery', ArtGallery);
