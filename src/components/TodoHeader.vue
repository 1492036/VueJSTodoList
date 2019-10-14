<template>
   <header>
    <h1>{{title}}</h1>
    <div v-if="drawer">{{todayTime}}</div>
    <div v-else></div>
    <div><button v-on:click="$EventBus.$emit('clickFromHeader')">{{country}}</button></div>
   </header>
</template>

<script>
export default {
   data() {
      return {
         title : "TODO List",
         drawer: true,
         todayTime: "",
         country:"EN"
      };
   },
   created() {
      this.$EventBus.$on('click-icon', () => {
         this.drawer = !this.drawer;
         this.todayTime = this.$moment(new Date()).format('YYYY-MM-DD');
      }),
      this.$EventBus.$on('clickFromHeader', () => {
            if(this.country == "KOR")
            this.title = "할 일 목록"
            else 
            this.title = "TODO List"
            if(this.country == "KOR")
            this.country = "EN"
            else this.country = "KOR"
        })
   }

}
</script>

<style>
   h1 {
      color: rgb(22, 22, 29);
      font-weight: 900;
      margin:2.5rem 0 1.5rem;
   }
 

</style>