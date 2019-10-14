<template>
    <section>
        <ul>
           <li v-for="(item,index) in propsdata" :key="item.id">
               <i class="checkBtn fa fa-check" aria-hidden="true"></i>
               {{item}}
                <span class="removeBtn" type="button" v-on:click="removeItem(item,index)">
                    <i class="fa fa-trash-o" aria-hidden="true"></i>
                </span>
           </li>
        
        </ul>

    </section>
</template>


<script>
export default {
    props:['propsdata'],
    methods: {
        removeItem(Item,index){
            this.$emit("removeItem",Item,index);
        }
    }
    
}
</script>

<style>
 ul {
        list-style-type: none;
        padding-left: 0px;
        margin-top: 0;
        text-align: left;
        }
    li {
        display: flex;
        min-height: 50px;
        height: 50px;
        line-height: 50px;
        margin: 0.5rem 0;
        padding: 0 0.9rem;
        background: white;
        border-radius: 5px;
    }
    .checkBtn {
        line-height: 45px;
        color: #62acde;
        margin-right: 5px;
    }
    .removeBtn {
        color: #e20303;
        margin-left: auto;
    }
</style>