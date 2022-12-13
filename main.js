function arg() {
    return arguments.length;
}

let num = arg(7, 10, 20);
console.log('кількість аргументів' + num);

function equal(a,b) {
    if(a<b) {
        return -1;
    }
    else if(a>b) {
        return 1;
    }
    else {
        return 0;
    }
}
let num1 = prompt('яке число?');
let num2 = prompt('яке друге число?');

let result = equal(num1,num2);
console.log(result);

function factorial(x) {
    if(x==1) {
        return 1;
    }
    return x*factorial(x-1);
}

let fact = factorial(5);
console.log('факторіал' + fact);

function number(a,b,c) {
    return a + '' + b + '' + c;
}
let res = number(7,6,5);
console.log(res);

function squ (width,height) {
    if(height==0) {
        return width*width;
    }
    return width*height;
}

let wid = prompt('довжина?');
let hei = prompt('ширина?');
let square = squ(wid,hei);
console.log('Площа' + square);