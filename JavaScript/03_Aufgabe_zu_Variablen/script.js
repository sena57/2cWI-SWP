// Erstelle eine Variable banana mit dem Wert "Banane"
let banana = "Banane";
// Erstelle eine Variable apple mit dem Wert "Apple"
let apple = "Apple";


// Erstelle eine Variable bananaPricePerKilo mit dem Wert 2.14
let bananaPricePerKilo = 2.14;
// Erstelle eine Variable applePricePerKilo mit dem Wert 3.43
let applePricePerKilo = 3.43;


// Ein Apfel hat durchschnittlich ein Gewicht von 0.34 Kilo
let appleWeightPerApple = 0.34;
// Eine Banane hat durchschnittlich ein Gewicht von 0.22 Kilo
let bananaWeightPerBanana = 0.22;


// Gib folgendes aus: Anzahl Bananen/Äpfel pro Kilo, Preis pro Banane/Apfel
console.log("Anzahl Bananen pro Kilo: " + (1 / bananaWeightPerBanana));
console.log("Anzahl Äpfel pro Kilo: " + (1 / appleWeightPerApple));
console.log("Preis pro Banane: " + (bananaPricePerKilo / bananaWeightPerBanana));
console.log("Preis pro Apfel: " + (applePricePerKilo / appleWeightPerApple));

// Preis von 8 Äpfeln
console.log("8 Äpfel kosten " + (applePricePerKilo / appleWeightPerApple * 8));

// Preis von 17 Bananen
console.log("17 Bananen kosten " + (bananaPricePerKilo / bananaWeightPerBanana * 17));

// Preis von 1 Tonne Äpfel
let tonOfApple = 1000 / appleWeightPerApple
console.log("Eine Tonne Äpfel kosten: " + tonOfApple * applePricePerKilo);

let tonOfBananas = 1000 /bananaWeightPerBanana
console.log("Eine Tonne Bananen kostet: " + tonOfBananas * bananaPricePerKilo);