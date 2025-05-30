// Simple website - no JavaScript needed 

// Simple dark/light mode switch
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
} 

// Track which pages people visit
function trackPageView() {
    console.log('Page viewed:', window.location.pathname);
    // Or send to analytics service
} 