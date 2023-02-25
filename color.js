var root = document.querySelector(':root');

function updateColor(){
    // get the color from the input
    let bg_color = document.getElementById("color-background").value;
    let p_color = document.getElementById("color-primary").value;
    let s_color = document.getElementById("color-secondary").value;
    let i_color = document.getElementById("color-icon").value;
    console.log(bg_color, p_color, s_color);

    root.style.setProperty('--background-color', bg_color);
    root.style.setProperty('--hex-gradient-1', p_color);
    root.style.setProperty('--hex-gradient-2', s_color);
    root.style.setProperty('--icon-color', i_color);

    // set cookies
    setCookie("bg_color", bg_color, 365);
    setCookie("p_color", p_color, 365);
    setCookie("s_color", s_color, 365);
    setCookie("i_color", i_color, 365);

}