const tellDate = () => {

    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    const now = new Date();
    const currDate = now.toLocaleDateString("en-US", options);

    const currDateParts = currDate.split(' ').map( val => {
        if (val.includes(',')) {
            return val.replace(',', '');
        }
        return val;
    });

    const weekday = currDateParts[0];
    const day = currDateParts[2];
    const month = currDateParts[1];
    const year = currDateParts[3];

    console.log(`Today is ${weekday} the ${day} of ${month}, ${year}`);
}

tellDate();