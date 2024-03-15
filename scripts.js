var todos =[
    {
        text: 'Aprender HTML, CSS e Javascript',
        done: true
    },
    {
        text: 'Aprender o básico de Vue JS',
        done: false
    },
    {
        text: 'Completar o desafio de Vue JS com excelência',
        done: false
    }
];

const todosApp = {
    data(){
        return{
            todos: window.todos,
            newTodo: {
                done: false
            }
        }
    },
    methods: {
        addTodo: function(){
            if(this.todos.text){
                this.todos.push(this.newTodo);
                this.newTodo = {
                done: false
                };
            }else{
                alert("Todo text is required")
            }          
        }
    }
};

Vue.createApp(todosApp).mount('#app');