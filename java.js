function setMood(emoji) {
  document.getElementById("mood").textContent = emoji;
}

// Emoji trail
document.addEventListener("mousemove", function (e) {
  const trail = document.querySelector(".emoji-trail");
  trail.style.left = e.pageX + "px";
  trail.style.top = e.pageY + "px";
});