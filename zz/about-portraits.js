(() => {
  const button = document.querySelector('[data-about-portrait-switch]');
  const portrait = button?.querySelector('[data-admin="about-portrait"]');
  const caption = document.querySelector('#about-section [data-admin="about-portrait-label"]');
  if (!portrait || !caption) return;

  const portraits = [
    {src: portrait.getAttribute('src'), alt: portrait.alt, caption: caption.textContent},
    {src: 'images/about-portraits/sketch.webp', alt: '手绘小狗', caption: 'Sketch'},
    {src: 'images/about-portraits/lake.webp', alt: '蓝色湖边的背影', caption: 'By the Lake'},
    {src: 'images/about-portraits/woods.webp', alt: '林间的橙色身影', caption: 'Among the Pines'},
    {src: 'images/about-portraits/train.webp', alt: '火车窗前的背影', caption: 'Train Window'},
    {src: 'images/about-portraits/winter.webp', alt: '雪夜木桥上的身影', caption: 'Winter Night'},
    {src: 'images/about-portraits/peaks.webp', alt: '雪山前的背影', caption: 'Snow Peaks'},
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
        caption.textContent = next.caption;
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
