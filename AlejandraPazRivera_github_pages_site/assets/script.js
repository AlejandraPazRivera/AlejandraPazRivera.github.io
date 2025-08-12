
// Mobile menu
const menuBtn = document.getElementById('menu');
const nav = document.getElementById('nav');
if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

// Google Analytics (GA4) placeholder
// Replace G-XXXXXXXXXX with your GA4 Measurement ID in assets/script.js
(function() {
  const GA_ID = 'G-XXXXXXXXXX';
  if (!GA_ID || GA_ID === 'G-XXXXXXXXXX') return; // no-op until replaced
  const s = document.createElement('script');
  s.setAttribute('src', `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`);
  s.async = true;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date()); gtag('config', GA_ID);
})();
