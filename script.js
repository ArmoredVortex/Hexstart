/* -- Glow effect -- */

const blob = document.getElementById("blob");

window.onpointermove = ({ clientX, clientY }) => {
  blob.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
    },
    { duration: 3000, fill: "forwards" }
  );
};

const settings = document.getElementById("settings-button");
settings.onclick = () => {
  document.getElementById("sidemenu").classList.toggle("active");
}

const close = document.getElementById("close-button");
close.onclick = () => {
  document.getElementById("sidemenu").classList.toggle("active");
}