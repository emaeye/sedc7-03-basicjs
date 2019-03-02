// let result = document.getElementById("result");
// result.innerText = "Hello from DOM Manipulation";

let result = $("#result");

result.text("Hello from jQuery");
result.after(`<h2>Jas sum h2</h2>`);

let isShown =  true;

$("#toggle").click(function(){
  if (isShown) {
    result.fadeOut();
  } else {
    result.fadeIn();
  }
  isShown = !isShown;
})

// -------------

let paragraphs = $("p");

// ----------

$("#append").on("click", () => {
  $("#span").append($("#div"));
})

$("#appendto").on("click", () => {
  $("#span").appendTo("#div");
})

$("#prepend").on("click", () => {
  $("#span").prepend($("#div"));
})

$("#prependto").on("click", () => {
  $("#span").prependTo("#div");
})

$("#mark-last").on("click", () => {
  $("#pseudo-selector p:last").css("color","red");
})

$("#mark-first").on("click", () => {
  $("#pseudo-selector p:first").css("color","lime");
})

$("#mark-even").on("click", () => {
  $("#pseudo-selector p:even").css("background-color","yellow");
})

$("#mark-odd").on("click", () => {
  $("#pseudo-selector p:odd").css("background-color","gray");
})

$(".hide").on("click", (event) => {
  // $(".hide").parent().hide()
  $(event.target).parent().hide();
})

