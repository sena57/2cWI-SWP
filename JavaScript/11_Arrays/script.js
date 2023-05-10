let array = [4,1,2,3];

array.push(17);
array.push(199);

//Aufgabe 1a
for (let i=0; i<array.length; i++) {
    console.log(array[i]);
}

//Aufgabe1b
let summe = 0;
for (let i2=0; i2<array.length; i2++) {
    summe += array[i2];
}
console.log("------------------");
console.log(summe);

//Aufgabe1c
let summe2 = 0;
for (let i3=0; i3<array.length; i3++) {
    summe2 += array[i3];
}
console.log("Mittelwert" + summe2 / array.length);


//Aufgabe2
let array2 = ["Susi", "Paula", "Hans"];
array2.push("Sepp");
let output = "";

for (let i4=0; i4<array2.length; i4++) {
    output += array2[i4];

    if (i4 < array2.length-2) {
        output += ", ";
    }

    if (i4 == array2.length-2) {
        output += " und ";
    }

    if (i4 == array2.length-1) {
            output += ".";
        }
}

console.log("------------------");

console.log("Meine Freunde sind "+ output);

