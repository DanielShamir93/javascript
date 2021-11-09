let countryToLiveIn = (language, isIsland, population, country) => {
    if (language === 'Hebrew' && isIsland === false && population <= 9.2 && country === 'Israel') {
        console.log('You should live in Israel');
    } else {
        console.log('Israel does not meet your criteria');
    }
}