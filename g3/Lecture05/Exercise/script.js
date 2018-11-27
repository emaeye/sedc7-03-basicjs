let first = document.getElementById("first");
console.log(first);
// -------
let pars = document.getElementsByTagName("p");
console.log(pars);
// -------
let allDivs = document.querySelectorAll("div");
let lastDiv = allDivs[allDivs.length-1];
console.log(lastDiv);
// -------

let h1sinDiv = document.querySelectorAll("div h1");

let h1last = undefined;
for (const h1 of h1sinDiv) {
  if (h1.parentElement.id === "") {
    h1last = h1;
  } 
}
console.log(h1last);
// alternate
lastDiv.id = "find-target";
let lastH1 = document.querySelector("#find-target h1");
console.log(lastH1);
let lastH3 = document.querySelector("#find-target h3");
console.log(lastH3);
lastDiv.removeAttribute("id");

// -------
let h3last = document.querySelector("div h3");
console.log(h3last);
// -------
let textParagraph = document.querySelector(".anotherDiv .paragraph");
console.log(textParagraph.innerText);
// -------
let textNode = document.querySelector(".anotherDiv text");
textNode.innerText += " text";
// -------
h1last.textContent = "H1 Changed Text";
// -------
h3last.textContent = "H3 Changed text";
