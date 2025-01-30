<template>
    <header class="header">
        <h1>/rxv4/</h1>
    </header>
</template>

<script>
export default {
    name: 'Header',
};
</script>

<style>
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

header h1{
    margin:20px;
}
</style>