let randomNumber = Math.random() * 5 + 5;
let random = Math.floor(randomNumber);

console.log(random);


switch (random === 10) {
    case 1:
        console.log("Ten");
    
    case 2:
        if (random === 9) {
            console.log('Nine');
        }
    
    case 3:
        if (random === 8) {
            console.log('Eight');
        }
    
    case 4:
        if (random === 7) {
            console.log('Seven');
        }
    
    case 5:
        if (random === 6) {
            console.log('Six');
        }

    case 6:
        if (random === 5) {
            console.log('Five');
        }
}