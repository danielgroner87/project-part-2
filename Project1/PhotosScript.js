document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll("img").forEach(function(img) {
    img.addEventListener("onclick", function() {
      alert("You clicked on a photo of Deni Avdija!");
    });
  });
});
