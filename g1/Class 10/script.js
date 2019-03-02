// Wait for the document to fully load
$(document).ready(function(){
// JQuery selectors
let all = $("*");
console.log(all);
let divWrapper = $("#divWrapper");
console.log(divWrapper);
let insideDivClasses = $(".insideDiv");
console.log(insideDivClasses);
let paragraphs = $("p");
console.log(paragraphs);
let firstParagraph = paragraphs.first();
console.log(firstParagraph);
let lastParagraph = paragraphs.last();
console.log(lastParagraph);
let myParagraph = divWrapper.find("p");
console.log(myParagraph);
let domParagraph = myParagraph.get();
console.log(domParagraph);

// Jquery manipulation
$("button").hide();
$("button").show();
$("h1").first().text("This is a new text");
$("h1").first().after("<p> this is a generated paragraph </p>");
$("button").css("color", "blue").css("background-color", "red");

// Event handling in JQuery
$("button").click(function(){
    console.log("Hey");
});

$("button").click(function(e){
    console.log(e);
});

$("button").click(function(){
    $("button").css("background-color", "yellow");
});

// Making an ajax call with JQuery
$("button").click(function(){
    $.ajax({
        url: "https://raw.githubusercontent.com/Drakso/JavaScriptAjax/master/students.json",
        success: function(result){
            let myResult = JSON.parse(result);
            console.log(myResult.trainer)
        }});
    });




});