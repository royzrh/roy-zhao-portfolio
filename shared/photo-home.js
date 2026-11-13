(() => {
  const header = document.getElementById('photo-site-header');
  const cover = document.getElementById('normalHero');
  if (!header || !cover) return;
  const update = () => {
    const birthday = cover.style.display === 'none';
    document.body.classList.toggle('photo-birthday-cover', birthday);
    const glassBar = !birthday && cover.getBoundingClientRect().bottom <= 160;
    header.classList.toggle('is-past-cover', glassBar);
    document.body.classList.toggle('photo-glass-bar', glassBar);
  };
  new IntersectionObserver(update, {threshold: [0, 1]}).observe(cover);
  window.addEventListener('scroll', update, {passive: true});
  window.addEventListener('resize', update, {passive: true});
  new MutationObserver(update).observe(cover, {attributes: true, attributeFilter: ['style']});
  const label = document.querySelector('[data-cover-explore]');
  if (label) new MutationObserver(() => {
    label.textContent = document.documentElement.lang.startsWith('en') ? 'Explore photographs' : '向下探索';
  }).observe(document.documentElement, {attributes: true, attributeFilter: ['lang']});
  const menu = document.getElementById('photo-menu');
  if (menu) {
    const trigger = menu.querySelector('summary');
    const panel = menu.querySelector('nav');
    const hover = matchMedia('(hover: hover) and (pointer: fine)');
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    const surface = document.querySelector('.photo-nav-surface');
    const curtain = document.querySelector('.photo-nav-curtain');
    let targetOpen = menu.open, leaveTimer, closeTimer, hoverAfter = 0;
    function syncSurface() {
      const start = header.classList.contains('is-past-cover') ? header.getBoundingClientRect().bottom : 0;
      surface.style.setProperty('--photo-menu-start', start + 'px');
      if (menu.open) surface.style.setProperty('--photo-menu-height', Math.max(0, Math.ceil(panel.getBoundingClientRect().bottom + 16)) + 'px');
    }
    const menuSizeObserver = new ResizeObserver(syncSurface);
    menuSizeObserver.observe(panel);
    menuSizeObserver.observe(header);
    window.addEventListener('resize', syncSurface, {passive: true});
    window.addEventListener('scroll', syncSurface, {passive: true});
    function setMenu(open) {
      clearTimeout(leaveTimer);
      if (targetOpen === open) return;
      clearTimeout(closeTimer);
      targetOpen = open;
      if (open) {
        const fromHeight = document.body.classList.contains('photo-nav-closing') ? surface.getBoundingClientRect().height : null;
        document.body.classList.remove('photo-nav-closing');
        menu.open = true;
        // Seed the single glass surface at the existing bar's height before extending it.
        surface.style.transition = 'none';
        syncSurface();
        if (fromHeight !== null) surface.style.height = fromHeight + 'px';
        surface.getBoundingClientRect();
        surface.style.transition = '';
        panel.getBoundingClientRect();
      }
      menu.classList.toggle('is-menu-open', open);
      if (open) header.classList.add('is-menu-open');
      document.body.classList.toggle('photo-nav-open', open);
      document.body.classList.toggle('photo-nav-closing', !open);
      trigger.setAttribute('aria-label', open ? '关闭导航' : '打开导航');
      panel.inert = !open;
      if (open) { surface.style.height = ''; syncSurface(); }
      else if (reduced.matches) { menu.open = false; header.classList.remove('is-menu-open'); document.body.classList.remove('photo-nav-closing'); }
      else closeTimer = setTimeout(() => {
        if (!targetOpen) { menu.open = false; header.classList.remove('is-menu-open'); document.body.classList.remove('photo-nav-closing'); }
      }, 540);
    }
    curtain.addEventListener('click', () => setMenu(false));
    trigger.addEventListener('click', event => { event.preventDefault(); setMenu(!targetOpen); });
    menu.addEventListener('pointerenter', event => {
      clearTimeout(leaveTimer);
      if (hover.matches && event.pointerType === 'mouse' && performance.now() >= hoverAfter) setMenu(true);
    });
    menu.addEventListener('pointerleave', event => {
      if (hover.matches && event.pointerType === 'mouse') leaveTimer = setTimeout(() => setMenu(false), 180);
    });
    panel.addEventListener('click', event => {
      if (event.target.closest('button')) { hoverAfter = performance.now() + 1200; setMenu(false); trigger.focus({preventScroll: true}); }
    });
    document.addEventListener('pointerdown', event => {
      if (targetOpen && !menu.contains(event.target)) setMenu(false);
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && targetOpen) {
        event.preventDefault(); hoverAfter = performance.now() + 1200; setMenu(false); trigger.focus({preventScroll: true});
      }
    });
    document.addEventListener('focusin', event => {
      if (targetOpen && !menu.contains(event.target)) setMenu(false);
    });
  }
  update();
})();
