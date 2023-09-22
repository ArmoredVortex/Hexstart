const root = document.querySelector(':root');

function updateColor(){
    // get the color from the input
    let bg_color = document.getElementById("color-background").value;
    let p_color = document.getElementById("color-primary").value;
    let s_color = document.getElementById("color-secondary").value;
    let i_color = document.getElementById("color-icon").value;
    let b_color = document.getElementById("color-blob").value;

    root.style.setProperty('--background-color', bg_color);
    root.style.setProperty('--hex-gradient-1', p_color);
    root.style.setProperty('--hex-gradient-2', s_color);
    root.style.setProperty('--icon-color', i_color);
    root.style.setProperty('--blob-color', b_color);

    // set cookies
    localStorage.setItem("bg_color", bg_color);
    localStorage.setItem("p_color", p_color);
    localStorage.setItem("s_color", s_color);
    localStorage.setItem("i_color", i_color);
    localStorage.setItem("b_color", b_color);
}