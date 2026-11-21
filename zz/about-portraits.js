(() => {
  const button = document.querySelector('[data-about-portrait-switch]');
  const portrait = button?.querySelector('[data-admin="about-portrait"]');
  if (!portrait) return;

  const portraits = [
    {src: portrait.getAttribute('src'), alt: portrait.alt},
    {src: 'images/about-portraits/woods.webp', alt: '林间的橙色身影'},
    {src: 'images/about-portraits/train.webp', alt: '火车窗前的背影'},
    {src: 'images/about-portraits/winter.webp', alt: '雪夜木桥上的身影'},
    {src: 'images/about-portraits/peaks.webp', alt: '雪山前的背影'},
  ];
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let current = 0;
  let pending = false;
  let motion;

  async function showPortrait(index, animate) {
    if (pending || index === current) return;
    pending = true;
    try {
      // Decode before swapping so the current image stays visible on slow connections.
      while (index !== current) {
        const next = portraits[index];
        const image = new Image();
        image.src = next.src;
        try {
          await image.decode();
        } catch {
          index = (index + 1) % portraits.length;
          continue;
        }
        motion?.cancel();
        portrait.src = next.src;
        portrait.alt = next.alt;
        current = index;
        if (animate && !reducedMotion.matches) {
          motion = portrait.animate(
            [{opacity: .55, transform: 'scale(1.035)'}, {opacity: 1, transform: 'scale(1)'}],
            {duration: 240, easing: 'ease-out'}
          );
        }
        return;
      }
    } finally {
      pending = false;
    }
  }

  button.addEventListener('click', () => void showPortrait((current + 1) % portraits.length, true));
  button.disabled = false;
  void showPortrait(Math.floor(Math.random() * portraits.length), false);
})();
