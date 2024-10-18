/* Завдання 2
1. Створіть об'єкт book з такими властивостями:
title: рядок, представляє назву книги.
author: рядок, представляє автора книги.
year: число, представляє рік видання книги.
2. Деструктуризуйте назву та автора книги з об'єкта book.
3. Виведіть деструктуризовані змінні в консоль */

const book = {
    title: `A Song of Ice and Fire`,
    author: `George R. R. Martin`,
    year: 1991
}

const { title, author } = book;

console.log(title);
console.log(author);