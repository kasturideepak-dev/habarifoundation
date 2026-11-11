/* Gallery page: category filters, curated "Load more" grid and photo viewer.
   Loaded after js/site.js on gallery.html only. */
(function () {
  "use strict";

  const grid = document.getElementById("hg-grid");
  if (!grid) return;

  const items = Array.from(grid.querySelectorAll(".hg-item"));
  const filterBtns = Array.from(document.querySelectorAll(".hg-filter"));
  const moreBtn = document.getElementById("hg-more");
  const status = document.getElementById("hg-status");

  const FILTERS = ["all", "education", "health", "school", "community", "climbs"];
  const CATEGORY_INITIAL = 9; // first view of a single category
  const BATCH = 9; // photos revealed per "Load more"

  let filter = "all";
  let shown = 0;
  let current = []; // items currently matching the filter, in display order

  const cats = (item) => (item.dataset.cat || "").split(/\s+/);
  const matches = (item, f) => f === "all" || cats(item).includes(f);

  /* Matching items in display order. Held-back photos (household interiors,
     health examinations) always come last so they never appear in an initial view. */
  function listFor(f) {
    const m = items.filter((it) => matches(it, f));
    return m.filter((it) => !it.hasAttribute("data-hold")).concat(m.filter((it) => it.hasAttribute("data-hold")));
  }

  function initialCount(list) {
    const open = list.filter((it) => !it.hasAttribute("data-hold")).length;
    if (filter === "all") return Math.min(items.filter((it) => it.hasAttribute("data-featured")).length || 18, open);
    return Math.min(CATEGORY_INITIAL, open) || Math.min(CATEGORY_INITIAL, list.length);
  }

  function render(animateFrom) {
    // Keep DOM order in sync with display order for this filter.
    current.forEach((it) => grid.appendChild(it));
    const visible = new Set(current.slice(0, shown));
    items.forEach((it) => {
      const show = visible.has(it);
      it.hidden = !show;
      it.classList.remove("is-new");
    });
    if (typeof animateFrom === "number") {
      current.slice(animateFrom, shown).forEach((it) => it.classList.add("is-new"));
    }
    const remaining = current.length - shown;
    if (moreBtn) {
      moreBtn.hidden = remaining <= 0;
      moreBtn.textContent = "Load more photos";
    }
    if (status) {
      status.textContent = current.length
        ? "Showing " + Math.min(shown, current.length) + " of " + current.length + " photos"
        : "No photos in this category yet.";
    }
    if (window.ScrollTrigger) window.ScrollTrigger.refresh();
  }

  function setFilter(f, updateUrl) {
    if (!FILTERS.includes(f)) f = "all";
    filter = f;
    filterBtns.forEach((b) => {
      const on = b.dataset.filter === f;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });
    current = listFor(f);
    shown = initialCount(current);
    render(0);
    if (updateUrl) {
      try {
        const url = new URL(window.location.href);
        if (f === "all") url.searchParams.delete("cat");
        else url.searchParams.set("cat", f);
        history.replaceState(null, "", url.pathname + url.search + url.hash);
      } catch (e) { /* ignore */ }
    }
  }

  filterBtns.forEach((b) => b.addEventListener("click", () => setFilter(b.dataset.filter, true)));

  if (moreBtn) {
    moreBtn.addEventListener("click", () => {
      const from = shown;
      shown = Math.min(current.length, shown + BATCH);
      render(from);
      const first = current[from];
      const link = first && first.querySelector(".hg-item__link");
      if (link) link.focus({ preventScroll: false });
    });
  }

  let initial = "all";
  try { initial = (new URLSearchParams(window.location.search).get("cat") || "all").toLowerCase(); } catch (e) { /* ignore */ }
  setFilter(initial, false);

  /* ---------- Viewer ---------- */
  const viewer = document.createElement("div");
  viewer.className = "hg-viewer";
  viewer.setAttribute("role", "dialog");
  viewer.setAttribute("aria-modal", "true");
  viewer.setAttribute("aria-label", "Photo viewer");
  viewer.hidden = true;
  viewer.innerHTML =
    '<button type="button" class="hg-viewer__btn hg-viewer__close" aria-label="Close viewer"><i class="fa-solid fa-xmark" aria-hidden="true"></i></button>' +
    '<button type="button" class="hg-viewer__btn hg-viewer__prev" aria-label="Previous photo"><i class="fa-solid fa-arrow-left" aria-hidden="true"></i></button>' +
    '<figure class="hg-viewer__figure"><img class="hg-viewer__img" alt="">' +
    '<figcaption class="hg-viewer__caption" id="hg-viewer-caption" aria-live="polite"><span class="hg-viewer__text"></span><span class="hg-viewer__count"></span></figcaption></figure>' +
    '<button type="button" class="hg-viewer__btn hg-viewer__next" aria-label="Next photo"><i class="fa-solid fa-arrow-right" aria-hidden="true"></i></button>';
  document.body.appendChild(viewer);

  const vImg = viewer.querySelector(".hg-viewer__img");
  const vText = viewer.querySelector(".hg-viewer__text");
  const vCount = viewer.querySelector(".hg-viewer__count");
  const btnClose = viewer.querySelector(".hg-viewer__close");
  const btnPrev = viewer.querySelector(".hg-viewer__prev");
  const btnNext = viewer.querySelector(".hg-viewer__next");
  vImg.setAttribute("aria-describedby", "hg-viewer-caption");

  let vList = [];
  let vIndex = 0;
  let opener = null;

  function visibleItems() {
    return current.slice(0, shown);
  }

  function show(i) {
    if (!vList.length) return;
    vIndex = (i + vList.length) % vList.length;
    const it = vList[vIndex];
    const link = it.querySelector(".hg-item__link");
    const img = it.querySelector("img");
    const cap = it.querySelector(".hg-item__caption");
    vImg.src = link.getAttribute("href");
    vImg.alt = img ? img.alt : "";
    vText.textContent = cap ? cap.textContent : "";
    vCount.textContent = (vIndex + 1) + " / " + vList.length;
    const single = vList.length < 2;
    btnPrev.hidden = single;
    btnNext.hidden = single;
    // Preload neighbours
    [vIndex - 1, vIndex + 1].forEach((n) => {
      const nb = vList[(n + vList.length) % vList.length];
      if (nb) { const p = new Image(); p.src = nb.querySelector(".hg-item__link").getAttribute("href"); }
    });
  }

  function open(item) {
    vList = visibleItems();
    const i = vList.indexOf(item);
    if (i < 0) return;
    opener = item;
    viewer.hidden = false;
    viewer.classList.add("open");
    document.body.classList.add("hg-lock");
    show(i);
    btnClose.focus();
  }

  function close() {
    if (!viewer.classList.contains("open")) return;
    viewer.classList.remove("open");
    viewer.hidden = true;
    document.body.classList.remove("hg-lock");
    vImg.removeAttribute("src");
    // Return focus to the photo last viewed (or the one that opened the viewer).
    const target = (vList[vIndex] || opener);
    const link = target && target.querySelector(".hg-item__link");
    if (link) link.focus({ preventScroll: false });
  }

  grid.addEventListener("click", (e) => {
    const link = e.target.closest(".hg-item__link");
    if (!link) return;
    e.preventDefault();
    open(link.closest(".hg-item"));
  });

  btnClose.addEventListener("click", close);
  btnPrev.addEventListener("click", () => show(vIndex - 1));
  btnNext.addEventListener("click", () => show(vIndex + 1));
  viewer.addEventListener("click", (e) => {
    if (e.target === viewer) close();
  });

  document.addEventListener("keydown", (e) => {
    if (!viewer.classList.contains("open")) return;
    if (e.key === "Escape") { e.preventDefault(); close(); }
    else if (e.key === "ArrowLeft") { e.preventDefault(); show(vIndex - 1); }
    else if (e.key === "ArrowRight") { e.preventDefault(); show(vIndex + 1); }
    else if (e.key === "Tab") {
      // Keep focus inside the viewer.
      const f = [btnClose, btnPrev, btnNext].filter((b) => !b.hidden);
      const idx = f.indexOf(document.activeElement);
      e.preventDefault();
      const next = e.shiftKey ? (idx <= 0 ? f.length - 1 : idx - 1) : (idx + 1) % f.length;
      f[next].focus();
    }
  });

  // Simple swipe support on touch screens.
  let touchX = null;
  viewer.addEventListener("touchstart", (e) => { touchX = e.touches[0].clientX; }, { passive: true });
  viewer.addEventListener("touchend", (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    touchX = null;
    if (Math.abs(dx) > 50) show(vIndex + (dx < 0 ? 1 : -1));
  }, { passive: true });
})();
