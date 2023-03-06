// //FIBONACCI
// //fibonacci merupakan susunan bilangan yang di awali 0 dan 1
// //suku ke n adalah 

let a = 0;
let b = 1;
let fib = a+b; 
let suku = 10;

// console.log(a);
for (i = 1; i <= suku ; i++  ){// 2 , 3 , 4
    console.log(fib); // 1 , 1 , 2 , 3
    fib = a+b; // 3
    a = b; // 1 , 2
    b = fib; // 1 , 2 , 3
}


//Array Fibonacci

// let a = [0 , 1];
// let suku = 10;
// for (i = 0;i<=suku-2; i++ ){
//     let p1 = a.length -2;
//     let p2 = a.length -1;
//     let fib = a[p1]+a[p2];
//     a.push(fib);

// }
// console.log(a);