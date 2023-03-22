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