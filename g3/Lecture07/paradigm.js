let wekop = {
  firstName: "Wekoslav",
  lastName: "Stefanovski",
  age: age,
}

let sedc = {
  name: "SEDC",
  location: "Skopje",
  lecturers: [weko],
  classes: [{
    name: "Basic JS",
    group: "G3",
    location: "Petra"
  }]
}

console.log(sedc.lecturers[0]);


let wekoHuman = {
  firstName: "Wekoslav",
  lastName: "Stefanovski"
}

let wekoLecturer = {
  ...wekoHuman,
  className: "Basic JavaScript"
}

console.log(wekoLecturer);