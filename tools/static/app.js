/* Vanilla-JS interactivity for the static portfolio site.
   Replaces the React behavior that was lost when the app was pre-rendered:
   - mobile navigation menu
   - "Featured UX Projects" carousel (fade between slides + dots)
   - contact / footer forms (POST to the existing Supabase endpoint)
   Everything is defensive: if an element is missing on a page, it is skipped. */
(function () {
  'use strict';

  // ---------- Mobile navigation menu ----------
  function initMobileMenu() {
    var nav = document.querySelector('nav');
    if (!nav) return;
    var toggle = nav.querySelector('button[aria-label="Toggle menu"]');
    if (!toggle) return;

    var names = ['Work', 'Services', 'Perspective', 'About', 'Contact'];
    var links = Array.prototype.slice
      .call(nav.querySelectorAll('a[href]'))
      .filter(function (a) {
        return names.indexOf((a.textContent || '').trim()) !== -1;
      });
    if (!links.length) return;

    var panel = document.createElement('div');
    panel.className = 'static-mobile-menu';
    links.forEach(function (a) {
      var link = document.createElement('a');
      link.href = a.getAttribute('href');
      link.textContent = (a.textContent || '').trim();
      link.addEventListener('click', function () {
        panel.classList.remove('open');
      });
      panel.appendChild(link);
    });
    nav.appendChild(panel);

    toggle.addEventListener('click', function () {
      panel.classList.toggle('open');
    });
  }

  // ---------- Featured projects carousel ----------
  function initCarousel() {
    var prev = document.querySelector('button[aria-label="Previous slide"]');
    var next = document.querySelector('button[aria-label="Next slide"]');
    if (!prev || !next) return;
    var wrapper = prev.parentElement;
    if (!wrapper) return;

    var track = wrapper.firstElementChild; // slides container
    if (!track) return;
    var slides = Array.prototype.slice.call(track.children);
    var dots = Array.prototype.slice.call(
      wrapper.querySelectorAll('button[aria-label^="Go to slide"]')
    );
    if (slides.length < 2) return;

    var current = 0;

    function render() {
      slides.forEach(function (slide, i) {
        var active = i === current;
        slide.style.opacity = active ? '1' : '0';
        slide.style.transform = active ? 'scale(1)' : 'scale(0.95)';
        slide.style.zIndex = active ? '10' : '0';
        slide.style.pointerEvents = active ? 'auto' : 'none';
        slide.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      });
      dots.forEach(function (dot, i) {
        var active = i === current;
        dot.classList.toggle('w-8', active);
        dot.classList.toggle('bg-gray-900', active);
        dot.classList.toggle('w-2', !active);
        dot.classList.toggle('bg-gray-300', !active);
      });
    }

    prev.addEventListener('click', function () {
      current = (current - 1 + slides.length) % slides.length;
      render();
    });
    next.addEventListener('click', function () {
      current = (current + 1) % slides.length;
      render();
    });
    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () {
        current = i;
        render();
      });
    });

    render();
  }

  // ---------- Contact / footer forms ----------
  // The original site POSTed to a Supabase edge function, but that project is no
  // longer available. To keep the static site fully self-contained (no backend,
  // no software limitation), the forms open a pre-filled email via mailto:.
  // If a form backend is added later, replace buildMailto()/submit with a fetch.
  var CONTACT_EMAIL = 'cristian.carrasco@sjsu.edu';

  function statusEl(form) {
    var el = form.querySelector('.form-status');
    if (!el) {
      el = document.createElement('div');
      el.className = 'form-status';
      form.appendChild(el);
    }
    return el;
  }

  function buildMailto(payload, isFooter) {
    var subject = isFooter
      ? 'Portfolio message'
      : 'Portfolio inquiry from ' + (payload.name || 'website visitor');
    var lines = [];
    if (payload.name) lines.push('Name: ' + payload.name);
    if (payload.email) lines.push('Email: ' + payload.email);
    lines.push('');
    lines.push(payload.message || '');
    return (
      'mailto:' +
      CONTACT_EMAIL +
      '?subject=' +
      encodeURIComponent(subject) +
      '&body=' +
      encodeURIComponent(lines.join('\n'))
    );
  }

  function initForms() {
    var forms = Array.prototype.slice.call(document.querySelectorAll('form'));
    forms.forEach(function (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (form.checkValidity && !form.checkValidity()) {
          form.reportValidity();
          return;
        }
        var nameInput = form.querySelector('[name="name"]');
        var emailInput = form.querySelector('[name="email"]');
        var messageInput = form.querySelector('[name="message"]');
        var isFooter = !nameInput;
        var status = statusEl(form);

        var payload = {
          name: nameInput ? nameInput.value : '',
          email: emailInput ? emailInput.value : '',
          message: messageInput ? messageInput.value : '',
        };

        status.className = 'form-status success';
        status.textContent = 'Opening your email app to send this message…';
        window.location.href = buildMailto(payload, isFooter);
      });
    });
  }

  // ---------- Landing intro splash ----------
  // The React version showed a short intro video once per session then removed
  // it after ~5s. That logic was stripped during pre-render, so replicate it
  // here (otherwise the fixed overlay would cover the page forever).
  function initIntro() {
    var iframe = document.querySelector('iframe[src*="youtube.com/embed"]');
    if (!iframe) return;
    var overlay = iframe.closest('.fixed');
    if (!overlay) return;

    function hide() {
      overlay.style.transition = 'opacity 0.8s ease';
      overlay.style.opacity = '0';
      setTimeout(function () {
        if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
      }, 850);
    }

    try {
      if (sessionStorage.getItem('hasSeenIntro')) {
        overlay.parentNode.removeChild(overlay);
        return;
      }
      sessionStorage.setItem('hasSeenIntro', 'true');
    } catch (e) {
      /* sessionStorage may be unavailable; still auto-hide below */
    }
    setTimeout(hide, 5000);
  }

  function init() {
    initIntro();
    initMobileMenu();
    initCarousel();
    initForms();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
