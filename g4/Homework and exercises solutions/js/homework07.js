// How much money

function howMuchMoney() {
    var input = prompt('How much money do you have?');

    if (input === null || input === '' || isNaN(input)) {
        alert('Please enter a valid number!');
        howMuchMoney();
    } else if (input <= 0) {
        alert('You need to find a job.');
    } else if (input > 0 && input <= 100) {
        alert('You can buy a chocolate bar.');
    } else if (input > 100 && input <= 500) {
        alert('You can go to a restaurant.');
    } else if (input > 500 && input <= 1000) {
        alert('You can go to the cinema with your friends.');
    } else {
        alert('You can probably do whatever you want.');
    }
}

howMuchMoney();