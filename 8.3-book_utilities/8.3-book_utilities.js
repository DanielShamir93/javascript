const book1 = {
    name: 'book1',
    author: 'author1',
    year: '1993'
}

const book2 = {
    name: 'book2',
    author: 'author2',
    year: '2006'
}

const bookUtil = {};

// 3
bookUtil.getFirstPublisher = (book1, book2) => {
    return book1.year < book2.year ? book1 : book2;
}

// 4
bookUtil.setNewEdition = (book, editionYear) => {
    book.latestEdition = editionYear;
}

// 5
bookUtil.setLanguage = (book, language) => {
    book.language = language;
}

// 6
bookUtil.setTranslation = (book, language, translator) => {
    book.translation = {
        language,
        translator
    }
}

// 7
bookUtil.setPublisher = (book, name, location) => {
    book.publisher = {
        name,
        location
    }
}

// 8
bookUtil.isSamePublisher = (book1, book2) => {
    return  book1.publisher === book2.publisher &&
            book1.location === book2.location;
}