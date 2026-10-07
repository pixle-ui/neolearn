// =============================================
// APP.JS v3.0 — All platform, fuzzy search, hash routing
// =============================================
(function () {

  if (!window.PLATFORMS) {
    window.PLATFORMS = [
      { id: "linux",   label: "Linux" },
      { id: "android", label: "Android" },
      { id: "mac",     label: "Mac" },
      { id: "windows", label: "Windows" },
      { id: "ios",     label: "iOS" }
    ];
  }

  if (!window.TUTORIALS || !window.TUTORIALS.length) {
    alert("tutorials.js is missing or empty.");
    return;
  }

  console.log("✅ NeoLearn v3.0 — " + window.TUTORIALS.length + " tutorials");

  // =============================================
  // HELPERS
  // =============================================
  function getSteps(tut, platform) {
    if (Array.isArray(tut.steps)) return tut.steps;
    return tut.steps[platform] || [];
  }
  function getPlatforms(tut) {
    if (Array.isArray(tut.platforms)) return tut.platforms;
    return window.PLATFORMS.map(function (p) { return p.id; });
  }

  function detectStepType(step) {
    if (step.type) return step.type;
    if (step.note) {
      if (step.note.type === "warn") return "warn";
      if (step.note.type === "danger") return "danger";
      if (step.note.type === "tip") return "tip";
    }
    if (step.code) return "code";
    return "read";
  }

  function getStepIcon(type) {
    switch (type) {
      case "read": return "📖";
      case "code": return "💻";
      case "try": return "⚡";
      case "tip": return "💡";
      case "warn": return "⚠️";
      case "danger": return "🚫";
      default: return "▸";
    }
  }

  function rich(text) {
    if (!text) return "";
    var out = text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    out = out.replace(/\*\*(.+?)\*\*/g, "<b>$1</b>");
    out = out.replace(/`([^`]+)`/g, "<code>$1</code>");
    out = out.replace(/\n/g, "<br>");
    return out;
  }

  // =============================================
  // FUZZY SEARCH
  // =============================================
  function levenshtein(a, b) {
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;
    var matrix = [];
    for (var i = 0; i <= b.length; i++) matrix[i] = [i];
    for (var j = 0; j <= a.length; j++) matrix[0][j] = j;
    for (var i = 1; i <= b.length; i++) {
      for (var j = 1; j <= a.length; j++) {
        if (b[i - 1] === a[j - 1]) matrix[i][j] = matrix[i - 1][j - 1];
        else matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, matrix[i][j - 1] + 1, matrix[i - 1][j] + 1);
      }
    }
    return matrix[b.length][a.length];
  }

  function fuzzyMatch(query, text) {
    if (!query || !text) return 0;
    var q = query.toLowerCase().replace(/\s+/g, "");
    var t = text.toLowerCase().replace(/\s+/g, "");

    // Exact substring
    if (t.indexOf(q) !== -1) return 100;

    // Prefix match
    if (t.indexOf(q) === 0) return 95;

    // Subsequence match (all chars in order)
    var qi = 0;
    for (var i = 0; i < t.length && qi < q.length; i++) {
      if (t[i] === q[qi]) qi++;
    }
    if (qi === q.length) return 60;

    // Word-level fuzzy
    var words = text.toLowerCase().split(/[\s\-_]+/);
    for (var w = 0; w < words.length; w++) {
      if (words[w].length > 2 && q.length > 2) {
        var dist = levenshtein(q, words[w]);
        var threshold = Math.max(2, Math.floor(q.length / 3));
        if (dist <= threshold) return 40;
      }
    }

    return 0;
  }

  function searchScore(tut, query) {
    if (!query) return 1;
    var q = query.toLowerCase().trim();
    var score = 0;

    score += fuzzyMatch(q, tut.title) * 3;
    score += fuzzyMatch(q, tut.summary || "") * 1.5;
    score += fuzzyMatch(q, (tut.tags || []).join(" ")) * 2;
    score += fuzzyMatch(q, tut.category) * 2;

    // Search in step titles
    var stepText = "";
    for (var p in tut.steps) {
      if (Array.isArray(tut.steps[p])) {
        tut.steps[p].forEach(function (s) { stepText += " " + (s.title || ""); });
      } else if (tut.steps[p]) {
        stepText += " " + tut.steps[p];
      }
    }
    score += fuzzyMatch(q, stepText) * 0.8;

    return score;
  }

  // =============================================
  // PLATFORM BAR
  // =============================================
  if (!document.getElementById("platformBtns")) {
    var content = document.querySelector(".content");
    if (content) {
      var bar = document.createElement("div");
      bar.className = "platform-bar";
      bar.innerHTML = '<span class="platform-label">Platform</span><div class="platform-btns" id="platformBtns"></div>';
      content.insertBefore(bar, content.firstChild);
    }
  }

  // =============================================
  // ELEMENTS
  // =============================================
  var el = {
    sidebar: document.getElementById("sidebar"),
    overlay: document.getElementById("overlay"),
    menuBtn: document.getElementById("menuBtn"),
    closeBtn: document.getElementById("closeBtn"),
    grid: document.getElementById("tutorialGrid"),
    empty: document.getElementById("emptyState"),
    search: document.getElementById("searchInput"),
    chips: document.getElementById("filterChips"),
    catNav: document.getElementById("categoryNav"),
    tutNav: document.getElementById("tutorialNav"),
    pageNav: document.getElementById("pageNav"),
    content: document.getElementById("tutorialContent"),
    back: document.getElementById("backBtn"),
    platBtns: document.getElementById("platformBtns"),
    platBar: document.querySelector(".platform-bar"),
    favGrid: document.getElementById("favGrid"),
    favEmpty: document.getElementById("favEmpty"),
    progressList: document.getElementById("progressList"),
    progressEmpty: document.getElementById("progressEmpty"),
    resetBtn: document.getElementById("resetBtn")
  };

  var missing = [];
  for (var k in el) if (!el[k]) missing.push(k);
  if (missing.length) alert("Missing elements: " + missing.join(", "));
  if (missing.length) return;

  // =============================================
  // STATE
  // =============================================
  var currentPlatform = localStorage.getItem("neoPlatform") || "android";
  var currentDetailPlatform = localStorage.getItem("neoDetailPlatform") || currentPlatform;
  var currentCategory = "all";
  var currentSearch = "";
  var currentTutorialId = null;

  var favorites = JSON.parse(localStorage.getItem("neoFavorites") || "[]");
  var progress = JSON.parse(localStorage.getItem("neoProgress") || "{}");

  function saveFavorites() { localStorage.setItem("neoFavorites", JSON.stringify(favorites)); }
  function saveProgress() { localStorage.setItem("neoProgress", JSON.stringify(progress)); }
  function isFav(id) { return favorites.indexOf(id) !== -1; }

  var categories = ["all"];
  for (var i = 0; i < window.TUTORIALS.length; i++) {
    var c = window.TUTORIALS[i].category;
    if (categories.indexOf(c) === -1) categories.push(c);
  }

  // =============================================
  // TOAST
  // =============================================
  var toastEl = null, toastTimer = null;
  function showToast(msg) {
    if (!toastEl) {
      toastEl = document.createElement("div");
      toastEl.className = "toast";
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove("show"); }, 1500);
  }

  // =============================================
  // PLATFORM BUTTONS (with "All")
  // =============================================
  var allBtn = document.createElement("button");
  allBtn.type = "button";
  allBtn.className = "plat-btn" + (currentPlatform === "all" ? " active" : "");
  allBtn.setAttribute("data-plat", "all");
  allBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"/></svg><span>All</span>';
  allBtn.onclick = function () { setPlatform("all"); };
  el.platBtns.appendChild(allBtn);

  window.PLATFORMS.forEach(function (p) {
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "plat-btn" + (p.id === currentPlatform ? " active" : "");
    btn.setAttribute("data-plat", p.id);
    btn.innerHTML = (p.svg || "") + '<span>' + p.label + '</span>';
    btn.onclick = function () { setPlatform(p.id); };
    el.platBtns.appendChild(btn);
  });

  function setPlatform(plat) {
    if (currentPlatform === plat) return;
    currentPlatform = plat;
    localStorage.setItem("neoPlatform", plat);
    if (plat !== "all") {
      currentDetailPlatform = plat;
      localStorage.setItem("neoDetailPlatform", plat);
    }
    updatePlatBtns();
    renderGrid();
    renderSidebarList();
    updateCategoryCounts();
    if (currentTutorialId) swapTutorial(currentTutorialId);
    var label = plat === "all" ? "All platforms" : plat;
    showToast("Switched to " + label);
  }

  function updatePlatBtns() {
    var btns = document.querySelectorAll(".plat-btn");
    for (var i = 0; i < btns.length; i++) {
      btns[i].classList.toggle("active", btns[i].getAttribute("data-plat") === currentPlatform);
    }
  }

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) el.platBar.classList.add("stuck");
    else el.platBar.classList.remove("stuck");
  });

  // =============================================
  // SIDEBAR
  // =============================================
  el.menuBtn.onclick = function () {
    el.sidebar.classList.add("open");
    el.overlay.classList.add("show");
  };
  el.closeBtn.onclick = closeSide;
  el.overlay.onclick = closeSide;
  function closeSide() {
    el.sidebar.classList.remove("open");
    el.overlay.classList.remove("show");
  }

  function showPage(id) {
    var pages = document.querySelectorAll(".page");
    for (var i = 0; i < pages.length; i++) pages[i].classList.remove("active");
    var t = document.getElementById(id);
    if (t) t.classList.add("active");
    closeSide();
    window.scrollTo(0, 0);
  }

  el.pageNav.querySelectorAll(".nav-btn").forEach(function (btn) {
    btn.onclick = function () {
      var p = btn.getAttribute("data-page");
      updatePageNavActive(p);
      if (p === "favorites") renderFavorites();
      else if (p === "progress") renderProgress();
      showPage(p);
    };
  });

  function updatePageNavActive(pageId) {
    el.pageNav.querySelectorAll(".nav-btn").forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-page") === pageId);
    });
  }

  // Categories
  categories.forEach(function (cat) {
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "nav-btn" + (cat === "all" ? " active" : "");
    btn.setAttribute("data-cat", cat);
    btn.dataset.catKey = cat;
    btn.onclick = function () {
      currentCategory = cat;
      updateChips();
      renderGrid();
      showPage("home");
      updatePageNavActive("home");
    };
    el.catNav.appendChild(btn);
  });

  function updateCategoryCounts() {
    el.catNav.querySelectorAll(".nav-btn").forEach(function (btn) {
      var cat = btn.dataset.catKey;
      var count;
      if (currentPlatform === "all") {
        count = cat === "all"
          ? window.TUTORIALS.length
          : window.TUTORIALS.filter(function (t) { return t.category === cat; }).length;
      } else {
        count = cat === "all"
          ? window.TUTORIALS.filter(function (t) { return getPlatforms(t).indexOf(currentPlatform) !== -1; }).length
          : window.TUTORIALS.filter(function (t) { return t.category === cat && getPlatforms(t).indexOf(currentPlatform) !== -1; }).length;
      }
      var label = cat === "all" ? "◇ All" : "◇ " + cat;
      btn.innerHTML = label + '<span class="count">' + count + '</span>';
    });
  }

  // Tutorial sidebar
  var sideSearchValue = "";

  function renderSidebarTutorials() {
    el.tutNav.innerHTML = "";

    var searchBox = document.createElement("input");
    searchBox.type = "text";
    searchBox.className = "side-search";
    searchBox.placeholder = "Filter...";
    searchBox.value = sideSearchValue;
    searchBox.oninput = function (e) {
      sideSearchValue = e.target.value.toLowerCase().trim();
      renderSidebarList();
    };
    el.tutNav.appendChild(searchBox);

    var listWrap = document.createElement("div");
    listWrap.id = "sideTutList";
    el.tutNav.appendChild(listWrap);
    renderSidebarList();
  }

  function renderSidebarList() {
    var wrap = document.getElementById("sideTutList");
    if (!wrap) return;
    wrap.innerHTML = "";

    var list = window.TUTORIALS.filter(function (t) {
      if (currentPlatform !== "all" && getPlatforms(t).indexOf(currentPlatform) === -1) return false;
      if (sideSearchValue && t.title.toLowerCase().indexOf(sideSearchValue) === -1) return false;
      return true;
    });

    if (list.length === 0) {
      wrap.innerHTML = '<div style="padding:8px;color:var(--muted);font-size:12px;text-align:center">No matches</div>';
      return;
    }

    list.forEach(function (tut) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "nav-btn tut-link";
      var star = isFav(tut.id) ? "⭐ " : "";
      btn.textContent = star + "▸ " + tut.title;
      btn.onclick = function () { openTutorial(tut.id); };
      wrap.appendChild(btn);
    });
  }

  // Chips
  categories.forEach(function (cat) {
    var chip = document.createElement("button");
    chip.type = "button";
    chip.className = "chip" + (cat === "all" ? " active" : "");
    chip.setAttribute("data-cat", cat);
    chip.textContent = cat === "all" ? "All" : cat;
    chip.onclick = function () {
      currentCategory = cat;
      updateChips();
      renderGrid();
    };
    el.chips.appendChild(chip);
  });

  function updateChips() {
    document.querySelectorAll(".chip").forEach(function (c) {
      c.classList.toggle("active", c.getAttribute("data-cat") === currentCategory);
    });
    document.querySelectorAll("#categoryNav .nav-btn").forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-cat") === currentCategory);
    });
  }

  el.search.oninput = function (e) {
    currentSearch = e.target.value.toLowerCase().trim();
    renderGrid();
  };

  // =============================================
  // RENDER GRID (with fuzzy search + All platform)
  // =============================================
  function renderGrid() {
    var scored = [];
    for (var i = 0; i < window.TUTORIALS.length; i++) {
      var t = window.TUTORIALS[i];

      // Platform filter
      if (currentPlatform !== "all" && getPlatforms(t).indexOf(currentPlatform) === -1) continue;

      // Category filter
      if (currentCategory !== "all" && t.category !== currentCategory) continue;

      // Search score
      var score = searchScore(t, currentSearch);
      if (score <= 0) continue;

      scored.push({ tut: t, score: score });
    }

    // Sort by score descending
    scored.sort(function (a, b) { return b.score - a.score; });

    el.grid.innerHTML = "";
    if (scored.length === 0) {
      el.empty.style.display = "block";
      return;
    }
    el.empty.style.display = "none";

    scored.forEach(function (item) {
      el.grid.appendChild(buildCard(item.tut));
    });
  }

  function buildCard(tut) {
    var badgeHtml = '<div class="plat-badges">';
    window.PLATFORMS.forEach(function (p) {
      var supported = getPlatforms(tut).indexOf(p.id) !== -1;
      badgeHtml += '<span class="plat-badge' + (supported ? ' on' : '') + '">' + (p.svg || '') + '</span>';
    });
    badgeHtml += '</div>';

    // Step count — show for current platform or first available in "All" mode
    var stepCount;
    if (currentPlatform === "all") {
      var firstPlat = getPlatforms(tut)[0];
      stepCount = getSteps(tut, firstPlat).length;
    } else {
      stepCount = getSteps(tut, currentPlatform).length;
    }

    var card = document.createElement("div");
    card.className = "tut-card";
    card.innerHTML =
      '<button class="fav-btn' + (isFav(tut.id) ? ' on' : '') + '" type="button">' + (isFav(tut.id) ? '★' : '☆') + '</button>' +
      '<div class="tut-cat">' + tut.category + '</div>' +
      badgeHtml +
      '<h3>' + tut.title + '</h3>' +
      '<p>' + tut.summary + '</p>' +
      '<div class="tut-meta">' +
        '<span class="diff ' + tut.difficulty + '">' + tut.difficulty + '</span>' +
        '<span>⏱ ' + tut.time + '</span>' +
        '<span>' + stepCount + ' steps</span>' +
      '</div>';

    card.onclick = function (e) {
      if (e.target.classList.contains("fav-btn")) return;
      openTutorial(tut.id);
    };

    var favBtn = card.querySelector(".fav-btn");
    favBtn.onclick = function (e) {
      e.stopPropagation();
      toggleFav(tut.id, favBtn);
    };

    return card;
  }

  function toggleFav(id, btn) {
    var idx = favorites.indexOf(id);
    if (idx === -1) {
      favorites.push(id);
      btn.textContent = "★";
      btn.classList.add("on");
      showToast("⭐ Added to favorites");
    } else {
      favorites.splice(idx, 1);
      btn.textContent = "☆";
      btn.classList.remove("on");
      showToast("Removed from favorites");
    }
    saveFavorites();
    renderSidebarList();
  }

  function swapTutorial(id) {
    el.content.classList.add("swapping");
    setTimeout(function () {
      openTutorial(id);
      el.content.classList.remove("swapping");
    }, 150);
  }

  // =============================================
  // PROGRESS
  // =============================================
  function getProgressKey(tutId, platform) { return tutId + ":" + platform; }
  function getProgress(tutId, platform) {
    return progress[getProgressKey(tutId, platform)] || [];
  }
  function toggleStep(tutId, platform, idx) {
    var key = getProgressKey(tutId, platform);
    if (!progress[key]) progress[key] = [];
    var arr = progress[key];
    var i = arr.indexOf(idx);
    if (i === -1) arr.push(idx);
    else arr.splice(i, 1);
    if (arr.length === 0) delete progress[key];
    saveProgress();
  }

  // =============================================
  // GET STEPS FOR VIEW (handles "All" mode)
  // =============================================
  function getStepsForView(tut) {
    if (Array.isArray(tut.steps)) return { platform: null, steps: tut.steps };
    var tutPlats = getPlatforms(tut);

    if (currentPlatform === "all") {
      // Use detail platform if supported, else first available
      var plat = currentDetailPlatform;
      if (tutPlats.indexOf(plat) === -1) plat = tutPlats[0];
      return { platform: plat, steps: tut.steps[plat] || [] };
    } else {
      return { platform: currentPlatform, steps: tut.steps[currentPlatform] || [] };
    }
  }

  // =============================================
  // OPEN TUTORIAL
  // =============================================
  function openTutorial(id, skipHash) {
    var tut = null;
    for (var i = 0; i < window.TUTORIALS.length; i++) {
      if (window.TUTORIALS[i].id === id) { tut = window.TUTORIALS[i]; break; }
    }
    if (!tut) return;

    currentTutorialId = id;
    updatePageNavActive(null);

    // Update URL hash for shareable link
    if (!skipHash && location.hash !== "#" + id) {
      history.pushState(null, "", "#" + id);
    }

    var view = getStepsForView(tut);
    var steps = view.steps;
    var viewPlatform = view.platform;

    var platLabel = "";
    if (viewPlatform) {
      for (var p = 0; p < window.PLATFORMS.length; p++) {
        if (window.PLATFORMS[p].id === viewPlatform) platLabel = window.PLATFORMS[p].label;
      }
    }

    var done = viewPlatform ? getProgress(id, viewPlatform) : [];
    var pct = steps.length ? Math.round((done.length / steps.length) * 100) : 0;

    // Header
    var html = '<div class="tut-header">';
    html += '<div class="tut-cat">' + tut.category + '</div>';
    html += '<h1>' + tut.title + '</h1>';
    html += '<p class="intro">' + tut.intro + '</p>';

    // Share button
    html += '<button class="share-btn" type="button" data-share-id="' + tut.id + '">🔗 Copy link</button>';

    if (viewPlatform) {
      html += '<div class="current-plat">▸ ' + platLabel + '</div>';
    }
    html += '<div class="tut-tags">';
    html += '<span class="diff ' + tut.difficulty + '">' + tut.difficulty + '</span>';
    html += '<span class="tag">⏱ ' + tut.time + '</span>';
    html += '<span class="tag">' + steps.length + ' steps</span>';
    html += '</div>';

    if (Array.isArray(tut.learnList) && tut.learnList.length) {
      html += '<div class="learn-list">';
      html += '<div class="learn-list-title">What you\'ll learn</div>';
      html += '<ul>';
      tut.learnList.forEach(function (item) { html += '<li>' + item + '</li>'; });
      html += '</ul>';
      html += '</div>';
    }

    html += '</div>';

    // Mini platform picker (only in "All" mode)
    if (currentPlatform === "all" && !Array.isArray(tut.steps)) {
      var tutPlats = getPlatforms(tut);
      if (tutPlats.length > 1) {
        html += '<div class="detail-platform-picker">';
        html += '<span class="detail-plat-label">▸ View steps for:</span>';
        html += '<div class="detail-plat-btns">';
        window.PLATFORMS.forEach(function (p) {
          if (tutPlats.indexOf(p.id) === -1) return;
          var isActive = p.id === viewPlatform;
          html += '<button class="detail-plat-btn' + (isActive ? ' active' : '') + '" type="button" data-detail-plat="' + p.id + '">' + (p.svg || '') + '<span>' + p.label + '</span></button>';
        });
        html += '</div></div>';
      }
    }

    // Progress bar
    if (steps.length > 0 && viewPlatform) {
      html += '<div class="tut-progress">';
      html += '<div class="tut-progress-label"><span>PROGRESS</span><span>' + done.length + '/' + steps.length + ' · ' + pct + '%</span></div>';
      html += '<div class="tut-progress-bar"><div class="tut-progress-fill" id="progFill" style="width:' + pct + '%"></div></div>';
      html += '</div>';
    }

    // Steps
    if (!viewPlatform && !Array.isArray(tut.steps)) {
      html += '<div class="callout warn"><b>No steps available.</b></div>';
    } else if (steps.length === 0) {
      html += '<div class="callout warn">No steps for this platform.</div>';
    } else {
      for (var s = 0; s < steps.length; s++) {
        var step = steps[s];
        if (step.chapter) {
          html += '<div class="chapter-divider"><span>' + step.chapter + '</span></div>';
        }
        var type = detectStepType(step);
        var isDone = done.indexOf(s) !== -1;

        html += '<div class="step step-' + type + (isDone ? ' done' : '') + '" data-step="' + s + '">';
        html += '<div class="step-header">';
        html += '<button class="step-check' + (isDone ? ' checked' : '') + '" type="button" data-idx="' + s + '">' + (isDone ? '✓' : '') + '</button>';
        html += '<div class="step-meta"><div class="step-num-badge">' + (s + 1) + '</div></div>';
        html += '<h3 class="step-title">' + getStepIcon(type) + ' ' + step.title + '</h3>';
        html += '</div>';
        html += '<div class="step-body">';

        var bodyClass = (type === "read") ? "step-read" : "step-text";
        html += '<p class="' + bodyClass + '">' + rich(step.text) + '</p>';

        if (step.code) {
          html += '<div class="code-block" data-lang="' + (step.lang || "text") + '">';
          html += '<button class="copy-code" type="button" data-code="' + encodeURIComponent(step.code) + '">COPY</button>';
          html += '<pre>' + step.code.replace(/</g, "&lt;") + '</pre>';
          html += '</div>';
        }

        if (step.output) {
          html += '<div class="output-block">';
          html += '<div class="output-label">▸ Expected output</div>';
          html += '<pre>' + step.output.replace(/</g, "&lt;") + '</pre>';
          html += '</div>';
        }

        if (step.note) {
          html += '<div class="callout ' + step.note.type + '">' + rich(step.note.text) + '</div>';
        }

        html += '</div></div>';
      }
    }

    html += '<div class="repo-box">';
    html += '<p>// source</p>';
    html += '<a class="repo-btn" href="' + tut.repo.url + '" target="_blank" rel="noopener">' + tut.repo.label + ' ↗</a>';
    html += '</div>';

    el.content.innerHTML = html;

    // Wire copy buttons
    el.content.querySelectorAll(".copy-code").forEach(function (btn) {
      btn.onclick = function () {
        var text = decodeURIComponent(this.getAttribute("data-code"));
        var b = this;
        navigator.clipboard.writeText(text).then(function () {
          b.textContent = "COPIED ✓";
          setTimeout(function () { b.textContent = "COPY"; }, 1500);
        });
      };
    });

    // Wire share button
    var shareBtn = el.content.querySelector(".share-btn");
    if (shareBtn) {
      shareBtn.onclick = function () {
        var url = location.origin + location.pathname + "#" + id;
        if (navigator.share) {
          navigator.share({ title: tut.title, url: url }).catch(function () {});
        } else {
          navigator.clipboard.writeText(url).then(function () {
            showToast("🔗 Link copied");
          });
        }
      };
    }

    // Wire mini platform picker
    el.content.querySelectorAll(".detail-plat-btn").forEach(function (btn) {
      btn.onclick = function () {
        currentDetailPlatform = btn.getAttribute("data-detail-plat");
        localStorage.setItem("neoDetailPlatform", currentDetailPlatform);
        openTutorial(id, true);
      };
    });

    // Wire step checkboxes
    el.content.querySelectorAll(".step-check").forEach(function (btn) {
      btn.onclick = function () {
        var idx = parseInt(btn.getAttribute("data-idx"), 10);
        if (viewPlatform) {
          toggleStep(id, viewPlatform, idx);
          var newDone = getProgress(id, viewPlatform);
          var newPct = steps.length ? Math.round((newDone.length / steps.length) * 100) : 0;
          var fill = document.getElementById("progFill");
          if (fill) fill.style.width = newPct + "%";
          var label = el.content.querySelector(".tut-progress-label span:last-child");
          if (label) label.textContent = newDone.length + "/" + steps.length + " · " + newPct + "%";
        }
        var stepEl = btn.closest(".step");
        if (stepEl) stepEl.classList.toggle("done");
        btn.classList.toggle("checked");
        btn.textContent = btn.classList.contains("checked") ? "✓" : "";
      };
    });

    showPage("tutorial");
  }

  // =============================================
  // FAVORITES
  // =============================================
  function renderFavorites() {
    el.favGrid.innerHTML = "";
    var favs = window.TUTORIALS.filter(function (t) { return isFav(t.id); });
    if (favs.length === 0) {
      el.favEmpty.style.display = "block";
      return;
    }
    el.favEmpty.style.display = "none";
    favs.forEach(function (tut) { el.favGrid.appendChild(buildCard(tut)); });
  }

  // =============================================
  // PROGRESS PAGE
  // =============================================
  function renderProgress() {
    el.progressList.innerHTML = "";
    var keys = Object.keys(progress);
    if (keys.length === 0) {
      el.progressEmpty.style.display = "block";
      return;
    }
    el.progressEmpty.style.display = "none";

    keys.sort().forEach(function (key) {
      var parts = key.split(":");
      var tutId = parts[0];
      var plat = parts[1];
      var tut = null;
      for (var i = 0; i < window.TUTORIALS.length; i++) {
        if (window.TUTORIALS[i].id === tutId) { tut = window.TUTORIALS[i]; break; }
      }
      if (!tut) return;

      var total = getSteps(tut, plat).length;
      var doneCount = progress[key].length;
      var pct = total ? Math.round((doneCount / total) * 100) : 0;
      var platLabel = plat;
      for (var j = 0; j < window.PLATFORMS.length; j++) {
        if (window.PLATFORMS[j].id === plat) platLabel = window.PLATFORMS[j].label;
      }

      var div = document.createElement("div");
      div.className = "prog-item";
      div.innerHTML =
        '<h4>' + tut.title + '</h4>' +
        '<div class="prog-bar-wrap"><div class="prog-bar" style="width:' + pct + '%"></div></div>' +
        '<div class="prog-meta">' +
          '<span>' + platLabel + ' · ' + doneCount + '/' + total + ' steps</span>' +
          '<span class="pct">' + pct + '%</span>' +
        '</div>' +
        '<button class="clear-btn" type="button">clear</button>';

      div.onclick = function (e) {
        if (e.target.classList.contains("clear-btn")) {
          e.stopPropagation();
          delete progress[key];
          saveProgress();
          renderProgress();
          return;
        }
        if (currentPlatform === "all") {
          currentDetailPlatform = plat;
          localStorage.setItem("neoDetailPlatform", plat);
        } else {
          currentPlatform = plat;
          localStorage.setItem("neoPlatform", plat);
          currentDetailPlatform = plat;
          updatePlatBtns();
          renderGrid();
          renderSidebarList();
        }
        openTutorial(tutId);
      };

      el.progressList.appendChild(div);
    });
  }

  // =============================================
  // RESET
  // =============================================
  if (el.resetBtn) {
    el.resetBtn.onclick = function () {
      if (confirm("Delete all favorites and progress?")) {
        favorites = [];
        progress = {};
        saveFavorites();
        saveProgress();
        renderGrid();
        renderFavorites();
        renderProgress();
        renderSidebarList();
        showToast("All data cleared");
      }
    };
  }

  // =============================================
  // BACK
  // =============================================
  el.back.onclick = function () {
    currentTutorialId = null;
    updatePageNavActive("home");
    if (location.hash) {
      history.pushState(null, "", location.pathname);
    }
    showPage("home");
  };

  // =============================================
  // HASH ROUTING
  // =============================================
  function handleHash() {
    var hash = location.hash.replace("#", "");
    if (hash && hash.length > 0) {
      // Check if it's a valid tutorial id
      for (var i = 0; i < window.TUTORIALS.length; i++) {
        if (window.TUTORIALS[i].id === hash) {
          openTutorial(hash, true);
          return;
        }
      }
    }
    // No valid hash — show home
    if (currentTutorialId) {
      currentTutorialId = null;
      updatePageNavActive("home");
      showPage("home");
    }
  }

  window.addEventListener("hashchange", handleHash);
  window.addEventListener("popstate", handleHash);

  // =============================================
  // SCROLL-TO-TOP BUTTON
  // =============================================
  var topBtn = document.createElement("button");
  topBtn.type = "button";
  topBtn.className = "scroll-top-btn";
  topBtn.setAttribute("aria-label", "Scroll to top");
  topBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:20px;height:20px"><path d="M12 19V5M5 12l7-7 7 7"/></svg>';
  topBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  document.body.appendChild(topBtn);

  window.addEventListener("scroll", function () {
    if (window.scrollY > 400) topBtn.classList.add("show");
    else topBtn.classList.remove("show");
  });

  // =============================================
  // SIDEBAR COLLAPSE
  // =============================================
  document.querySelectorAll(".sidebar-section").forEach(function (sec) {
    var chev = document.createElement("span");
    chev.className = "chev";
    chev.textContent = "▼";
    sec.appendChild(chev);
    sec.onclick = function () {
      sec.classList.toggle("collapsed");
      var next = sec.nextElementSibling;
      if (next && next.tagName === "NAV") {
        next.style.maxHeight = sec.classList.contains("collapsed") ? "0px" : "";
        next.style.overflow = "hidden";
      }
    };
  });

  // =============================================
  // INITIAL RENDER
  // =============================================
  updatePageNavActive("home");
  renderGrid();
  updateCategoryCounts();
  renderSidebarTutorials();

  // Handle initial hash
  handleHash();

  console.log("✅ NeoLearn ready. Platform: " + currentPlatform);

})();