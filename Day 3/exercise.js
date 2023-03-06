//LATIHAN HARI KE 3


//1. membuat tabel perkalian dari sebuah integer yg telah di tentukan
let number = 9;

// number -> 9 -> 9 x 1, 9 x 2, 9 x 3,...
//declare variabel text untuk mengeluarkan output secara looping
let text = `${number} -> \n`;
for(i = 1; i <= 10; i++){
    text += `${number} x ${i}\n`
}

console.log(text);

//2. Membuat checker apakah sebuat string merupakan polindrome atau bukan

//declare variable input string

let inputString = `taho`;

//split string yang di input perhuruf

let splitInputString =inputString.toLowerCase().split('');//["t","a","h","o"]
// console.log(splitInputString);
//membalik rangkain huruf
let reverseInputString = splitInputString.reverse();//["o","h","a","t"]
// console.log(reverseInputString);
//menggabungkan rangkaian huruf yang telah dibalik
let reverseString = reverseInputString.join('');//ohat
// console.log(reverseString);

console.log(inputString === reverseString ? `string merupakan palindrome` : `string bukanlah palindrome`);//ternari output

//3. Membuat kode untuk merubah sentimeter menjadi kilometer

//membuat variable sentimeter dan membaginya dengan 100000
let cm = 100000;
let km = cm/100000;
console.log(`konversi ${cm} cm ke km adalah ${km} km`);

//4. Membuat angka menjadi format mata uang negara

let duit = 1000000000;

//membagi number
let receh = parseFloat(duit).toFixed().split('');//mengubah integer number menjadi desimal, menentukan 2 angka dibelakang koma dan di split jadi array
// console.log(receh);
let rebuan = receh.length;//menghitung panjang number untuk perseribu, output  membuang . dan 2 angka dibelakang koma
// console.log(rebuan);
let eyeduit = `Rp.`; //membuat mata uang


while ((rebuan-=3) > 0){
    receh.splice(rebuan, 0, '.');
}

let formatduit = receh.join('');

console.log(`${eyeduit} ${formatduit},00`);

//5. Mencopot string dari string yang dicari

//variabel input string
let stringMasukan = `Hello World kelly`;

//variable search string
let searchString = 'ell';

//variabel string akhir
let stringAkhir = stringMasukan.replace(searchString, '');

console.log(`String = "${stringMasukan}", search string = "${searchString}" -> "${stringAkhir}" `);


//6. Membuat kode yang menjadikan setiap awal kata menjadi kapital

//variabel string masukan
let stringin = `hello world bandung uye`;

let strsplit = stringin.split(" ");
// console.log(strsplit);
// console.log(strsplit.length)
for (i = 0; i < strsplit.length; i++){
    strsplit[i] = strsplit[i].charAt(0).toUpperCase() + strsplit[i].slice(1);
}

let stringin2 = strsplit.join(" ");

console.log(`${stringin} -> ${stringin2}`);

//7. membalik string

//cara cepat(singkat)
let stringin3 = stringin.split('').reverse().join('');

//cara susah
// let stringin3 =stringin.split('');//["t","a","h","o"]
// // console.log(splitInputString);
// //membalik rangkain huruf
// let reverseStringin= stringin3.reverse();//["o","h","a","t"]
// // console.log(reverseInputString);
// //menggabungkan rangkaian huruf yang telah dibalik
// let reverseString2 = reverseStringin.join('');//ohat
// // console.log(reverseString);

console.log(`${stringin} -> ${stringin3}`);

//8. membuat segitiga terbalik dr nomor 15

