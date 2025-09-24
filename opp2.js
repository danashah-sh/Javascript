// oppgave 1
const by = prompt("Hvilken by er Dana født i?");
if (by === "Kristiansand") {
    alert("Riktig! Dana er født i Kristiansand");
    document.getElementById("svar1").innerHTML = 'Du svarte rikdig'; 
} else {
    alert("Feil! Riktig svar er Kristiansand"); 
    document.getElementById("svar1").innerHTML = 'Du svarte feil'; 
}

// oppgave 2

function tusenLagos() { // Funksjonen kjører når knappen trykkes
    const userInput = document.getElementById("userInput").value; // Henter navnet fra input
    const div = document.querySelector(".printNavnetMitt"); // Finner div for å skrive ut
    let content = ""; // Starter med tom tekst
    for (let i = 0; i < 1000; i++) { // Løkke som kjører 1000 ganger
        content += userInput + " "; // Legger til navnet for hver runde
    }
    div.innerHTML = content; // Viser alt i div-en
}

// oppgave 3

const result = document.querySelector(".matteTing"); // Finner div
result.innerHTML = `
    15 % 2 = ${15 % 2} </br> <!-- Resten når 15 deles på 2 -->
    15 % 3 = ${15 % 3} </br> <!-- Resten når 15 deles på 3 -->
    10 % 3 = ${10 % 3} </br> <!-- Resten når 10 deles på 3 -->
    12 % 3 = ${12 % 3} </br> <!-- Resten når 12 deles på 3 -->
    16 % 2 = ${16 % 2}       <!-- Resten når 16 deles på 2 -->
`;

// oppgave 4

const gammelNok = prompt("Hvor gammel er du?"); // Spør brukerens alder
function sjekkAlder(gammelNok) { // Funksjon som sjekker alder
    if (gammelNok >= 18) { // Hvis alder er 18 eller mer
        alert("Du er gammel nok"); // Viser melding
        document.getElementById("svar4").innerHTML =  'Du er gamme nok';
    } else {
        alert("Du er ikke gammel nok"); // Ellers viser annen melding
        document.getElementById("svar4").innerHTML =  'Du er ikke gamme nok';
    }
}
sjekkAlder(gammelNok); // Kaller funksjonen med svaret fra prompt

// oppgave 5

const sum100 = (n) => (n * (n + 1)) / 2; // Formel for sum av tallene fra 1 til n
document.getElementById("resultat5").innerText = sum100(100); // Viser summen (5050)

// oppgave 6

let sum6 = 0; // Starter summen på 0
let numbers6 = ""; // Tom tekststreng for tallene

for (let i = 1; i < 100; i += 2) { // Teller opp alle oddetall under 100      
    sum6 += i; // Legger til oddetall i summen
    numbers6 += i + " "; // Legger tallene inn i tekst
}
document.getElementById("result6").innerHTML = `Tallene er ${numbers6} + <br>Summen er: ${sum6}`; // Skriver ut tall og sum

// oppgave 7

let sum7 = 0; // Starter summen på 0
for (let i = 0; i <= 100; i++) { // Teller fra 0 til 100
    if (i % 3 === 0) { // Sjekker om tallet er delelig med 3
        sum7 += i; // Legger til tallet i summen
    }
}
document.getElementById("result7").innerText = "Sum = " + sum7; // Viser summen