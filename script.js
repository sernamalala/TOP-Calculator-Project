function calculator(a,b,op) {
    let result = 0;
    switch (op) {
        
        case "+":
            result = add(a,b);
            break;
        case "-":
            result = subtract(a,b);
            break;
        case "*":
            result = multiply(a,b);
            break;
        case "/":
            result = divide(a,b);
            break;
    
        default:
            break;
    }
    return result;

}

function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    if(b!==0){
        return a/b;
    }
   
    return ("Cannot divide by Zero!!");
    
    
}

console.log(calculator(1,0,"/"));