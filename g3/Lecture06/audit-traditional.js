let buttons = document.getElementsByTagName("button");

// don't try this at home (yet)
for (const button of buttons) {
  let oldHandler = button.onclick;
  let newHandler = function () {
    console.log("Button clicked");
    oldHandler();
  }
  button.onclick = newHandler;
}