let pops = 10;
while (pops) 
{
    console.log("Игорь съtл конфетку");
    pops--; // pops = pops - 1 (декремент)
}
console.log("У Игоря больше нет конфет!");

let n = 6;
let step = 2;
while (step <= n)
{
    if (step % 2 === 0)
    {
        console.log(step);
    }
    step++;
}