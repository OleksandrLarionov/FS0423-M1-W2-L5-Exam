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

for(let i = 0; i <= charactersArray.length; i++){
  

switch (charactersArray[i]) {
  case 'a' :
     newArray.push(0)
  break

  case 'b' :
     newArray.push(1)
  break

  case 'c' :
     newArray.push(2)
  break
  
  case 'd' :
     newArray.push(3)
  break

  case 'e' :
     newArray.push(4)
  break
  
  case 'f' :
    newArray.push(5)
 break

 case 'g' :
    newArray.push(6)
 break

 case 'h' :
    newArray.push(7)
 break
 
 case 'i' :
    newArray.push(8)
 break

 case 'j' :
    newArray.push(9)
 break
 
 case 'k' :
  newArray.push(10)
break

case 'l' :
  newArray.push(11)
break

case 'm' :
  newArray.push(12)
break

case 'n' :
  newArray.push(13)
break

case 'o' :
  newArray.push(14)
break

case 'p' :
  newArray.push(15)
break

case 'q' :
  newArray.push(16)
break

case 'r' :
  newArray.push(17)
break

case 's' :
  newArray.push(18)
break

case 't' :
  newArray.push(19)
break

case 'u' :
  newArray.push(20)
break

case 'v' :
  newArray.push(21)
break

case 'w' :
  newArray.push(22)
break

case 'x' :
  newArray.push(23)
break

case 'y' :
  newArray.push(24)
break

case 'z' :
  newArray.push(25)
break




  default:
    
    break;
}
}
console.log(newArray);
