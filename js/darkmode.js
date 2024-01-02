let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector('.theme-toggle-btn');


//enable dark mode function
const enableDarkMode = () => {
    document.body.classList.add('dark-mode');  //adding the darkmode class to the body
    console.log('Dark Mode Enabled');
    localStorage.setItem("darkMode", "enabled"); //updating the state of darkmode in the localStorage
    updateThemeIcon();
};

//disable dark mode function
const disableDarkMode = () => {
    document.body.classList.remove('dark-mode'); //removing the darkmode class from the body
    console.log('Dark Mode Disabled');
    localStorage.setItem("darkMode", null); //updating the state of darkmode to null
    updateThemeIcon();
};

//update theme icon
const updateThemeIcon = () => {
    if (darkMode === 'enabled') {
        darkModeToggle.innerHTML = "<i class='bx bxs-sun'></i>";
    } else {
        darkModeToggle.innerHTML = "<i class='bx bxs-moon'></i>";

    }
}

//check dark mode is enabled
if (darkMode ==="enabled"){
    enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem("darkMode");

    if (darkMode !== 'enabled') {
        enableDarkMode();
        console.log(darkMode);
    } else {
        disableDarkMode();
        console.log(darkMode);
    }

})