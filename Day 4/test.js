function iterate(n){
    for (i = 1; i <= n ; i++){
        if(i == 3){
            console.log(`Fizz`);
        }else if( i==5){
            console.log(`Buzz`);
        }else if (i % 3 == 0 && i % 5 == 0){
            console.log(`FizzBuzz`);
        }else {
            console.log(i);
        }
    }
    return i;
}
console.log(iterate(20));