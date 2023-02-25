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
