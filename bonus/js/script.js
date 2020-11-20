// dò la possibilità anche di inserire la nuova “cosa da fare”, scritta nell’input anche con la pressione del tasto ‘enter’ da tastiera;
// l’utente non può inserire più volte la stessa “cosa da fare”;
// etc. etc… quello che vi intriga di più da provare.

var app = new Vue({
  el: "#app",
  data: {
    newTodoText: '',
    todos: ['Do the dishes', 'Take out the trash', 'Mow the lawn'],
    hasError: false,
  },
  methods: {
    add: function () {
      if (!this.newTodoText  || this.todos.includes(this.newTodoText)) { // controllo 
        this.hasError = true;
        return;
      }

      this.hasError = false;


      this.todos.push(this.newTodoText); // aggiungere todo
      this.newTodoText = '';



    },
    remove: function (index) {
      this.todos.splice(index, 1); // rimuovere todo
    }

  }

})