const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

const letterAsAKey = arr => {
    str = arr.join('');
    obj = {};
    for (let i = 0; i < str.length ; i++) {
        let prop = str[i].toLowerCase();
        if (obj.hasOwnProperty(prop)) {
            obj[prop]++;
        }
        else if (prop !== ' ') {
            obj[prop] = 1;
        }
    }
    return obj;
}

console.log(letterAsAKey(array));