document.addEventListener('DOMContentLoaded', function() {
    // Check for saved theme preference or use preferred color scheme
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const themeToggle = document.getElementById('theme-toggle');
    
    // Set initial theme based on saved preference or system preference
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.body.classList.add('dark-mode');
        updateToggleIcon(true);
    } else {
        updateToggleIcon(false);
    }
    
    // Add toggle button event listener
    themeToggle.addEventListener('click', function() {
        console.log('Toggle clicked'); // Debug log
        
        // Toggle dark mode class
        const isDarkMode = document.body.classList.contains('dark-mode');
        
        if (isDarkMode) {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
            updateToggleIcon(false);
            console.log('Switched to light mode'); // Debug log
        } else {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
            updateToggleIcon(true);
            console.log('Switched to dark mode'); // Debug log
        }
    });
    
    // Function to update toggle button icon
    function updateToggleIcon(isDarkMode) {
        const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3zm-1 11h2v4h-2v-4zm0-20h2v4h-2V0zm11 9h4v2h-4v-2zM0 11h4v2H0v-2zm3.39 9.39l2.83-2.83 1.41 1.41-2.83 2.83-1.41-1.41zM3.4 3.4l2.83 2.83-1.41 1.41L1.98 4.82 3.4 3.4zm15.2 15.17l-1.41 1.41-2.83-2.83 1.41-1.41 2.83 2.83zm.01-15.17l-2.83 2.83-1.41-1.41 2.83-2.83 1.41 1.41z"/></svg>`;
        const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"/></svg>`;
        
        themeToggle.innerHTML = isDarkMode ? sunIcon : moonIcon;
        themeToggle.setAttribute('aria-label', isDarkMode ? 'Switch to light mode' : 'Switch to dark mode');
    }
});