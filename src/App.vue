<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodo="addTodo"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" v-on:removeItem="removeItemOnVue"></TodoList>
    <TodoFooter v-on:allClear="allClear"></TodoFooter>
  </div>
</template>

<script>


import TodoHeader from './components/TodoHeader.vue'
import TodoFooter from './components/TodoFooter.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'

export default {
  data(){
    return {
      todoItems: []
    }
  },
  created() {
        if (localStorage.length != 0) {
            for(var i=0;i<localStorage.length; i++)
                this.todoItems.push(localStorage.key(i));
                console.log(this.todoItems)
        }

    },
  methods: {
    addTodo(todoItem){
      localStorage.setItem(todoItem,todoItem);
      this.todoItems.push(todoItem);
    },
    allClear(){
      localStorage.clear();
      this.todoItems=[];
    },
    removeItemOnVue(Item,index){
       localStorage.removeItem(Item);
            this.todoItems.splice(index,1);
            //배열 요소 삭제하기 splice
            //배열 요소 추가는 siplice(index,0,1); 이런식
    }
  },

  components : {
    'TodoHeader' : TodoHeader,
    'TodoList' : TodoList,
    'TodoInput' : TodoInput,
    'TodoFooter' : TodoFooter
  }
}


</script>

<style>
  body{
    text-align: center;
    background-color:#F6F6F8;
  }
  input{
    border-style: groove;
    width:200px;
  }
  button{
    border-style:groove;
    text-align: center;
  }
  .shadow {
    box-shadow: 5tpx 10px 10px rgba(0,0,0,0.3)
  }

</style>