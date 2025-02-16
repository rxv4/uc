<template>
    <header class="header">
        <router-link to="/" class="btn">rxv4</router-link>
    </header>
</template>

<script>
export default {
    name: 'Header',
};
</script>

<style scoped>

.header {
    position: absolute;
    width: 100%;
    text-align: center;
    color: beige;
    z-index: 10;
    border-bottom: 2px solid rgb(0, 0, 0);
    background-color: rgb(2, 7, 9);
    top:0;
    width: 100%;
    text-align: center;
}

.btn {
    font-weight: bold;
    font-size: xx-large;
    display: inline-block;
    margin: 20px;
    color: beige;
    text-decoration: none;
    transition: transform 1s  ease;
}

.btn:hover{
    transform: scale(1.05);
}
</style>