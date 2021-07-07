function fibonacci(x){
    let fib =[1,2]
    if (x<1) {
        return "invalid number"
        
    }else if (x<=2){
        return fib[x-1];
    }
     i=0
    while (x>fib.length) {
        fib.push(fib[i]+fib[i+1]);
        i++ ;
    }
    return fib[x-1]
}
console.log(fibonacci(prompt("You will find out which number in the fibonacchi sequence")))