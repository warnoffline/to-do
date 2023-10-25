<template>
    <div>
        <header>
            <p>My To-do list</p>
        </header>
        <main>
            <nav-bar></nav-bar>
            <div class="list" v-for="(todo, index) in todos" :key="index">
                <div class="task">
                    <div class="text">
                        <span :class="{todo_isShow: todo.isComplete}">{{ todo.text }}</span>
                    </div>
                    <div class="buttons">
                        <button @click="toggleComplete(index)"><img src="../assets/3.png" alt="complete"></button>
                        <button @click="deleteTodo(index)"><img src="../assets/4.png" alt="delete"></button>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>
<script>
import navBar from '@/components/navBar.vue'
export default{
    components:{
        navBar
    },
    data(){
        return{
            todos: [],
        }
    },
    created() {
        this.todos = JSON.parse(localStorage.getItem('todos') || '[]');
    },
    methods:{
        deleteTodo(index){
            this.todos.splice(index, 1);
            localStorage.setItem('todos', JSON.stringify(this.todos))
        },
        toggleComplete(index) {
            this.todos[index].isComplete = !this.todos[index].isComplete;
        },
    }
}
</script>
<style lang="scss" scoped>
header{
    background-color: rgba(224, 244, 245, 1);
    width: 100%;
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    p{
        color: rgba(3, 53, 64, 1);
        font-family: 'FregatRegular';
        font-size: 30px;
        font-weight: bold;
    }
}
main{
    background-color: rgba(99, 137, 140, 1);
    min-height: 95vh;
    max-height: 100%;
}
.todo_isShow{
    text-decoration: line-through;
}
.list{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    .task{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 1%;
        background-color: rgba(167, 209, 210, 1);
        width: 75%;
        border-radius: 20px;
        margin-bottom: 10px;
        .text{
            font-size: 20px;
            font-family: 'FregatRegular';
            font-weight: bold;
            word-wrap: break-word;
            width: 50%;
        }
        .buttons{
            display: flex;
            justify-content: space-around;
            width: 20%;
            height: 100%;
            button{
                border: 0px;
                background: none;
                width: 70%;
                padding: 10px;
            }
            button:hover{
                background-color: rgba(224, 244, 245, 1);
            }
        }
    }
}
@media screen and (max-width: 1100px) and (min-width: 800px) {
    .list{
        margin-top: 20px;
        .task{
            width: 90%;
        }
    } 
}
@media screen and (max-width: 799px) and (min-width: 500px){
    .list{
        margin-top: 20px;
        .task{
            width: 95%;
            .text{
                @media screen and (max-width: 600px) and (min-width: 500px) {
                    font-size: 15px;
                }
            }
            .buttons{
                width: 30%;
            }
        }
    } 
}
@media screen and (max-width: 499px) and (min-width: 250px){
    .list{
        margin-top: 20px;
        .task{
            width: 95%;
            margin-bottom: 0px;
            .text{
                font-size: 20px;
            }
            .buttons{
                width: 50%;
                button{
                    width: 50%;
                    img{
                        width: 50%;
                    }
                }
                button:hover{
                    background-color: none;
                    border-radius: 20px;
                }
            }
        }
    } 
}
</style>