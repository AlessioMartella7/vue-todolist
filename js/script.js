/* Descrizione:
Rifare l'esercizio della to do list. Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
text, una stringa che indica il testo del todo
done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
Buon lavoro e buon divertimento! */

//creare un array di oggetti con due proprietà(todo,done)
// stampare il contenuto in pagina
// controllare se done è true o false e sbarriamo todo in caso positivo
// aggiungiamo un icona "x" accanto ogni elemento della nostra lista 
// creaiamo un metodo per rimuovere il todo dalla lista al clic dell'icona "x"
// creiamo un campo di imput per aggiungere un nuovo "todo" alla listra
    //creare un bottone per l'inserimento
    //abilitare l'invio anche con tasto enter
// creo un metodo che al click sull " todo " inverte lo stato del done da false a true e viceversa

const { createApp } = Vue

  createApp({
    data() {
      return {

        toDoList:[
            {
                todo: 'Clean your room',
                done: false,
            },
            {
                todo: 'Make grossery',
                done: false,
            },
            {
                todo: 'Do Laundry',
                done: false,
            },
            {
                todo: 'Wash the car',
                done: false,
            },
            {
                todo: 'Prepare pizza for tonight',
                done: false,
            },
            {
                todo: 'Take grandpa to Waalgreens',
                done: false,
            },
            {
                todo: 'Kill Bill',
                done: false,
            },

        ],
      }
    }
  }).mount('#app')