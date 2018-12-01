let buttons = document.getElementsByTagName("button");

//buttons.addEventListener()

for (const button of buttons) {
  button.addEventListener("click", function() {
    console.log("Button clicked");
  });

  button.addEventListener("click", function() {
    console.log("[log2] Button clicked");
  });

}