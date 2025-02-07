<template>
  <div class="content">
    <Header/>
    <Warning/>
  </div>
</template>
  
<script>
import Header from "../components/Header.vue";
import Warning from "../components/Warning.vue"

export default{
  components:{Header,Warning}
};
</script>

<style>
  .content {
    background-color: rgb(4, 13, 18);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    height: 100vh;
  }

</style>
  