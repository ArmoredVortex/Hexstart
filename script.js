/* -- Glow effect -- */

let blob = document.getElementById("blob");

window.onpointermove = ({ clientX, clientY }) => {
  if (blob_switch.checked == false) {
    return;
  }
  blob.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
    },
    { duration: 3000, fill: "forwards" }
  );
};

let sidemenu = document.getElementById("sidemenu");
let settings_button = document.getElementById("settings-button");
let blur = document.getElementById("blur");

settings_button.addEventListener("click", function () {
  sidemenu.classList.toggle("active");
});

window.addEventListener("click", (e) => {
  if (e.target == blur) {
    sidemenu.classList.remove("active");
  }
});

blob_switch = document.getElementById("blob-switch");

blob_switch.addEventListener("click", () => {
  if (blob_switch.checked) {
    blob.style.display = "block";
    setCookie("blob", "true", 365);
  } else {
    blob.style.display = "none";
    setCookie("blob", "false", 365);
  }
});
