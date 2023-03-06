
//1. fungsi untuk membuat segitiga dengan parameter height sebagai tinggi segitiga

    let num = 1;
    let str = '';
function segitiga(height){


    for(i = 0 ; i <= height ; i++){
        for(j = 1; j <= i; j++){

            if(num<=9){
                str += `0${num++} `;
            } else {
                str += `${num++} `;
            }

        }str += '\n'
    }
    
    return str;

}
console.log(segitiga(4));

//2.]

function iterate(n){
    str += '';
    for (i = 1; i <= n ; i++){

        if (i % 3 == 0 && i % 5 == 0){
            str += `FizzBuzz`;
        }else if( i % 5 == 0){
            str +=`Buzz` ;
        }else if (i %3 == 0){
            str += `Fizz` ;
        }else {
            str += `${i}` ;
           
        } str += ` `;
    }return str;
}
console.log(iterate(15));

//3. BMI


function BMI (weight,height){

    let bmi = weight/height/height;//kg,m2
    let condition;

    switch(true){
        case bmi <= 18.5:
            condition = `Less Weight`;
            break;
    
        case bmi > 18.5 && bmi < 24.9 :
            condition=`Ideal`;
            break;
    
        case bmi >= 25.0 && bmi <29.9 :
            condition= `Overweight`;
            break;
    
        case bmi >= 30.00 && bmi <= 39.9 :
            condition = `Very Overweight`;
            break;
    
        default :
        condition = `Obesity`;
    }
   return condition;
}
console.log(BMI(20 , 1.60));
console.log(BMI(70 , 1.60));
console.log(BMI(200 , 1.60));


//Array that remove all odd numbers 

let arr=[1,2,3,4,5,6,7,8,9,10];
let arrResult = [];

function ArrayFillter(){
    for(i = 0; i< arr.length ;i++){
        if (arr[i] % 2 ==0){
           arrResult.push(arr[i]);
        }
    }
    return arrResult;
}
console.log(ArrayFillter());

//5. 
let text = `Hello World`;
function splat(){
   text =  text.split(' ');
return text;
}

console.log(splat());