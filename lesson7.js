
let age = 156;
let word = "";

if (age % 100 >= 11 && age % 100 <= 14)
{
    word = "лет"; 
}
else if (age % 10 === 1)
{
    word = "год";
}
else if (age % 10 === 2 || age % 10 === 3 || age % 10 === 4)
{
    word = "года";
}
else
{
    word = "лет";
}

console.log(`Vlady ${age} ${word}`);
