<template>
    <div class="content">
        <Header/>
        <div class="bod">
            <p class="p1">Veuillez choisir votre école</p>
            <div class="image-container">
                <router-link to="/maurice-leblanc">
                    <div class="image-wrapper">
                        <div class="image-border">
                            <img src="/public/imgs/maurice-leblanc.png" alt="Image 2">
                            <div class="overlay">
                                <p>Maurice Leblanc</p>
                            </div>
                        </div>
                    </div>
                </router-link>
                <router-link to="/louis-blanc">
                    <div class="image-wrapper">
                        <div class="image-border">
                            <img src="/public/imgs/louis-blanc.png" alt="Image 2">
                            <div class="overlay">
                                <p>Louis Blanc</p>
                            </div>
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
    background-color: var(--background-color-darktheme);
    color: var(--font-color-darktheme);
    position: relative;
    overflow: hidden;
}

.p1 {
    font-size: large;
    color: var(--font-color-darktheme);
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

.image-border {
    position: relative;
    border: 5px solid var(--border-color-light-darktheme);
    border-radius: 5px;
    overflow: hidden;
}

.image-container img {
    width: 100%;
    max-width: 350px;
    height: auto;
    object-fit: cover;
    display: block;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.85);
    color: var(--font-color-darktheme);
    font-size: xx-large;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.image-wrapper:hover .overlay {
    opacity: 1;
}
</style>