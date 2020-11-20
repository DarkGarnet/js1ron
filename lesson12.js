// function getNumber(max = 100, min = 0) {

// }
// function getName(name = "Гость") 
// {
//     console.log("Привет," + name + "!");
// }

function ololo(cnt) {
    let age = 0
    while (cnt) {
        console.log(`Существу исполнилось ${age} лет`);
        cnt = cnt - age;
        console.log(`В упоковке осталось ${cnt} свечек`);
        age++;
    }
}