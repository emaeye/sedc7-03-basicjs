$(()=>{
  //method one
  let div = $("<div>");
  div.addClass("dynamic-div");
  div.text("I'm dynamic!");
  div.appendTo("body");

  // method two
  $(`<div class="dynamic-div">
    I'm dynamic too
  </div>`).appendTo("body");

  // method three
  $("body").append(`<div class="dynamic-div">I'm dynamic three</div>`);

  // DOM
  let regular = document.createElement("div");
  regular.classList.add("dynamic-div");
  regular.textContent = "I'm a bit dynamic";
  let body = document.getElementsByTagName("body")[0];
  body.appendChild(regular);

  // mixed MMA
  let regular2 = document.createElement("div");
  let jqueryDiv = $(regular2);
  jqueryDiv
    .addClass("dynamic-div")
    .text("I'm a bit more dynamic")
    .appendTo("body");

})
