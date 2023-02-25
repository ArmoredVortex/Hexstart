function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 *1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

window.onload = function() {
    if (getCookie("blob") == "true") {
        blob_switch.checked = true;
        blob.style.display = "block";
    } else {
        blob_switch.checked = false;
        blob.style.display = "none";
    }
    if (getCookie("bg_color") != null) {
        root.style.setProperty('--background-color', getCookie("bg_color"));
        document.getElementById("color-background").value = getCookie("bg_color");
    }
    if (getCookie("p_color") != null) {
        root.style.setProperty('--hex-gradient-1', getCookie("p_color"));
        document.getElementById("color-primary").value = getCookie("p_color");
    }
    if (getCookie("s_color") != null) {
        root.style.setProperty('--hex-gradient-2', getCookie("s_color"));
        document.getElementById("color-secondary").value = getCookie("s_color");
    }
    if (getCookie("i_color") != null) {
        root.style.setProperty('--icon-color', getCookie("i_color"));
        document.getElementById("color-icon").value = getCookie("i_color");
    }
}
