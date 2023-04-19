/*let a =5;
let b = 5;

function add(a,b) {
    return a + b;
}

let ergebnisAdd = add(a,b);
console.log(ergebnisAdd);


function subtract(a,b){
    return a - b;
}

let ergebnisSubtract = subtract(a,b);
console.log(ergebnisSubtract);


function multiply(a,b) {
    return a * b;
}

let ergebnisMultiply = multiply(a,b);
console.log(ergebnisMultiply);


function supercalculation (a,b) {
    return (a+b) / (2*a);
}

let ergebnisSupercalculation = supercalculation(a,b);
console.log(ergebnisSupercalculation); */


function printEasterDate(year) {
    let N = year - 1900;
    let A = N % 19;
    let B = ((7*A+1) / 19);
    let M = (11*A+4-B) % 29;
    let Q = Math.floor (N/4);
    let W = (N+Q+31-M) % 7;
    let P = Math.floor (25-M-W);

    if (P>0) {
        console.log('Ostersonntag ist der ', P ,'. April');
    }
    else {
        console.log('Ostersonntag ist der ' ,(P+31), '. März')
    }
}

printEasterDate(2023)