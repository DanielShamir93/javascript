const number = 11;

const lessOrGreaterThan10 = (number) => {
    return new Promise((resolve, reject) => {
        if (number > 10) {
            return resolve({data: 'Greater than 10'});
        } else {
            return reject({data: 'Not greater then 10'});
        }
    })
}

lessOrGreaterThan10(number)
    .then((res) => {
        console.log(res.data);
    })
    .catch((err) => {
        console.log(err.data);
    })


