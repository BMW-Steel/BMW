/* ============================================================
   Global site script (loaded on every page)
   - Must NEVER throw: most elements it targets only exist on
     specific pages, so every lookup is null-guarded.
   - Counter animation is NOT here anymore — it is handled
     natively in components/sections/home/Section3.js
   ============================================================ */

// Modal video playback (#myModal / #video1 may not exist on every page)
const myModal = document.getElementById('myModal');
const video1 = document.getElementById('video1');

if (myModal && video1) {
  myModal.addEventListener('shown.bs.modal', function () {
    video1.play();
  });

  myModal.addEventListener('hidden.bs.modal', function () {
    video1.pause();
  });
}

// Hover-to-play clip (home page section 4)
const clipp = document.querySelectorAll('.hover-to-play');
const video = document.getElementById('myVideo');

clipp.forEach((clip) => {
  clip.addEventListener('click', () => {
    if (video) {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
  });
});

/* ============================================================
   Media download protection (applies to ALL images & videos)
   Blocks every user-facing way to save media:
   - right-click "Save image/video as..."
   - drag-and-drop the media out of the browser
   - native video download button / picture-in-picture
   - iOS long-press save menu (reinforced by CSS)
   NOTE: client-side only — a determined user can still fetch
   the file URL directly via DevTools/curl.
   ============================================================ */

const isMedia = (el) =>
  el &&
  el.tagName &&
  (el.tagName === 'IMG' ||
    el.tagName === 'VIDEO' ||
    Boolean(el.closest && el.closest('img, video')));

// Block right-click save on media
document.addEventListener('contextmenu', (e) => {
  if (isMedia(e.target)) e.preventDefault();
});

// Block drag-to-download / dragging media out of the browser
document.addEventListener('dragstart', (e) => {
  if (isMedia(e.target)) e.preventDefault();
});

// Harden a single media element (or container) against download.
const protectElement = (el) => {
  if (!el || !el.querySelectorAll) return;
  el.querySelectorAll('video').forEach((v) => {
    v.setAttribute('controlsList', 'nodownload noremoteplayback');
    v.setAttribute('disablePictureInPicture', 'true');
  });
  el.querySelectorAll('img, video').forEach((m) => {
    m.setAttribute('draggable', 'false');
  });
};

// Apply to everything currently in the DOM
protectElement(document);

// Re-apply to any media added later (soft navigations / dynamic content).
// Only newly added nodes are scanned, so the cost stays negligible.
if (typeof MutationObserver !== 'undefined') {
  const mediaObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) protectElement(node);
      });
    });
  });
  mediaObserver.observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
}
