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

sidemenu=document.getElementById("sidemenu");
settings_button=document.getElementById("settings-button");
blur=document.getElementById("blur");

// console log is settings button is clicked
settings_button.addEventListener("click", function(){
    sidemenu.classList.toggle("active");
});

// close sidemenu when clicked outside
window.addEventListener("click", function(e){
    if(e.target == blur){
        sidemenu.classList.remove("active");
    }
});