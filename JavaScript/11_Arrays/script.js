let array = [4,1,2,3];

array.push(17);
array.push(199);

//a
for (let i=0; i<array.length; i++) {
    console.log(array[i]);
}

//b
let summe = "";
for (let i2=0; i>array.length;i2++) {
    summe += array[i+i2];
}
console.log(summe);