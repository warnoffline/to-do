<template>
    <div>
        <header>
            <p>Create To-do</p>
        </header>
        <main>
            <nav-bar></nav-bar>
            <div class="create">
                <div class="inpCreate">
                    <input v-model="newTodo.text" type="text" maxlength="40" placeholder="Enter a new todo" />
                    <button @click="addTodo(id++)">Add</button>
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
            newTodo: {
                text: '',
                isComplete: false,
                id: 0
            }
        }
    },
    methods:{
        addTodo() {
            if(this.newTodo.text != ''){
                let todos = JSON.parse(localStorage.getItem('todos') || '[]');
                todos.push(this.newTodo);
                localStorage.setItem('todos', JSON.stringify(todos));
                this.newTodo.text = '';
            }    
        }
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
.create{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .inpCreate{
        background-color: rgba(167, 209, 210, 1);
        width: 50%;
        min-height: 40vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        button{
            margin-top: 3%;
            padding: 1.5% 5%;
            border: 0px;
            border-radius: 20px;
            background-color: rgba(3, 53, 64, 1);
            box-shadow: 5px 5px 15px rgba(3, 53, 64, 1);
            color: rgba(224, 244, 245, 1);
            font-size: 20px;
            font-weight: bold;
            font-family: 'FregatRegular';
        }
        button:hover{
            background-color: rgba(224, 244, 245, 1);
            color: rgba(3, 53, 64, 1);
        }
        input{
            width: 70%;
            min-height: 4vh;
            font-size: 20px;
            font-weight: bold;
            color: rgba(3, 53, 64, 1);
            border: 0;
            padding: 0px 1%;
            font-family: 'FregatRegular';
        }
        input:focus{
            outline: none;
            box-shadow: 5px 5px 15px rgba(3, 53, 64, 1);
        }
    }
    
}
@media screen and (max-width: 1100px) and (min-width: 800px) {
    .create{
        width: 100%;
        margin-top: 20px;
        .inpCreate{
            width: 90%;
            button{
                padding: 2% 6%;
            }
        }
    }
}
@media screen and (max-width: 799px) and (min-width: 500px){
    .create{
        margin-top: 20px;
        .inpCreate{
            width: 90%;
            button{
                padding: 3% 7%;
            }
            input{
                width: 80%;
            }
        }
    }
}
@media screen and (max-width: 499px) and (min-width: 250px){
    .create{
        margin-top: 20px;
        .inpCreate{
            width: 100%;
            button{
                padding: 3% 7%;
            }
            input{
                width: 90%;
                height: 6vh;
            }
        }
    }
}
</style>