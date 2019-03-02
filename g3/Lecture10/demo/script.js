// let responseGlobal;
// document.getElementsByTagName("button")[0]
// .addEventListener("click", function(){
//  let call = new XMLHttpRequest();
//  call.onload = function(){
//     if(call.status >= 200 && call.status < 300){
//         console.log("The request succeeded");
//         let response = JSON.parse(call.response);
//         console.log(response);
//         // responseGlobal = response;
//         // handleResult(response);
//     } else {
//         console.log("The request was not successful");
//         console.log(call.statusText);
//     }
//  }
//  call.open("GET", "https://raw.githubusercontent.com/Drakso/JavaScriptAjax/master/students3.json");
//  call.send();
// })

// function handleResult(result){
//     console.log(result);
// }


$(document).ready(function(){
    $("button").click(function(){
        $.ajax({
            url:"https://raw.githubusercontent.com/Drakso/JavaScriptAjax/master/students3.json",
            success: function(response){
                console.log("The request succeeded");
                let responseObj = JSON.parse(response);
                console.log(responseObj);
            },
            error: function(response){
                console.log("The request was not successful");
                console.log(response.statusText);
            }
        })
    })
})