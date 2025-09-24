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
    }
}
sjekkAlder(gammelNok); // Kaller funksjonen med svaret fra prompt