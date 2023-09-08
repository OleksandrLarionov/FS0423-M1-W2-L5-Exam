/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']


console.log('Elementi dell\'array :' ,pets);

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
pets.sort()  // ora è in ordine alfabetico

console.log('Elementi in ordine alfabetico' ,pets);



/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
pets.reverse()  // in ordine alfabetico ma invertiti

console.log('ordine alfabetico invertito' ,pets)



/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

const firstElement = pets.shift()
  pets.push(firstElement)
  console.log('Sposto il primo elemento all\'ultimo  posto : ' ,pets)

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]


for(let i = 0; i < cars.length; i++) {
 cars[i].licensePlate = ''
}
cars[0].licensePlate = 'DA456NN'
cars[1].licensePlate = 'GG345KK'
cars[2].licensePlate = 'FF467KK'
console.log('Array di macchine con le taghe' ,cars);
/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
let brand = {
            brand: 'Golf',
            model: '',
            color: '',
            trims: [],

}
cars.push(brand)

console.log(' Con aggiunta di una nuova macchina' ,cars);

for(let i = 0; i < cars.length; i++){
  cars[i].trims.pop()
  
  // console.log(cars);
}


console.log('Senza ultimo elemento in trims : ' ,cars)



/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []
for(let i = 0; i < cars.length; i++){
  let primoElemento = cars[i].trims.shift()
  justTrims.push(primoElemento)
}
console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for(let i = 0; i < cars.length; i++){
let col = cars[i].color.slice(0, 1)
if (col === 'b') {
  console.log('Inizia con la b : ' ,'Frizz');
} else {
  console.log( 'Appartiene a un altra lettera' ,'buzz');
}

}



/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

while (numericArray.length < 32){
  numericArray.length ++
  
  console.log(numericArray) // eseguito 14 volte
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']
let newArray = []

for(let i = 0; i <= cars.length; i++){
let numero;
switch (charactersArray[i]) {
  case 'g' :
    numero = newArray.push(i)
  break

  case 'n' :
    numero = newArray.push(i)
  break

  case 'u' :
    numero = newArray.push(i)
  break
  
  case 'z' :
    numero = newArray.push(i)
  break

  case 'd' :
    numero = newArray.push(i)
  break


  default:
    
    break;
}
}
console.log(newArray);
