// //4 test
// function moneyFormat(price, sign = 'Rp ') {
//     const pieces = parseFloat(price).toFixed(2).split('')
//     let ii = pieces.length - 3
//     while ((ii-=3) > 0) {
//       pieces.splice(ii, 0, '.')
//     }
//     return sign + pieces.join('')
//   }
  
//   console.log(
//     moneyFormat(100),
//     moneyFormat(1000),
//     moneyFormat(10000.00),
//     moneyFormat(1000000000000000000)
//   )

// for (i = 5; i > 0; i--) {
//     console.log("\n");
//    for (j = 0; j < 6 - i; j++) {
//        console.log(" "," ");
//    }
//    for (j = 6 - i; j <= 5; j++) {

//        console.log("*");
//    }
// }
let pola = '';
let s =  '';
let bil = 1;
let n = 5;

for(i = 1; i <= n ;i++){
    for(j = n - 1 ; j >=i ; j--){
        // pola += ' ';
        s +=  '*';
    }

    for(k = 1; k <= i; k++){
        // pola += '*';
       s += bil ++ + ' ';
    }  

    // for(m = 1 ; m <= i - 1; m++ ){
    //     pola +='*';
    // }
    s += '\n';
}
console.log(s);