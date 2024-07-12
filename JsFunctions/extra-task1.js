function shortLongShort(a, b) {
    if(a.length < b.length) {
        return a + b + a;
    } else {
        return b + a + b;
    }
}

const result1 = shortLongShort(`1`, `22`);
console.log(result1);

const result2 = shortLongShort(`22`, `1`);
console.log(result2);