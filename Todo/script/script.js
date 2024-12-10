new Vue({
  el: '#app',
  data() {
    return {
      todos:[],
      text:''

    };
  },
  methods: {
    inputText(e){
      this.text=e.target.value;
    },
    //inputTextメソッドを追加
    addTodo(){
      if(!this.text)return;
      const text =this.text;
      const id =Math.ceil(Math.random()*1000);
      const todo ={
        id, text, isDone : false
      };
      this.todos.push(todo);
      this.resetText();
    },
    //addTodoメソッドを追加
    resetText(){
      this.text ='';
    }
    //resetTextメソッドを追加
    
  }
});