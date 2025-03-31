<template>
    <div class="content">
        <Header/>
        <h1>ERREUR 404. Aucune page pour ce chemin. ⛔</h1>
    </div>
</template>

<script>
import Header from "../components/Header.vue";

export default {
    name: 'HomePage',
    components: { Header }
};
</script>

<style scoped>

    .content {
        background-color: var(--background-color-darktheme);
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    h1 {
        font-size: 5rem;
        text-align: center;
        color: rgb(212, 0, 0);
    }
</style>
