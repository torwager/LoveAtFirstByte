/* ============================================================
 *  Love at First Byte — Neural Constellation
 *  A full-viewport canvas of glowing "neuron" nodes linked by
 *  synapse lines. The pointer attracts nearby nodes, lights up
 *  links within reach, and triggers traveling "spikes" along
 *  synapses near the cursor. Pure vanilla JS, no dependencies.
 *  Respects prefers-reduced-motion and pauses when offscreen.
 * ============================================================ */
(function () {
  "use strict";

  const canvas = document.getElementById("constellation");
  if (!canvas) return;
  const ctx = canvas.getContext("2d", { alpha: true });

  const reduceMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Palette (kept in sync with theme.scss)
  const COLORS = {
    node:   [34, 211, 238],   // cyan
    node2:  [139, 92, 246],   // violet
    spark:  [255, 77, 141],   // rose
    line:   [120, 150, 210],
  };

  let W = 0, H = 0, DPR = Math.min(window.devicePixelRatio || 1, 2);
  let nodes = [];
  let spikes = [];
  const pointer = { x: -9999, y: -9999, active: false, vx: 0, vy: 0, px: 0, py: 0 };
  let raf = null;
  let lastSpawn = 0;

  function rand(a, b) { return a + Math.random() * (b - a); }

  function resize() {
    const rect = canvas.getBoundingClientRect();
    W = rect.width; H = rect.height;
    DPR = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(W * DPR);
    canvas.height = Math.round(H * DPR);
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    buildNodes();
  }

  function buildNodes() {
    // Density scales with area but is capped for performance / mobile.
    const target = Math.max(36, Math.min(120, Math.round((W * H) / 14000)));
    nodes = [];
    for (let i = 0; i < target; i++) {
      nodes.push({
        x: Math.random() * W,
        y: Math.random() * H,
        ox: 0, oy: 0,               // offset from home (spring)
        vx: rand(-0.18, 0.18),
        vy: rand(-0.18, 0.18),
        r: rand(1.1, 2.6),
        hue: Math.random() < 0.5 ? COLORS.node : COLORS.node2,
        pulse: Math.random() * Math.PI * 2,
      });
    }
  }

  const LINK_DIST = 130;          // px to draw a synapse
  const POINTER_REACH = 200;      // px the cursor influences

  function rgba(c, a) { return "rgba(" + c[0] + "," + c[1] + "," + c[2] + "," + a + ")"; }

  function step(t) {
    ctx.clearRect(0, 0, W, H);

    pointer.vx = pointer.x - pointer.px;
    pointer.vy = pointer.y - pointer.py;
    pointer.px = pointer.x; pointer.py = pointer.y;

    // --- update nodes ---
    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];
      if (!reduceMotion) {
        n.x += n.vx; n.y += n.vy;
        // gentle wrap
        if (n.x < -20) n.x = W + 20; else if (n.x > W + 20) n.x = -20;
        if (n.y < -20) n.y = H + 20; else if (n.y > H + 20) n.y = -20;
      }
      // pointer attraction (subtle pull toward cursor)
      if (pointer.active) {
        const dx = pointer.x - n.x, dy = pointer.y - n.y;
        const d2 = dx * dx + dy * dy;
        const reach2 = POINTER_REACH * POINTER_REACH;
        if (d2 < reach2) {
          const d = Math.sqrt(d2) || 1;
          const force = (1 - d / POINTER_REACH) * 0.6;
          n.x += (dx / d) * force;
          n.y += (dy / d) * force;
        }
      }
      n.pulse += 0.02;
    }

    // --- draw synapses ---
    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const d2 = dx * dx + dy * dy;
        if (d2 > LINK_DIST * LINK_DIST) continue;
        const d = Math.sqrt(d2);
        let alpha = (1 - d / LINK_DIST) * 0.22;

        // brighten links near the pointer
        let lit = 0;
        if (pointer.active) {
          const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
          const pd = Math.hypot(pointer.x - mx, pointer.y - my);
          if (pd < POINTER_REACH) {
            lit = 1 - pd / POINTER_REACH;
            alpha += lit * 0.5;
          }
        }
        ctx.strokeStyle = lit > 0.4
          ? rgba(COLORS.spark, alpha)
          : rgba(COLORS.line, alpha);
        ctx.lineWidth = 0.6 + lit * 1.2;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();

        // occasionally fire a spike along a lit synapse
        if (!reduceMotion && lit > 0.55 && t - lastSpawn > 90 && Math.random() < 0.06) {
          spikes.push({ ax: a.x, ay: a.y, bx: b.x, by: b.y, p: 0 });
          lastSpawn = t;
        }
      }
    }

    // --- draw nodes ---
    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];
      const glow = 0.5 + 0.5 * Math.sin(n.pulse);
      let r = n.r;
      if (pointer.active) {
        const pd = Math.hypot(pointer.x - n.x, pointer.y - n.y);
        if (pd < POINTER_REACH) r += (1 - pd / POINTER_REACH) * 2.4;
      }
      ctx.beginPath();
      ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
      ctx.fillStyle = rgba(n.hue, 0.85);
      ctx.shadowColor = rgba(n.hue, 0.9);
      ctx.shadowBlur = 8 + glow * 8;
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    // --- traveling spikes ---
    for (let i = spikes.length - 1; i >= 0; i--) {
      const s = spikes[i];
      s.p += 0.04;
      if (s.p >= 1) { spikes.splice(i, 1); continue; }
      const x = s.ax + (s.bx - s.ax) * s.p;
      const y = s.ay + (s.by - s.ay) * s.p;
      ctx.beginPath();
      ctx.arc(x, y, 2.4, 0, Math.PI * 2);
      ctx.fillStyle = rgba(COLORS.spark, 0.9 * (1 - s.p));
      ctx.shadowColor = rgba(COLORS.spark, 1);
      ctx.shadowBlur = 12;
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    // pointer core glow
    if (pointer.active) {
      const g = ctx.createRadialGradient(
        pointer.x, pointer.y, 0, pointer.x, pointer.y, 90
      );
      g.addColorStop(0, rgba(COLORS.spark, 0.18));
      g.addColorStop(1, rgba(COLORS.spark, 0));
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(pointer.x, pointer.y, 90, 0, Math.PI * 2);
      ctx.fill();
    }

    raf = requestAnimationFrame(step);
  }

  function setPointer(clientX, clientY) {
    const rect = canvas.getBoundingClientRect();
    pointer.x = clientX - rect.left;
    pointer.y = clientY - rect.top;
    pointer.active = true;
  }

  // Events
  window.addEventListener("resize", resize, { passive: true });
  window.addEventListener("pointermove", (e) => setPointer(e.clientX, e.clientY), { passive: true });
  window.addEventListener("pointerdown", (e) => {
    setPointer(e.clientX, e.clientY);
    // burst of spikes on click
    for (let k = 0; k < nodes.length; k++) {
      const n = nodes[k];
      if (Math.hypot(pointer.x - n.x, pointer.y - n.y) < POINTER_REACH) {
        spikes.push({ ax: pointer.x, ay: pointer.y, bx: n.x, by: n.y, p: 0 });
      }
    }
  }, { passive: true });
  window.addEventListener("pointerleave", () => { pointer.active = false; pointer.x = -9999; pointer.y = -9999; });

  // Touch: gentle drift, follow first touch
  window.addEventListener("touchmove", (e) => {
    if (e.touches && e.touches[0]) setPointer(e.touches[0].clientX, e.touches[0].clientY);
  }, { passive: true });

  // Pause when tab hidden
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) { if (raf) cancelAnimationFrame(raf); raf = null; }
    else if (!raf) raf = requestAnimationFrame(step);
  });

  resize();
  raf = requestAnimationFrame(step);
})();
