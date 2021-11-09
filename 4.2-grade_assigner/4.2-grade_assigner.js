let getScoreLetter = (score) => {

    switch (score) {
        case 70..80: return 'B';
    }


    if (score >= 0 && score <= 64) {
        return 'F';
    } else if (score >= 65 && score <= 69) {
        return 'D';
    } else if (score >= 70 && score <= 79) {
        return 'C';
    } else if (score >= 80 && score <= 89) {
        return 'B';
    } else if (score >= 90 && score <= 100) {
        return 'A';
    }
}

console.log(getScoreLetter(80))