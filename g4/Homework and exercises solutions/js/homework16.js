var result = "";

for (var i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        result += `${i}\n`;
    } else {
        result += `${i} `;
    }
}

console.log(result);