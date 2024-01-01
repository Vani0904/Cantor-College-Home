document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const themeToggleBtn = document.getElementById('theme-toggle-btn');

    themeToggleBtn.addEventListener('click', function(){
        body.classList.toggle('dark-mode');
        updateThemeIcon();
    });

    function updateThemeIcon () {
        const isDarkMode = body.classList.contains('dark-mode');

        themeToggleBtn.innerHTM = isDarkMode ? <i class='bx bxs-sun'></i> : <i class='bx bxs-moon'></i>;
    }
});