<template>
    <div class="clearAllContainer">
        <div id = "first">
            <span class="clearAllBtn" v-on:click="allClear">{{ClickButton}}</span>
        </div>
        <div id = "second">
            <button v-on:click="$EventBus.$emit('click-icon')">오늘 날짜</button>
        </div>
    </div>
</template>

<script>

export default {
  data(){
    return{
        ClickButton:'Clear All'
        }
    },
    methods:{
        allClear(){
            this.$emit("allClear");
        }
    },
    created(){
        this.$EventBus.$on('clickFromHeader', () => {
            if(this. ClickButton == "Clear All")
            this.ClickButton = "전체 삭제";
            else this.ClickButton = "Clear All";
        })
        
    }
}
</script>

<style scope>
   
    .clearAllContainer {
        width: 8.5rem;
        height: 50px;
        line-height: 50px;
        background-color: white;
        border-radius: 5px;
        margin: 0 auto;
        width: 400px;
    }
    .clearAllBtn{
        color: #e20303;
        display:black;
        
    }
 
</style>
