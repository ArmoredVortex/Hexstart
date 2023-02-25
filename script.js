/* -- Glow effect -- */

const blob = document.getElementById("blob");
const sideMenu = document.getElementById("sidemenu");
const settings_button = document.getElementById("settings-button");
const blur = document.getElementById("blur");

window.addEventListener("pointermove", ({ clientX, clientY }) => {
  if (!blob_switch.checked) return;

  blob.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
    },
    { duration: 3000, fill: "forwards" }
  );
});

settings_button.addEventListener("click", () => sideMenu.classList.add("active"));
blur.addEventListener("click", () => sideMenu.classList.remove("active"));

blob_switch.addEventListener("click", () => {
    blob.style.display = blob_switch.checked ? "block" : "none";
    localStorage.setItem("blob", blob_switch.checked);
});
