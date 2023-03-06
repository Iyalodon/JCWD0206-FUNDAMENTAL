// Write a code to get difference between dates in days
let date1 = new Date('02/02/2023');
let date2 = new Date('02/28/2023');

let selisih = date2.getTime() - date1.getTime();

let msinday = 1000 * 3600 * 24;

let selhari = selisih/msinday;

console.log(selhari);
