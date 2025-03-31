<template>
    <header class="header">
        <router-link to="/" class="btn">rxv4</router-link>
        <router-link to="/info" class="info-btn">i</router-link>
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
    z-index: 10;
    border-bottom: 2px solid #339989;
    background-color: var(--background-color-header-darktheme);
    top:0;
    width: 100%;
    text-align: center;
}

.btn {
    font-weight: bold;
    font-size: xx-large;
    display: inline-block;
    margin: 20px;
    color: var(--font-color-darktheme);
    text-decoration: none;
    transition: transform 1s  ease;
}

.btn:hover{
    transform: scale(1.05);
}

.info-btn {
    position: absolute;
    right: 30px;
    top: 50%;
    transform: translateY(-50%);
    font-weight: 800;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--font-color-darktheme);
    text-decoration: none;
    border: 3px solid var(--font-color-darktheme);
    border-radius: 50%;
    width: 34px;
    height: 34px;
    transition: all 0.3s ease;
}

.info-btn:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: var(--border-color-light-darktheme);
    border-color: var(--border-color-light-darktheme);
    transform: translateY(-50%) scale(1.1);
}
</style>