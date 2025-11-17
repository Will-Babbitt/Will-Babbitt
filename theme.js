// Theme toggle functionality
(function() {
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    // Update button icon based on current theme
    function updateIcon() {
        const themeToggle = document.getElementById('theme-toggle');
        const theme = document.documentElement.getAttribute('data-theme');
        
        if (theme === 'dark') {
            themeToggle.textContent = '☀️'; // Sun icon for dark mode (click to go light)
        } else {
            themeToggle.textContent = '🌙'; // Moon icon for light mode (click to go dark)
        }
    }
    
    // Wait for DOM to load
    document.addEventListener('DOMContentLoaded', function() {
        updateIcon();
        
        // Toggle theme on button click
        const themeToggle = document.getElementById('theme-toggle');
        themeToggle.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateIcon();
        });
    });
})();
