// Snowcone — interactions. Everything here is progressive enhancement:
// the site reads fine with JavaScript off.
(() => {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Header: shadow on scroll + mobile menu
  const header = $('[data-header]');
  const toggle = $('[data-nav-toggle]');
  if (header) {
    const onScroll = () => header.classList.toggle('is-scrolled', scrollY > 8);
    addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
  if (header && toggle) {
    const setOpen = (open) => {
      header.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', open);
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    };
    toggle.addEventListener('click', () => setOpen(!header.classList.contains('is-open')));
    $$('#nav a').forEach((a) => a.addEventListener('click', () => setOpen(false)));
    addEventListener('keydown', (e) => e.key === 'Escape' && setOpen(false));
  }

  // Count-up numbers ("$12M+", "450%", "3.5K+"...). Values without digits are left alone.
  const countUp = (el) => {
    const raw = el.textContent.trim();
    const m = raw.match(/^(\D*)([\d,]*\.?\d+)(.*)$/);
    if (!m || reduceMotion) return;
    const [, pre, num, post] = m;
    const target = parseFloat(num.replace(/,/g, ''));
    const decimals = (num.split('.')[1] || '').length;
    const commas = num.includes(',');
    const fmt = (v) => {
      const s = v.toFixed(decimals);
      return commas ? Number(s).toLocaleString('en-AU', { minimumFractionDigits: decimals }) : s;
    };
    const start = performance.now();
    const dur = 1600;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / dur);
      el.textContent = pre + fmt(target * (1 - Math.pow(1 - t, 3))) + post;
      if (t < 1) requestAnimationFrame(tick);
      else el.textContent = raw;
    };
    requestAnimationFrame(tick);
  };

  // Scroll reveal + count-up
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        e.target.classList.add('is-in');
        $$('[data-count]', e.target).forEach(countUp);
        io.unobserve(e.target);
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  $$('.reveal').forEach((el) => io.observe(el));

  // Horizontal sliders (press, reviews)
  $$('[data-slider]').forEach((slider) => {
    const track = $('[data-track]', slider);
    const prev = $('[data-prev]', slider);
    const next = $('[data-next]', slider);
    const status = $('[data-status]', slider);
    const bar = $('[data-bar]', slider);
    const noun = status.textContent.replace(/\s*1 of 1$/, '').trim();
    const step = () => (track.firstElementChild?.getBoundingClientRect().width || 300) + 16;
    const update = () => {
      const max = track.scrollWidth - track.clientWidth;
      const cards = track.children.length;
      const perView = Math.max(1, Math.round(track.clientWidth / step()));
      const pages = Math.max(1, cards - perView + 1);
      const page = max <= 0 ? 1 : Math.min(pages, Math.round((track.scrollLeft / max) * (pages - 1)) + 1);
      status.textContent = `${noun} ${page} of ${pages}`.trim();
      const w = 100 / pages;
      bar.style.width = `${w}%`;
      bar.style.transform = `translateX(${(page - 1) * 100}%)`;
      prev.disabled = track.scrollLeft <= 2;
      next.disabled = track.scrollLeft >= max - 2;
    };
    prev.addEventListener('click', () => track.scrollBy({ left: -step() }));
    next.addEventListener('click', () => track.scrollBy({ left: step() }));
    track.addEventListener('scroll', () => requestAnimationFrame(update), { passive: true });
    addEventListener('resize', update);
    update();
  });

  // Generic tabs (case studies)
  $$('[data-tabs]').forEach((root) => {
    const tabs = $$('[role="tab"]', root);
    const panels = $$('[role="tabpanel"]', root);
    const select = (i, focus) => {
      tabs.forEach((t, j) => {
        t.setAttribute('aria-selected', i === j);
        t.tabIndex = i === j ? 0 : -1;
      });
      panels.forEach((p, j) => (p.hidden = i !== j));
      if (focus) tabs[i].focus();
    };
    tabs.forEach((t, i) => {
      t.addEventListener('click', () => select(i));
      t.addEventListener('keydown', (e) => {
        const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        if (d) select((i + d + tabs.length) % tabs.length, true);
      });
    });
    select(0);
  });

  // Services coverflow: centre card flat, neighbours tilted away
  $$('[data-coverflow]').forEach((root) => {
    const tabs = $$('[data-tab]', root);
    const cards = $$('[data-card]', root);
    let current = Number(root.dataset.start) || 0;
    const layout = () => {
      const spread = Math.min(innerWidth * 0.42, 560);
      cards.forEach((card, i) => {
        let d = i - current;
        // wrap so neighbours exist on both sides
        if (d > cards.length / 2) d -= cards.length;
        if (d < -cards.length / 2) d += cards.length;
        const a = Math.abs(d);
        card.style.transform = `translateX(${d * spread}px) translateY(${a * 40}px) rotate(${d * 18}deg) scale(${a ? 0.92 : 1})`;
        card.style.opacity = a > 1 ? 0 : 1;
        card.style.zIndex = 10 - a;
        card.style.pointerEvents = a > 1 ? 'none' : '';
        card.inert = a !== 0;
        card.style.cursor = a === 1 ? 'pointer' : '';
      });
      tabs.forEach((t, i) => t.setAttribute('aria-selected', i === current));
    };
    const go = (i) => {
      current = (i + cards.length) % cards.length;
      layout();
    };
    tabs.forEach((t, i) => t.addEventListener('click', () => go(i)));
    // click a tilted neighbour to bring it to the centre
    cards.forEach((c, i) => c.parentElement.addEventListener('click', (e) => {
      if (e.target.closest('[data-card]') === c && i !== current) go(i);
    }));
    let x0 = null;
    const stage = $('.coverflow__stage', root);
    stage.addEventListener('pointerdown', (e) => (x0 = e.clientX));
    stage.addEventListener('pointerup', (e) => {
      if (x0 === null) return;
      const dx = e.clientX - x0;
      if (Math.abs(dx) > 40) go(current + (dx < 0 ? 1 : -1));
      x0 = null;
    });
    addEventListener('resize', layout);
    layout();
  });

  // The Snowcone Method: six steps around an orbit
  $$('[data-method]').forEach((root) => {
    const steps = $$('[data-step]', root);
    const dots = $$('[data-dot]', root);
    const iconsEls = $$('[data-icon]', root);
    const dashes = $$('[data-dash]', root);
    const n = steps.length;
    let current = 0;
    const show = (i) => {
      current = (i + n) % n;
      steps.forEach((s, j) => (s.hidden = j !== current));
      [...iconsEls, ...dashes].forEach((el) => el.classList.toggle('is-active', Number(el.dataset.icon ?? el.dataset.dash) === current));
      dots.forEach((dot, j) => {
        let d = j - current;
        if (d > n / 2) d -= n;
        if (d < -n / 2) d += n;
        // active dot sits on the left edge of the ring (180deg); others fan out above/below
        dot.style.setProperty('--angle', `${-d * 26}deg`);
        dot.style.opacity = Math.abs(d) > 1 ? 0 : 1;
        dot.classList.toggle('is-active', d === 0);
      });
    };
    $('[data-prev]', root).addEventListener('click', () => show(current - 1));
    $('[data-next]', root).addEventListener('click', () => show(current + 1));
    show(0);
  });

  // Service page "three steps" accordion
  $$('[data-steps]').forEach((root) => {
    const items = $$('[data-step-item]', root);
    items.forEach((item) => {
      $('button', item).addEventListener('click', () => {
        items.forEach((it) => {
          const on = it === item;
          it.classList.toggle('is-active', on);
          $('button', it).setAttribute('aria-expanded', on);
        });
      });
    });
  });
})();
