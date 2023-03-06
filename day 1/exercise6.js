// Write a code to convert days to years, months and day
let x = 400; //hari yang diketahui
let y = x/365; //Tahun
let mo = x % 365 / 30; //Sisa Bulan
let day = x%365%30; //Sisa Hari

year= parseInt(y);
month = parseInt(mo);

console.log(`${x} days adalah ${year} year ${month} month ${day} days`);