import { Book } from "./Book.js";
import { EBook } from "./EBook.js";

const book1 = new Book(`Harry Potter`, `J. Rowling`, 1997);
const book2 = new Book(`White Fang`, `Jack London`, 1906);
const ebook = new EBook(`Soil`, `Jamie Kornegay`, 2015, `pdf`);

book1.printInfo();
book2.printInfo();
ebook.printInfo();

const oldestBook = Book.oldBook([book1, book2, ebook]);
console.log(`The oldest book is ${oldestBook.name}`);

const newEbook = EBook.createBook(book1, `epub`);
newEbook.printInfo();