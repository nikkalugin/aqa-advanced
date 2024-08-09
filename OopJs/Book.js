export class Book {
    constructor(name, author, year) {
        this._name = name;
        this._author = author;
        this._year = year;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        if (typeof newName !== `string`) {
            throw new Error(`Must be string value!`);
        }
        this._name = newName;
    }

    get author() {
        return this._author;
    }

    set author(newAuthor) {
        if (typeof newAuthor !== `string`) {
            throw new Error(`Must be string value!`);
        }
        this._author = newAuthor;
    }

    get year() {
        return this._year;
    }

    set year(newYear) {
        if (newYear.length < 4) {
            throw new Error(`Must be Year value!`);
        } else if (typeof newYear !== `number`) {
            throw new Error(`Must be Year value!`);
        }
        this._year = newYear;
    }

    printInfo() {
        console.log(`Name of book: ${this.name}, Author of book: ${this.author}, Publish year: ${this.year}`);
    }

    static oldBook(books) {
        return books.reduce((oldest, book) => (book.year < oldest.year ? book : oldest));
    }
}