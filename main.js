// let a = prompt("name")
// console.log(a);
// let b = prompt("surName")
// console.log(b);
// let c = prompt("age")
// console.log(c);
// let d = confirm("isMaired")

// console.log(d);


// let a = prompt("1 son")
// let b = prompt("2 son")
// console.log(
//     a + b
// );

// let a = confirm("18 ga to'lganmisan")

// if(confirm = a) {
//     console.log("Marhamat");
// } else {
//     console.log("Uyinga bor");
// }

// let a = confirm("jhgyftdrfgyhu")

// if(a) {
//     let b = +prompt("Any number")
//     if(b > 10){
//         console.log("Kalon");
//     } else {
//         console.log("Mayda");
//     }
// } else {
//     console.log("Uyda bor");
// }



let name = 'Alex'
let money = 10000
let account = 7777

let a = prompt("Как вас зовут")

if (name == a) {
    console.log(true);
} else{
    console.log("Пользователь не найден, досвидули");
}

let b = prompt("Номер счета?")

if (account == b) {
    console.log(true);
} else{
    console.log("Пользователь не найден, досвидули");
}

let c = prompt("Сколько обналичить?")

if(c) {
    if (money > c) {
        console.log("Все отлично");
    } else{
        console.log("Недостаточно средств");
    }
} else {
    console.log("Недостаточно средств");
    let d = "Сколько снял?"
    let f = "Сколько Осталось?"
}

console.log(c);

console.log(
    money - c
);