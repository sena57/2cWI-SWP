let a = 1999;
let b = 2;

/*for (let index = 0; index < 2; index++) {
    console.log("xxxx");
    if (index %1==0) {
        console.log("oooo");
    }
    
}*/

//2. Versuche in einer for - Schleife (1-100) alle geraden Zahlen zu addieren (zwei Lösungswege ⇒ Zähler dahingehend verändern das er nur gerade Zahlen zählt und mit Modulo arbeiten.)
let summe = 0
for (let index = 1; index <= 100; index++) {
    if (index%2 === 0) {
        summe += index;
    }
}
console.log(summe);

/*3. Versuche mit einer for/while Schleife den Anfangsbuchstaben deines Namens auszugeben
XXXX
X
XXXX
   X
XXXX   */

for (let index = 0; index < 1; index++) {
    console.log("XXXX");
    console.log("X    ");
    console.log("XXXX");
    console.log("   X");
    console.log("XXXX");
}
    