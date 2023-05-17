import { createInterface } from "readline";

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const readLineAsync = () => {
  return new Promise((resolve) => {   
    readline.question("", (userRes) => {
      resolve(userRes);
    });
  });
};


console.log("Wählen Sie die Gewünschte Funktion aus: ");
const selection = [1 + '. Einzahlen', 2 + '. Abheben', 3 + '. Kontostand', 4 +'. Ende'];

    for (let i = 0; i < selection.length; i++) {
    console.log(selection[i]);
    }
    let input = await readLineAsync();

    switch (input) {
        case selection[0]:
            console.log("Geben Sie einen Betrag ein den Sie Einzahlen wollen:");
            let betrag1 = await readLineAsync();
            console.log("Sie haben " + betrag1 + " eingezahlt.");

        case selection[1]:
            console.log("Geben Sie einen Betrag ein den Sie Abheben wollen:");
            let betrag2 = await readLineAsync();
            console.log("Sie haben " + betrag2 + " abgehoben.");
    }

readline.close();