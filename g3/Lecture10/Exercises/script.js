// AJAX CALLS

// document.getElementsByTagName("button")[0]
// 	.addEventListener("click", function () {
// 		let xhr = new XMLHttpRequest();
// 		xhr.onload = function () {
// 			if (xhr.status >= 200 && xhr.status < 300) {
// 				console.log('The request succeeded!');
// 				console.log(xhr.response);
// 			} else {
// 				console.log('The request failed!');
// 				console.log(xhr.responseText);
// 			}
// 		};
// 		xhr.open('GET', 'https://swapi.co/api/people/1');
// 		xhr.send();
// 	})

// $("button").click(function () {
// 	$.ajax({
// 		url: "https://swapi.co/api/people/1",
// 		success: function (response) {
// 			console.log('The request succeeded!');
// 			console.log(response);
// 		}, error: function (response) {
// 			console.log('The request failed!');
// 			console.log(response.responseText);
// 		}
// 	});
// });

// EX1

// $(document).ready(function(){
// 	let usernameIn = $("#username");
// 	let passwordIn = $("#password");
// 	let message = $("#message");
// 	let button = $("button").first();
// 	let users = [
// 		{username: "Dragan", password:"stronKpass"},
// 		{username: "Dejan", password:"ilovepancakes"}
// 	];
// 	function checkUser(loginUser, ourUser){
// 		if(loginUser.username === ourUser.username && loginUser.password === ourUser.password){
// 			return true;
// 		} else {
// 			return false;
// 		}
// 	}
// 	button.click(function(){
// 		let loginUser = {username: usernameIn.val(), password: passwordIn.val()};
// 		for (let user of users) {
// 			if(checkUser(loginUser, user)){
// 				$("input, button").hide();
// 				message.text(`Welcome ${user.username}!`);
// 				break;
// 			}
// 		}
// 		$("input").css("border", "2px solid red");
// 	})
// })

//EX2

// $(document).ready(function(){
// 	let json = `{
// 		"trainer": "Dragan Gelevski",
// 		"assistant": "Trajan Stevkovski",
// 		"students": [
// 			"Bob",
// 			"Samantha",
// 			"Chris",
// 			"Jill",
// 			"Greg"
// 		],
// 		"Academy": "Code"
// 	}`;
// 	let parsed = JSON.parse(json);
// 	let list = $("ul");
// 	for (let student of parsed.students) {
// 		list.append(`<li>${student}</li>`);
// 	}
// })

//EX3

// $(document).ready(function(){
// let myTable = $("tbody");
// function printUsers(table, response){
// 	for (let student of response.students) {
// 		table.append(`<tr>
// 		<td>${student.name}</td>
// 		<td>${student.last}</td>
// 		<td>${student.grade}</td>
// 		</tr>`)
// 	}
// 	colorGrades(table);
// }
// function colorGrades(table){
// 	let grades = table.find("td:nth-child(3n)");
// 	for (let gradeTr of grades) {
// 		let gradeNumber = parseInt(gradeTr.innerText);
// 		if(gradeNumber === 1 || gradeNumber === 2){
// 			gradeTr.style.color = "red";
// 		}
// 		if(gradeNumber === 4 || gradeNumber === 5){
// 			gradeTr.style.color = "green";
// 		}
// 	}
// }
// $("button").click(function () {
// 	$.ajax({
// 		url: "https://raw.githubusercontent.com/Drakso/JavaScriptAjax/master/exercise3.json",
// 		success: function (response) {
// 			console.log('The request succeeded!');
// 			printUsers(myTable, JSON.parse(response));
// 			colorGrades(myTable);
// 		}, error: function (response) {
// 			console.log('The request failed!');
// 			console.log(response.responseText);
// 		}
// 	});
// });
// })

// EX 4

// $(document).ready(function(){
// let people = [];
// function addPerson(person){
//     $("ul").append(`<li> ${person.name} </li>`);
//     people.push(person);
// }
// function findHighest(people){
//     let highest = people[0];
//     for (let person of people) {
//         if(parseInt(person.height) > parseInt(highest.height)){
//             highest = person;
//         }
//     }
//     return highest;
// }
// function findHeaviest(people){
//     let heaviest = people[0];
//     for (let person of people) {
//         if(parseInt(person.mass) > parseInt(heaviest.mass)){
//             heaviest = person;
//         }
//     }
//     return heaviest;
// }
// for(let i = 1; i <= 3; i++){
//     $.ajax({
//         url: `https://swapi.co/api/people/${i}/`,
//         success: function (response) {
//             console.log(`Request no ${i} succeeded!`);
//             addPerson(response);
//             if(people.length === 3){
//                 $("ul").after(`<h3> ${findHighest(people).name} is highest! </h3>`);
//                 $("ul").after(`<h3> ${findHeaviest(people).name} is heaviest! </h3>`);
//             }
//         }, error: function (response) {
//             console.log('The request failed!');
//             console.log(response.responseText);
//         }
//     });
// }
// })

