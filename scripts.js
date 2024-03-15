var tarefas =[
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
            todos: window.tarefas
        }
    }
};

Vue.createApp(todosApp).mount('#app');