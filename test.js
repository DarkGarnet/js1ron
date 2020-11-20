// let x = true + false;
// console.log(x);

// let info = 2 + "a" * 2;
// console.log(info);

// ((5 >= 7) || ("javascript" != "java")) && !(((11 * 3) == 99) && true)

// console.log("OLOLO" > "ololo");

// let a = 1;
// a++;
// a *= a;
// console.log(a--); ""

// a = 5;
// console.log(a);

// let b = 6;
// console.log(b);

// var c = 33;
// console.log(c);

// const d = 12 + 5;
// console.log(d);

// let class = (2 + 2) * 2;
// console.log(class);

let msec = Math.floor(Math.random() * (10000000 - 10000) + 10000);
console.log(msec);

let secs = Math.floor(msec / 1000);
let mins = Math.floor((msec % 1000) / 60);
let hours = Math.floor((mins % 60) / 60);
let days = Math.floor((hours % 60) / 24);

console.log(secs)
console.log(`${days}:${hours}:${mins}:${secs}`);