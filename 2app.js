let num = 50;

if (num < 49) {
    console.log("Nie")
} else if (num > 100) {
    console.log("Za dużo")
} else {
    console.log("Tak")
} 

(num == 50) ? console.log("Tak") : console.log("Nie");

switch (num) {
    case num < 49:
        console.log("Nie")
        break;
    case num > 100:
        console.log("Za dużo!")
        break;
    case 50:
        console.log("Tak")
        break;
    default:
        console.log("Coś nie halo")
        break;
}



// while (num < 55) {
//     console.log(num);
//     num++;
// 

do {
    console.log(num);
    num++;
}
while (num < 55);

for (let i = 1; i < 8; i++) {
    if (i == 6) {
        continue;
    }
    console.log(i)
}

// let a = 1;
// while (a < 8) {
//     console.log(a);
//     a++;
// }

// let a = 1;
// do {
//     console.log(a);
//     a++;
// }
// while (a < 8);
