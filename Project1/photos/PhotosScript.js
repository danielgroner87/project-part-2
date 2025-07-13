document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll("img").forEach(function(img) {
    img.addEventListener("click", function() {
      alert("You clicked on a photo of Deni Avdija!");
    });
  });
});
