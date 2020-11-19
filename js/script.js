// un input permette all’utente di scrivere una “cosa da fare”;
// un bottone permette di aggiungere quella cosa alla lista di cose da fare in pagina, come promemoria;
// una volta che l’utente ha ipoteticamente svolto l’attività, grazie ad un bottone (X) può eliminare quella determinata cosa dalla lista.

var app = new Vue({
  el: "#app",
  data: {
    newTodoText: '',
    todos: ['Do the dishes', 'Take out the trash', 'Mow the lawn']
  },
  methods: { // aggiungere todo
    add: function () {
      this.todos.push(this.newTodoText);
    }, // rimuovere todo
    remove: function (index) {
    this.todos.splice(index, 1);
    }
  }

})