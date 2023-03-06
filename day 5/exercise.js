// function that get lowest highest and average

let arr = [1,2,3,4,5];

function nilaiMin(n){
    let arrmin = Math.min (...n);
    return arrmin;
}

function nilaiMax(n){
    let arrmin = Math.max (...n);
    return arrmin;
}
function nilaAvg(n){
    let arrAvg = n.reduce((a,b) => a+b/n.length);
    return arrAvg;
}
console.log(nilaiMin(arr));

console.log(nilaiMax(arr));

console.log(nilaAvg(arr));

//2.

let str = [`pukis`,`kukus`,`maknyus`,`nyus`,`nyus`,`nyus`];

function otw(n){
    let text = ``;
    for(i = 0; i <n.length ; i++){
        if (i === 0){
            text += `${n[i]}`;
        }else if (i == n.length-1){
            text += ` & ${n[i]}`;
        }else {
            text += `, ${n[i]}`;
        }
    }
    return text;
//     n.splice(n.length-1,0, "dan");
//    n = n.join(' ');

// return n;
}
console.log(otw(str));

//4.
//asumsi panjang kedua array asama

let arr2 = [1,2,3];
let arr3 = [3,2,1];
let arr4 =[];

function arrPlus(z,d){
    for (i = 0 ; i <z.length ; i++){
    arr4[i] = z[i] + d[i];
    }

    return arr4;
}

console.log(arrPlus(arr2,arr3));

//5

let arr5 = [`tahu`,`tempe`,`beras`];

// function uyee(n){
//     if (arr5.indexOf(n) == -1){
//         arr5.push(n)
//     }
//     return arr5;
// }
// console.log(uyee(`jeruk`));


function testi(n){
    if (!arr5.includes(n)){
        arr5.push(n);
        console.log(`Masuk cuk ini nih : \n ${arr5}`);
    }else{
        console.log(`sudah ada jadi ga bisa masuk`);
    }
    return arr5;
}
testi(`jeruk`);