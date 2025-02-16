<template>
    <div class="content">
        <Header/>
        <div class="bod">
            <p class="p1">Veuillez choisir votre ecole</p>
            <div class="image-container">
                <router-link to="/st-leon">
                    <div class="image-wrapper">
                        <img src="/public/imgs/st-leon.jpg" alt="Image 1">
                        <div class="overlay">
                            <p>Saint-Leon</p>
                        </div>
                    </div>
                </router-link>
                <router-link to="/maurice-leblanc">
                    <div class="image-wrapper">
                        <img src="/public/imgs/maurice-leblanc.png" alt="Image 2">
                        <div class="overlay">
                            <p>Maurice-Leblanc</p>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
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

.bod {
    margin-top: 0;
}

.content {
    margin: 0;
    padding: 0;
    height: 100vh;
    font-family: 'Helvetica', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--background-color-dark);
    color: rgb(147, 177, 166);
    position: relative;
    overflow: hidden;
}

.p1 {
    font-size: large;
    color: rgb(92, 131, 116);
    text-align: center;
}

.image-container {
    display: flex;
    justify-content: center;
    gap: 30px;
}

.image-wrapper {
    position: relative;
}

.image-container img {
    width: 100%;
    max-width: 350px;
    height: auto;
    object-fit: cover;
    border: 5px solid rgb(24, 61, 61);
    border-radius: 5px;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.85);
    color: rgb(147, 177, 166);
    font-size: xx-large;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 5px;
    border: 5px solid rgb(147, 177, 166);
}

.image-wrapper:hover .overlay {
    opacity: 1;
}
</style>
