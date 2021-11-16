const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

//window.onload = function() {
if (currentTheme) {
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
    else {
        toggleSwitch.checked = false;
    }
}
//}


function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        setCookie('theme', 'dark', 30)
    }
    else {        document.documentElement.setAttribute('data-theme', 'light');
    setCookie('theme', 'light', 30)
    }
}
  toggleSwitch.addEventListener('change', switchTheme, false);
