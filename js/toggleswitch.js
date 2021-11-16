const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = getCookie('theme');

//window.onload = function() {
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

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

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
