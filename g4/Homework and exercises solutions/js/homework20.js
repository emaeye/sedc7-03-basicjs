function calculateAge(birthYear, currentYear) {
    let age = currentYear - birthYear;
    console.log(`You are ${age} years old.`);
}

let currentYear = new Date().getFullYear();

calculateAge(1980, currentYear);
calculateAge(1990, currentYear);
calculateAge(2000, currentYear);