export const getImageUrl = (path) => {
    return new URL(`/assets/${path}`, import.meta.url).href;
};

const cursor = document.createElement("div"); // add custom cursor
cursor.style.position = "absolute";
cursor.style.width = "100px";
cursor.style.height = "100px";
cursor.style.backgroundImage = "url('/Cursor.png')";
cursor.style.backgroundSize = "cover";
cursor.style.pointerEvents = "none";
cursor.style.zIndex = "1000";
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.pageX}px`;
  cursor.style.top = `${e.pageY}px`;
});