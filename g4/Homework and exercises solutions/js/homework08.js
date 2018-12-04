// Chinese Zodiac

function chineseZodiac() {
    var input = prompt('Which year were you born in?');

    if (input === null || input === '' || isNaN(input)) {
        alert('Please enter a valid number!');
        chineseZodiac();
    } else {
        var yearCalculation = (input - 4) % 12;

        switch (yearCalculation) {
            case 0:
                alert('You were born in the year of the Rat.');
                break;
            case 1:
                alert('You were born in the year of the Ox.');
                break;
            case 2:
                alert('You were born in the year of the Tiger.');
                break;
            case 3:
                alert('You were born in the year of the Rabbit.');
                break;
            case 4:
                alert('You were born in the year of the Dragon.');
                break;
            case 5:
                alert('You were born in the year of the Snake.');
                break;
            case 6:
                alert('You were born in the year of the Horse.');
                break;
            case 7:
                alert('You were born in the year of the Goat.');
                break;
            case 8:
                alert('You were born in the year of the Monkey.');
                break;
            case 9:
                alert('You were born in the year of the Rooster.');
                break;
            case 10:
                alert('You were born in the year of the Dog.');
                break;
            case 11:
                alert('You were born in the year of the Pig.');
                break;
            default:
                alert('Unexpected error. Please try again.');
        }
    }
}

chineseZodiac();