

// function cariprima(n){

//     for (i = 2; i < n; i++){

//         if (n % i == 0){
//             return false
//         }
//     }
//     return true
// }


// let P = cariprima(9);


// if (P == false ){
//     console.log(`bukanlah bilangan prima`);
// }else {
//     console.log(`adalah bilangan prima`);
// }

//CONVERT CELCIUS TO FARENHEIT

let celcius = 5;
let farenheit = celcius * 9 / 5 + 32;

console.log(`${celcius} celcius adalah ${farenheit} farenheit`);


//CHECK NUMBER WETHER ODD OR EVEN

let angka = 5;
if (angka % 2 ==0){
    console.log(`${angka} adalah bilangan genap`);
}else {
    console.log(`${angka} adalah bilangan ganjil`);
}

//CHECK NUMBER WTHER PRIME NUMBER OR NOT
let bilangan = 9;
let checker = 0;
for(i = 1; i<=bilangan ; i++){
    if ( bilangan % i == 0){
        checker++;

    }
}

if(checker <= 2){
    console.log(`${bilangan} adalah bilangan prima`);
} else {
    console.log(`${bilangan} bukanlah bilangan prima`);

}

// let angka = 2;

// if(angka ==2){
//     console.log(`${angka} adalah bilangan prima`);
// }else if(angka % 2 === 0 || angka % 3 === 0){
//     console.log(`${angka} bukanlah bilangan prima`);
// }else {
//     console.log(`${angka} adalah bilangan prima`);
// }



// SUM NUMBER 1 TO N
//PSUDOCODE
//menambahkan angka dr 1 ke n
//membuat fungsi assignment jumlah +i  secara looping

let n = 5;
let sum = 0;
let text = `${n} -> `
for(i = 1; i<=n ; i++){
i ==1 ? (text += `${i}`) : (text += ` + ${i}`);
sum = sum +i;

}
console.log(`${text} = ${sum}`);

//FACTORIAL
//Pseudocode
//Membuat faktorial dari sebuah bilangan
// mengalikan setiap hasil loping hingga n

let bil = 6;
let factorial = 1;

for(i = 1; i <= bil ; i++){
    factorial = factorial *i;
}
console.log(factorial);

