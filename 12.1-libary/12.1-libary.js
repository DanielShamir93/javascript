var library = [{author: "Bill Gates",title: "The Road Ahead",readingStatus: true},{author: "Steve Jobs",title: "Walter Isaacson",readingStatus: true},{author: "Suzanne Collins",title: "Mockingjay: The Final Book of The Hunger Games",readingStatus: false}];

const showBooks = (library) => {
    let resArr = library.map((book) => {
        if (book.readingStatus) {
            return `${book.title}, ${book.author}, ${book.readingStatus}`
        } else {
            return null;
        }
    }).filter((book) => {
        return book !== null;
    });
    return resArr.join('\n');
}

console.log(showBooks(library));