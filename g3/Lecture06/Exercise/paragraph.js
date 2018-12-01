let styleSetter = document.getElementById("styleSetter");

// regular:

let toggle = true;

styleSetter.addEventListener("click", function() {
  let paragraph = document.getElementById("paragraph");
  if (toggle) {
    paragraph.style.color = "red";
    paragraph.style.fontStyle = "italic";
    paragraph.style.fontSize = "x-large";
  } else {
    paragraph.removeAttribute("style");
  }
  toggle = !toggle;
});


// advanced (does not leak the toggle variable):
// styleSetter.addEventListener(
//   "click",
//   (function() {
//     let toggle = true;
//     return function() {
//       let paragraph = document.getElementById("paragraph");
//       if (toggle) {
//         paragraph.style.color = "red";
//         paragraph.style.fontStyle = "italic";
//         paragraph.style.fontSize = "x-large";
//       } else {
//         paragraph.removeAttribute("style");
//       }
//       toggle = !toggle;
//     };
//   })()
// );
