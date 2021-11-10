const book = {
    title: 'The Cat in the Hat',
    author: 'Dr. Seuss',
    Publisher: 'Random House USA Inc',
    numOfPages: 72
}

const bookDescription = book => {
    let res = '';
    Object.keys(book).forEach( description => {
        switch(description) {
            case 'title':       res += `The book ${book[description]} `;
                                break;
            case 'author':      res += `was written by ${book[description]} `;
                                break;
            case 'publisher':   res += `in the year ${book[description]}`;
                                break;
            case 'numOfPages':  res += `and has ${book[description]} pages`;
        }
    })
    return res;
}

console.log(bookDescription(book));