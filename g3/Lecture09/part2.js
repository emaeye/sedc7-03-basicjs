let fnamePlaceHolder = "Enter first name";
let lnamePlaceHolder = "Enter last name";

$(() => {
  $(":text")
    .on("focus", event => {
      let input = $(event.target);
      if (input.val() === fnamePlaceHolder) {
        input.val("");
        input.css("color", "");
      }
      if (input.val() === lnamePlaceHolder) {
        input.val("");
        input.css("color", "");
      }
      $("#result").text("typing...");
    })
    .on("blur", () => {
      setPlaceHolder($("#firstName"), fnamePlaceHolder);
      setPlaceHolder($("#lastName"), lnamePlaceHolder);

      let fname = getValue($("#firstName"), fnamePlaceHolder);
      let lname = getValue($("#lastName"), lnamePlaceHolder);

      $("#result").text(`${fname} ${lname}`);
    });

  // $("#firstName").attr("placeholder", "Enter first name");
  // $("#lastName").attr("placeholder", "Enter last name");

  setPlaceHolder($("#firstName"), fnamePlaceHolder);
  setPlaceHolder($("#lastName"), lnamePlaceHolder);

  //

  let onceHandler = () => {
    console.log("It is I, L'Eclaire!");
    setTimeout(() => {
      $("#once").one("click",
      );
    }, 2000);
  };

  $("#once").one("click", () => {
    console.log("It is I, L'Eclaire!");
  });

  $("#turnoff").on("click", () => {
    console.log("turnoff clicked");
    $("#turnoff").off("click");
  });

});

function setPlaceHolder(input, placeholder) {
  let value = input.val();
  if (value === "") {
    input.val(placeholder);
    input.css("color", "gray");
  }
}

function getValue(input, placeholder) {
  let result = input.val();
  return (result === placeholder) ? "" : result;
}
