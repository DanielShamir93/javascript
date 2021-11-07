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

    console.log(`Today is ${currDateParts[0]} the ${currDateParts[2]} of ${currDateParts[1]}, ${currDateParts[3]}`);
}

tellDate();