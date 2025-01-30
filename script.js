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
   
    return ("😭😭");
    
    
}

console.log(calculator(1,0,"/"));


//EVENT LISTENERS

const buttons = document.querySelectorAll(".num-button");
const input = document.getElementById("screen-input");
const clearButton = document.getElementById("clear");
const equalButton = document.getElementById("equal");
clearButton.addEventListener("click",function () {
    input.value = "";
    
})

buttons.forEach((button)=>{

    button.addEventListener("click", function(){
        input.value += button.innerHTML;
    })

})

equalButton.addEventListener("click",function() {
    
    if(input.value.length>0 && /[+\-*/]/.test(input.value)){

        let string = input.value;
        let parts = string.split(/([+\-*/])/);
        let num1 = Number(parts[0]);
        let op = parts[1];
        let num2 = Number(parts[2]);

        let result = calculator(num1,num2,op);
        input.value = result;
    }
})