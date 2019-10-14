<template>
<div class="inputBox shadow">
  <input type="text" v-model="newTodoItem" :placeholder="[[inputMessage]]" v-on:keyup.enter="addTodo">
  <span class="addContainer" v-on:click="addTodo">
      <i class="addBtn fa fa-plus" aria-hidden="true"></i>
  </span>
</div>
</template>

<script>
export default {
data(){
    return{
        newTodoItem:'',
        inputMessage:'please typing what you have to do'
    }
},
methods:{
    addTodo(){
       if(this.newTodoItem !== "")
       {
     var value = this.newTodoItem && this.newTodoItem.trim();
     this.$emit('addTodo',value);
     //value 값을 인자 값으로 전달한다.
     this.clearInput();
       }
   },
   clearInput() {
       this.newTodoItem="";
   }
},
created(){
    this.$EventBus.$on('clickFromHeader', () => {
        if(this.inputMessage == "please typing what you have to do")
        this.inputMessage = "해야 할 일을 작성해 주세요";
        else this.inputMessage = "please typing what you have to do";
    })
}

}
</script>

<style scoped>
input:focus {
    outline: none;
}
.inputBox {
    background:white;
    height: 50px;
    line-height: 50px;
    border-radius: 5pxl
}
.inputBox input {
    border-style:none;
    font-size: 0.9rem;
}
.addContainer {
    float:right;
    background: linear-gradient(to right,#6478FB,#8763FB);
    display:block;
    width:3rem;
    border-radius: 0 5px 5px 0;
}
.addBtn {
    color:white;
    vertical-align: middle;
}

</style>