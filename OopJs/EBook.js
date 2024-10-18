import { Book } from "./Book.js";

export class EBook extends Book {
    constructor(name, author, year, format) {
        super(name, author, year)
        this._format = format;
    }

    get format() {
        return this._format;
    }

    set format(newFormat) {
        if(typeof newFormat !== "string") {
            throw new Error(`Format is undefined!`)
        } else if (newFormat.length < 5) {
            throw new Error(`File Format cannot have more symbols`);
        }
        this._format = newFormat;
    }

    printInfo() {
        super.printInfo();
        console.log(`File Format: ${this.format}`);
    }

    static createBook(book, format) {
        return new EBook(book.title, book.author, book.year, format);
    }
}