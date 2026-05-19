/* ===========================================================================
 * app.js — entry experience, collage rendering, interactions
 * ========================================================================= */
(() => {
  const D = window.BIRTHDAY_DATA;
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  let _setAudioMode = null; // wired up by setupAudio()

  // -------- 1. TYPEWRITER intro ----------------------------------------------
  function typewriter(el, text, speed = 95) {
    return new Promise((resolve) => {
      let i = 0;
      el.innerHTML = '';
      const caret = document.createElement('span');
      caret.className = 'typewriter-caret';
      el.appendChild(caret);
      const tick = () => {
        if (i >= text.length) { resolve(); return; }
        const ch = text[i++];
        const node = document.createTextNode(ch);
        el.insertBefore(node, caret);
        // slight jitter so it doesn't feel mechanical
        setTimeout(tick, speed + (Math.random() * 60 - 30));
      };
      setTimeout(tick, 400);
    });
  }

  // -------- 2. PASSWORD card -------------------------------------------------
  function setupPasswordCard() {
    const mm = $('#pwd-mm'), dd = $('#pwd-dd'), yy = $('#pwd-yyyy');
    const card = $('#password-card');
    const errEl = $('#pwd-error');

    [mm, dd, yy].forEach((inp, idx) => {
      inp.addEventListener('input', (e) => {
        // numbers only
        e.target.value = e.target.value.replace(/\D/g, '').slice(0, e.target.maxLength);
        if (e.target.value.length >= e.target.maxLength) {
          if (idx < 2) [mm, dd, yy][idx + 1].focus();
        }
        errEl.textContent = '';
      });
      inp.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && !e.target.value && idx > 0) {
          [mm, dd, yy][idx - 1].focus();
        }
        if (e.key === 'Enter') $('#pwd-submit').click();
      });
    });

    $('#pwd-submit').addEventListener('click', () => {
      const ok =
        mm.value.padStart(2, '0') === D.password.mm &&
        dd.value.padStart(2, '0') === D.password.dd &&
        yy.value === D.password.yyyy;
      if (ok) {
        startCandleLoader();
      } else {
        errEl.textContent = "Try again, kiddo. (Hint: it's his.)";
        card.classList.remove('error-shake');
        void card.offsetWidth; // restart animation
        card.classList.add('error-shake');
      }
    });
  }

  // -------- 3. CANDLE loader -------------------------------------------------
  function startCandleLoader() {
    $('#password-stage').style.display = 'none';
    const stage = $('#candle-stage');
    stage.style.display = 'flex';
    requestAnimationFrame(() => stage.classList.add('visible'));

    const candles = $$('.candle', stage);
    const count = candles.length;
    // Quick wind-sweep: candles ignite left-to-right in ~900ms total.
    const totalMs = 900;
    const stepMs = totalMs / count;
    const startDelay = 220;
    const counter = $('#candle-count');

    candles.forEach((c, i) => {
      setTimeout(() => {
        c.classList.add('lit');
        counter.textContent = String(i + 1).padStart(2, '0');
      }, startDelay + stepMs * i);
    });

    setTimeout(() => {
      $('#candle-status').textContent = 'happy birthday';
      $('#candle-status').style.fontStyle = 'italic';
    }, startDelay + totalMs + 120);

    setTimeout(() => {
      revealSite();
    }, startDelay + totalMs + 600);
  }

  // -------- 4. REVEAL site ---------------------------------------------------
  function revealSite() {
    $('#entry').classList.add('gone');
    setTimeout(() => $('#entry').style.display = 'none', 1200);
    const wrap = $('#site-wrap');
    wrap.style.display = 'block';
    requestAnimationFrame(() => requestAnimationFrame(() => wrap.classList.add('entering')));

    // smooth-scroll to top now that the site exists
    window.scrollTo({ top: 0, behavior: 'auto' });
    setupScrollBubbles();
    setupPolaroidModal();

    // auto-start lullaby after the reveal animation settles (password click = user gesture)
    setTimeout(() => { if (_setAudioMode) _setAudioMode('lullaby'); }, 1400);
  }

  // -------- 5. RENDER collage -----------------------------------------------
  function img(src) {
    // Three accepted forms:
    //   1. Full URL (http/https): used as-is
    //   2. Local path (contains '/' or ends in .webp/.jpg/.jpeg/.png): used as-is
    //   3. Placeholder seed (anything else): served from picsum.photos
    if (typeof src !== 'string' || !src) return '';
    if (src.startsWith('http://') || src.startsWith('https://')) return src;
    if (src.includes('/') || /\.(webp|jpe?g|png)$/i.test(src)) return src;
    return `https://picsum.photos/seed/${encodeURIComponent('kiyo-' + src)}/720/720`;
  }

  function decoSVG(corner, kind, extra) {
    const positions = {
      tl: { left: '-22px', top: '-22px' },
      tr: { right: '-22px', top: '-22px' },
      bl: { left: '-22px', bottom: '40px' },
      br: { right: '-22px', bottom: '40px' }
    };
    const pos = positions[corner] || positions.tl;
    const stylePos = Object.entries(pos).map(([k, v]) => `${k}:${v}`).join(';');

    if (kind === 'scribbleHeart') {
      return `<svg style="${stylePos};width:60px;height:60px" viewBox="0 0 60 60">
        <path class="scribble-stroke heart" stroke-width="2.5"
          d="M30 50 C 10 38, 8 20, 18 14 C 26 10, 30 18, 30 22 C 30 18, 34 10, 42 14 C 52 20, 50 38, 30 50 Z" />
        <path class="scribble-stroke heart" stroke-width="1.5"
          d="M32 48 C 14 38, 12 22, 20 17" opacity="0.5"/>
      </svg>`;
    }
    if (kind === 'scribbleStar') {
      return `<svg style="${stylePos};width:50px;height:50px" viewBox="0 0 50 50">
        <path class="scribble-stroke" stroke-width="2"
          d="M25 6 L29 19 L43 20 L32 28 L36 42 L25 34 L14 42 L18 28 L7 20 L21 19 Z" />
      </svg>`;
    }
    if (kind === 'arrowNote') {
      const text = extra.text || '';
      return `<svg style="${stylePos};width:180px;height:90px" viewBox="0 0 180 90">
        <path class="scribble-stroke" stroke-width="2"
          d="M10 70 Q 40 80, 80 60 T 150 30" />
        <path class="scribble-stroke" stroke-width="2"
          d="M148 25 L 158 30 L 152 38" />
        <text class="scribble-note" x="14" y="60" transform="rotate(-6 14 60)">${text}</text>
      </svg>`;
    }
    if (kind === 'sharpieNote') {
      const text = extra.text || '';
      return `<svg style="${stylePos};width:200px;height:60px" viewBox="0 0 200 60">
        <text class="scribble-note" x="6" y="36" transform="rotate(-3 6 36)">${text}</text>
        <path class="scribble-stroke" stroke-width="1.5" opacity="0.6"
          d="M6 44 Q 80 50, 180 42" />
      </svg>`;
    }
    return '';
  }

  function decoPostit(corner, text) {
    const positions = {
      tl: { left: '-28px', top: '-32px', rot: '-8deg' },
      tr: { right: '-28px', top: '-32px', rot: '6deg' },
      bl: { left: '-28px', bottom: '32px', rot: '-5deg' },
      br: { right: '-28px', bottom: '32px', rot: '4deg' }
    };
    const p = positions[corner] || positions.br;
    const pos = Object.entries(p).filter(([k]) => k !== 'rot').map(([k, v]) => `${k}:${v}`).join(';');
    return `<div class="postit" style="${pos};transform:rotate(${p.rot})">${text}</div>`;
  }

  function decoTape(corner) {
    const positions = {
      tl: { left: '-14px', top: '-10px', rot: '-22deg' },
      tr: { right: '-14px', top: '-10px', rot: '22deg' },
      bl: { left: '-14px', bottom: '46px', rot: '15deg' },
      br: { right: '-14px', bottom: '46px', rot: '-15deg' }
    };
    const p = positions[corner] || positions.tl;
    const pos = Object.entries(p).filter(([k]) => k !== 'rot').map(([k, v]) => `${k}:${v}`).join(';');
    return `<div class="tape" style="${pos};transform:rotate(${p.rot})"></div>`;
  }

  function renderPolaroid(p, chapterIdx, idx) {
    const wrap = document.createElement('button');
    wrap.className = `polaroid ${p.size || 'size-md'}`;
    wrap.style.setProperty('--rot', `${p.rot || 0}deg`);
    wrap.dataset.chapter = chapterIdx;
    wrap.dataset.idx = idx;
    if (p.friend && p.message) wrap.dataset.hasMessage = '1';

    const imgEl = document.createElement('div');
    imgEl.className = 'photo';
    imgEl.style.backgroundImage = `url('${img(p.image || p.seed)}')`;
    if (p.bgPos) imgEl.style.backgroundPosition = p.bgPos;
    wrap.appendChild(imgEl);

    const cap = document.createElement('div');
    cap.className = 'caption';
    const capText = p.caption || '';
    capText.split('\n').forEach((line, i) => {
      if (i > 0) cap.appendChild(document.createElement('br'));
      cap.appendChild(document.createTextNode(line));
    });
    wrap.appendChild(cap);

    if (p.date) {
      const d = document.createElement('div');
      d.className = 'date-stamp';
      d.textContent = p.date;
      wrap.appendChild(d);
    }

    // Decorations
    const deco = document.createElement('div');
    deco.className = 'deco-layer';
    let decoHTML = '';
    if (p.deco) {
      if (p.deco.scribbleHeart) decoHTML += decoSVG(p.deco.scribbleHeart, 'scribbleHeart');
      if (p.deco.scribbleStar) decoHTML += decoSVG(p.deco.scribbleStar, 'scribbleStar');
      if (p.deco.arrowNote) decoHTML += decoSVG(p.deco.arrowNote.to, 'arrowNote', p.deco.arrowNote);
      if (p.deco.sharpieNote) decoHTML += decoSVG(p.deco.sharpieNote.corner, 'sharpieNote', p.deco.sharpieNote);
      if (p.deco.tape) decoHTML += decoTape(p.deco.tape);
      if (p.deco.postit) decoHTML += decoPostit(p.deco.postit.corner, p.deco.postit.text);
    }
    deco.innerHTML = decoHTML;
    wrap.appendChild(deco);

    // Subtle tag if there's a message to read
    if (p.friend && p.message) {
      const badge = document.createElement('div');
      badge.style.cssText =
        'position:absolute;bottom:14px;left:14px;font-family:var(--font-typewriter);' +
        'font-size:0.6rem;letter-spacing:0.2em;text-transform:uppercase;opacity:0.5;';
      badge.textContent = '↗ read';
      wrap.appendChild(badge);
    }
    return wrap;
  }

  function renderChapters() {
    const root = $('#chapters');
    D.chapters.forEach((ch, ci) => {
      const sec = document.createElement('section');
      sec.className = 'chapter' + (ch.alt ? ' chapter--alt' : '');
      sec.dataset.chapter = ci;
      sec.dataset.screenLabel = `0${ci + 1} ${ch.title}`;

      const head = document.createElement('div');
      head.className = 'chapter-head';
      head.innerHTML = `
        <div class="chapter-eyebrow">${ch.eyebrow}</div>
        <div class="chapter-num">${ch.n}</div>
        <h2 class="chapter-title">${ch.title}</h2>
        ${ch.yearRange ? `<div style="font-family:var(--font-typewriter);font-size:0.85rem;letter-spacing:0.32em;text-transform:uppercase;opacity:0.55;margin-top:0.5rem;">${ch.yearRange}</div>` : ''}
        <p class="chapter-blurb">${ch.blurb}</p>
      `;
      sec.appendChild(head);

      const grid = document.createElement('div');
      grid.className = 'polaroid-grid';
      ch.polaroids.forEach((p, idx) => grid.appendChild(renderPolaroid(p, ci, idx)));
      sec.appendChild(grid);

      // page-corner (except last chapter)
      if (ci < D.chapters.length - 1) {
        const corner = document.createElement('div');
        corner.className = 'page-corner';
        corner.title = 'Next chapter';
        corner.addEventListener('click', () => {
          const nxt = $$('.chapter')[ci + 1];
          if (nxt) window.scrollTo({ top: nxt.offsetTop - 40, behavior: 'smooth' });
        });
        sec.appendChild(corner);
      }
      root.appendChild(sec);
    });
  }

  // -------- 6. Title and ending ---------------------------------------------
  function renderTitle() {
    $('#title-1').textContent = D.title.line1;
    $('#title-2').innerHTML = `<span class="accent">${D.title.line2}</span>`;
    $('#title-meta').textContent = D.subtitle;
  }

  function renderEnding() {
    // Big signed polaroid
    const pol = $('#ending-polaroid');
    pol.style.setProperty('--rot', '-2deg');
    pol.innerHTML = `
      <div class="photo" style="background-image:url('${img(D.endingImage || 'ending-signed')}');aspect-ratio:4/5"></div>
      <div class="caption">${D.endingCaption || 'Thirty. And just getting good.'}</div>
      <div class="date-stamp">${D.endingDate || 'MAY 20 · 2026'}</div>
      <div class="deco-layer">
        ${decoTape('tl')}
        ${decoTape('tr')}
      </div>
    `;

    // Letter
    const letter = $('#letter');
    letter.innerHTML = `
      <div class="from-stamp">${D.letter.eyebrow}</div>
      <h2>${D.letter.headline}</h2>
      ${D.letter.paragraphs.map(p => `<p>${p}</p>`).join('')}
      <span class="signature">${D.letter.signature}</span>
    `;

    // Guestbook
    const sigs = $('#signatures');
    sigs.innerHTML = D.guestbook.map(n => `<span class="sig">${n}</span>`).join('');
  }

  // -------- 7. POLAROID modal ------------------------------------------------
  function setupPolaroidModal() {
    const back = $('#modal-back');
    const card = $('#message-card');

    function open(ci, pi) {
      const p = D.chapters[ci].polaroids[pi];
      if (!p || !p.message) return;
      card.classList.toggle('has-photo', !!p.image);
      card.innerHTML = `
        <button class="modal-close" aria-label="close">✕</button>
        ${p.image ? `<div class="modal-photo" style="background-image:url('${p.image}')"></div>` : ''}
        <div class="from">FROM</div>
        <div class="name">${p.friend}</div>
        <div class="body-text">${p.message.map(t => `<p>${t}</p>`).join('')}</div>
        ${p.signoff ? `<span class="sign-off">${p.signoff}</span>` : ''}
      `;
      back.classList.add('open');
      $('.modal-close', card).addEventListener('click', close);
    }
    function close() {
      back.classList.remove('open');
    }
    back.addEventListener('click', (e) => {
      if (e.target === back) close();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') close();
    });

    document.addEventListener('click', (e) => {
      const pol = e.target.closest('.polaroid[data-has-message="1"]');
      if (pol) open(+pol.dataset.chapter, +pol.dataset.idx);
    });
  }

  // -------- 8. SCROLL bubbles ------------------------------------------------
  function setupScrollBubbles() {
    const layer = $('#bubble-layer');
    const bubbles = D.bubbles;
    let idx = 0;
    let lastSpawn = 0;
    let scrollTotal = 0;
    let lastScrollY = window.scrollY;

    function spawnBubble() {
      const b = bubbles[idx % bubbles.length];
      idx++;
      const el = document.createElement('div');
      const rightSide = Math.random() > 0.5;
      el.className = 'bubble' + (rightSide ? ' right' : '');
      el.innerHTML = `${b.text}<span class="who">— ${b.who}</span>`;
      // Place: random horizontal position, just below viewport bottom
      const xPct = rightSide
        ? 55 + Math.random() * 30
        : 5 + Math.random() * 30;
      el.style.left = xPct + '%';
      el.style.bottom = (-80 - Math.random() * 60) + 'px';
      el.style.transform = `translateY(60px) rotate(${(Math.random() * 4 - 2).toFixed(1)}deg)`;
      layer.appendChild(el);
      requestAnimationFrame(() => requestAnimationFrame(() => {
        el.classList.add('float-in');
        el.style.transform = `translateY(-${100 + Math.random() * 80}px) rotate(${(Math.random() * 4 - 2).toFixed(1)}deg)`;
      }));
      setTimeout(() => {
        el.style.opacity = '0';
        setTimeout(() => el.remove(), 900);
      }, 4200);
    }

    window.addEventListener('scroll', () => {
      const dy = Math.abs(window.scrollY - lastScrollY);
      lastScrollY = window.scrollY;
      scrollTotal += dy;
      const now = Date.now();
      // Every ~700px of scroll, spawn a bubble (if at least 800ms apart)
      if (scrollTotal > 600 && now - lastSpawn > 1100) {
        spawnBubble();
        scrollTotal = 0;
        lastSpawn = now;
      }
    }, { passive: true });
  }

  // -------- 9. PENCIL trail (no custom cursor, idle when still) -------------
  function setupPencilTrail() {
    const canvas = $('#pencil-canvas');
    const ctx = canvas.getContext('2d');
    // Cap device pixel ratio — high-DPR screens were the lag source
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    function resize() {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener('resize', resize);

    const pts = [];
    let lastX = -1, lastY = -1;
    let rafId = null;

    function ensureRAF() {
      if (rafId == null) rafId = requestAnimationFrame(tick);
    }

    window.addEventListener('mousemove', (e) => {
      if (lastX >= 0) {
        // throw out giant jumps (e.g. tab switch)
        const dx = e.clientX - lastX, dy = e.clientY - lastY;
        if (dx * dx + dy * dy < 4000) {
          pts.push({
            x1: lastX, y1: lastY, x2: e.clientX, y2: e.clientY,
            life: 1.0, w: 1 + Math.random() * 0.6
          });
        }
      }
      lastX = e.clientX; lastY = e.clientY;
      ensureRAF();
    }, { passive: true });

    window.addEventListener('mouseleave', () => { lastX = lastY = -1; });

    function tick() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (pts.length === 0) { rafId = null; return; }
      for (let i = pts.length - 1; i >= 0; i--) {
        const p = pts[i];
        p.life -= 0.018;
        if (p.life <= 0) { pts.splice(i, 1); continue; }
        ctx.strokeStyle = `oklch(28% 0.04 40 / ${p.life * 0.5})`;
        ctx.lineWidth = p.w;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(p.x1, p.y1);
        ctx.lineTo(p.x2, p.y2);
        ctx.stroke();
      }
      rafId = requestAnimationFrame(tick);
    }
  }

  // -------- 10. AMBIENT audio (soft Web Audio tones) ------------------------
  function setupAudio() {
    let ctx = null;
    let active = null;
    let current = null;

    function ensureCtx() {
      if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
      if (ctx.state === 'suspended') ctx.resume();
    }

    function stopAll() {
      if (!active) return;
      active.timers.forEach(t => clearInterval(t));
      const now = ctx.currentTime;
      try {
        active.master.gain.cancelScheduledValues(now);
        active.master.gain.setTargetAtTime(0.0001, now, 0.04);
      } catch (e) {}
      active.nodes.forEach(n => {
        try { n.stop(now + 0.12); } catch (e) {}
        setTimeout(() => { try { n.disconnect(); } catch (e) {} }, 180);
      });
      const master = active.master;
      setTimeout(() => { try { master.disconnect(); } catch (e) {} }, 220);
      active = null;
    }

    function beginPatch(volume = 0.55) {
      stopAll();
      const master = ctx.createGain();
      master.gain.setValueAtTime(0.0001, ctx.currentTime);
      master.gain.exponentialRampToValueAtTime(volume, ctx.currentTime + 0.35);

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 5200;
      filter.Q.value = 0.4;
      filter.connect(master);
      master.connect(ctx.destination);

      active = { master, output: filter, nodes: [filter], timers: [] };
      return active;
    }

    function track(node) {
      if (active) active.nodes.push(node);
      return node;
    }

    function playTone(freq, when, {
      duration = 1.8,
      attack = 0.018,
      gain = 0.035,
      type = 'sine',
      overtone = 2,
      overtoneGain = 0.25,
    } = {}) {
      if (!active) return;

      const amp = track(ctx.createGain());
      amp.gain.setValueAtTime(0.0001, when);
      amp.gain.exponentialRampToValueAtTime(gain, when + attack);
      amp.gain.exponentialRampToValueAtTime(0.0001, when + duration);
      amp.connect(active.output);

      const fundamental = track(ctx.createOscillator());
      fundamental.type = type;
      fundamental.frequency.setValueAtTime(freq, when);
      fundamental.connect(amp);
      fundamental.start(when);
      fundamental.stop(when + duration + 0.05);

      if (overtoneGain > 0) {
        const shimmer = track(ctx.createOscillator());
        const shimmerGain = track(ctx.createGain());
        shimmer.type = 'sine';
        shimmer.frequency.setValueAtTime(freq * overtone, when);
        shimmerGain.gain.setValueAtTime(gain * overtoneGain, when);
        shimmerGain.gain.exponentialRampToValueAtTime(0.0001, when + duration * 0.72);
        shimmer.connect(shimmerGain);
        shimmerGain.connect(active.output);
        shimmer.start(when);
        shimmer.stop(when + duration + 0.05);
      }
    }

    // Lullaby — ambient pad: slow attack, long sustain, overlapping chords
    const LULLABY_POOL = [
      [261.63, 329.63, 392, 493.88],   // C maj7
      [220, 261.63, 329.63, 440],       // A min7
      [174.61, 261.63, 349.23, 440],    // F maj7
      [196, 293.66, 392, 523.25],       // G sus4
      [246.94, 311.13, 369.99, 493.88], // B min7
      [293.66, 369.99, 440, 587.33],    // D maj7
      [164.81, 220, 293.66, 392],       // E min7
      [233.08, 293.66, 349.23, 466.16], // B♭ maj7
    ];
    const SPARKLE_SCALE = [523.25, 659.25, 783.99, 880, 1046.5];

    function scheduleLullaby() {
      const start = ctx.currentTime + 0.1;
      const chords = [...LULLABY_POOL].sort(() => Math.random() - 0.5).slice(0, 4);
      chords.forEach((chord, ci) => {
        const offset = ci * 4.5 + (Math.random() - 0.5) * 0.3;
        // Xylophone arpeggio: each note is a discrete mallet strike, slightly swung
        chord.forEach((freq, ni) => {
          const swing = ni * 0.32 + (Math.random() - 0.5) * 0.04;
          playTone(freq, start + offset + swing, {
            duration: 2.4,
            attack: 0.004,
            gain: ni === 0 ? 0.07 : 0.052,
            type: 'sine',
            overtone: 3,        // xylophone-like partial (octave + fifth)
            overtoneGain: 0.42,
          });
          // Soft wooden octave-up echo for that bright mallet ring
          playTone(freq * 2, start + offset + swing + 0.01, {
            duration: 1.1,
            attack: 0.003,
            gain: 0.018,
            type: 'sine',
            overtone: 3,
            overtoneGain: 0.25,
          });
          // Warm low octave on the root, like a marimba bass bar
          if (ni === 0) {
            playTone(freq * 0.5, start + offset, {
              duration: 3.2,
              attack: 0.006,
              gain: 0.024,
              type: 'sine',
              overtone: 4,
              overtoneGain: 0.18,
            });
          }
        });
      });
      // Sparkle: a stray high mallet ping drifting through
      if (Math.random() > 0.3) {
        const freq = SPARKLE_SCALE[Math.floor(Math.random() * SPARKLE_SCALE.length)];
        playTone(freq, start + Math.random() * 16, {
          duration: 1.8,
          attack: 0.003,
          gain: 0.028,
          type: 'sine',
          overtone: 3,
          overtoneGain: 0.35,
        });
      }
    }

    function playLullaby() {
      beginPatch(0.72);
      scheduleLullaby();
      // 18s cycle (4 chords × 4.5s) so next batch overlaps cleanly with previous
      active.timers.push(setInterval(scheduleLullaby, 18200));
    }

    // Glass chimes — quick strike, long resonant ring, inharmonic shimmer
    function scheduleChimes() {
      const start = ctx.currentTime + 0.1;
      const scale = [523.25, 587.33, 659.25, 783.99, 880, 1046.5, 1174.66, 1318.51];
      const count = 7 + Math.floor(Math.random() * 4);
      for (let i = 0; i < count; i++) {
        const freq = scale[Math.floor(Math.random() * scale.length)];
        playTone(freq, start + Math.random() * 14.5, {
          duration: 5.5,
          attack: 0.008,
          gain: 0.014 + Math.random() * 0.006,
          type: 'sine',
          overtone: 2.756,  // inharmonic ratio → glassy metallic ring
          overtoneGain: 0.16,
        });
      }
    }

    function playChimes() {
      beginPatch(0.5);
      scheduleChimes();
      active.timers.push(setInterval(scheduleChimes, 16000));
    }

    function setMode(mode) {
      if (mode === current) {
        stopAll(); current = null;
      } else {
        ensureCtx();
        current = mode;
        if (mode === 'lullaby') playLullaby();
      }
      $('#audio-btn').classList.toggle('active', !!current);
    }

    $('#audio-btn').addEventListener('click', () => {
      setMode(current ? current : 'lullaby');
    });

    _setAudioMode = setMode;
  }

  // -------- INIT -------------------------------------------------------------
  async function init() {
    renderTitle();
    renderChapters();
    renderEnding();
    setupPencilTrail();
    setupAudio();
    setupPasswordCard();

    // Dev shortcut: ?skip or ?dev jumps past the entry screen.
    const params = new URLSearchParams(window.location.search);
    if (params.has('skip') || params.has('dev')) {
      $('#entry').style.display = 'none';
      revealSite();
      // Dev: render all bubbles in a panel at the bottom of the page
      const panel = document.createElement('div');
      panel.style.cssText = 'position:relative;z-index:200;background:oklch(97% 0.012 73);border-top:2px dashed var(--terracotta);padding:2rem 2rem 3rem;margin-top:4rem;';
      panel.innerHTML = '<div style="font-family:var(--font-hand);font-size:1.1rem;color:var(--terracotta);margin-bottom:1.2rem;">💬 bubbles</div>'
        + D.bubbles.map(b =>
            `<div style="display:inline-block;margin:0.4rem;padding:0.55rem 1rem;background:white;border-radius:999px;box-shadow:0 2px 8px -2px rgba(0,0,0,0.12);font-family:var(--font-hand);font-size:1rem;">${b.text}<span style="opacity:0.5;font-size:0.85em;margin-left:0.5em;">— ${b.who}</span></div>`
          ).join('');
      document.querySelector('#site-wrap').appendChild(panel);
      return;
    }

    // typewriter intro
    const intro = $('#typewriter-target');
    await typewriter(intro, D.honoree, 110);
    // pulse, then show password
    await new Promise(r => setTimeout(r, 700));
    $('#password-stage').style.display = 'flex';
    $('#password-stage').animate(
      [{ opacity: 0, transform: 'translateY(20px)' }, { opacity: 1, transform: 'none' }],
      { duration: 800, fill: 'forwards', easing: 'cubic-bezier(0.25, 1, 0.5, 1)' }
    );
    // place focus on first input
    setTimeout(() => $('#pwd-mm').focus(), 900);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
