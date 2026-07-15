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
  var SUPABASE_URL =
    'https://pfiuvsujamfwyhedraeq.supabase.co/functions/v1/make-server-8d5cb2ac/contact';
  var SUPABASE_ANON =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmaXV2c3VqYW1md3loZWRyYWVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg1MTc1MjcsImV4cCI6MjA4NDA5MzUyN30.DxxeNfgJzwXTB6WMJ2iA4PMOsyrUPFkshXJqBnMz7eE';

  function statusEl(form) {
    var el = form.querySelector('.form-status');
    if (!el) {
      el = document.createElement('div');
      el.className = 'form-status';
      form.appendChild(el);
    }
    return el;
  }

  function initForms() {
    var forms = Array.prototype.slice.call(document.querySelectorAll('form'));
    forms.forEach(function (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var nameInput = form.querySelector('[name="name"]');
        var emailInput = form.querySelector('[name="email"]');
        var messageInput = form.querySelector('[name="message"]');
        var isFooter = !nameInput;
        var submitBtn = form.querySelector('button[type="submit"], button:not([type])');
        var status = statusEl(form);

        var payload = {
          name: nameInput ? nameInput.value : 'Footer Contact',
          email: emailInput ? emailInput.value : '',
          message: messageInput ? messageInput.value : '',
          page: isFooter ? 'footer' : 'contact',
        };

        var originalLabel = submitBtn ? submitBtn.textContent : '';
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.textContent = 'Sending...';
        }
        status.className = 'form-status';
        status.textContent = '';

        fetch(SUPABASE_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + SUPABASE_ANON,
          },
          body: JSON.stringify(payload),
        })
          .then(function (r) {
            return r.json().then(function (data) {
              return { ok: r.ok, data: data };
            });
          })
          .then(function (res) {
            if (res.ok && res.data && res.data.success) {
              status.className = 'form-status success';
              status.textContent = res.data.message || 'Message sent!';
              form.reset();
            } else {
              status.className = 'form-status error';
              status.textContent =
                (res.data && res.data.error) || 'Failed to send message. Please try again.';
            }
          })
          .catch(function () {
            status.className = 'form-status error';
            status.textContent = 'Network error. Please check your connection and try again.';
          })
          .finally(function () {
            if (submitBtn) {
              submitBtn.disabled = false;
              submitBtn.textContent = originalLabel;
            }
          });
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
