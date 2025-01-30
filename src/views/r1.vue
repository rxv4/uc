<template>
  <div class="content">
    <Header/>
    <div class="warning">
      <p>⚠️ Les pages ont été imaginées pour être ouvertes sur ordinateur, leur comportement sur un autre appareil n'est pas garanti.</p>
    </div>
  </div>
</template>
  
<script>
import Header from "../components/Header.vue";

export default{
  components:{Header}
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

  .warning {
    margin-top: 140px;
    padding: 10px;
    border: 5px solid orange;
    color: orange;
    background-color: rgba(255, 165, 0, 0.1);
    border-radius: 10px;
    text-align: center;
    width: fit-content;
    max-width: 80%;
  }
</style>
  