<template>
    <div class="content">
        <Header/>
        <div class="info-container">
            <h1>À propos du site</h1>
            <div class="text-content">
                <div class="paragraph-container">
                    <div class="bullet"></div>
                    <p>Ce site permet aux élèves de consulter leur travail réalisé en classe et de découvrir les réalisations des autres élèves. Il s'inscrit dans le cadre d'une séance HTML/CSS.</p>
                </div>
                
                <div class="paragraph-container">
                    <div class="bullet"></div>
                    <p>Aucune information personnelle n'est exposée sur ce site afin de garantir la confidentialité de chacun.</p>
                </div>
                
                <div class="paragraph-container">
                    <div class="bullet"></div>
                    <p>Pour toute question ou demande, vous pouvez me contacter à l'adresse suivante : <a href="mailto:jules.norget@gmail.com">jules.norget@gmail.com</a></p>
                </div>
                
                <div class="paragraph-container">
                    <div class="bullet"></div>
                    <p>Le dépôt GitHub du projet est disponible ici : <a href="https://github.com/rxv4/uc">GitHub</a></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "../components/Header.vue";

export default {
    name: 'InfoPage',
    components: { Header }
};
</script>

<style scoped>
.content {
    height: 100vh;
    width: 100%;
    background-color: var(--background-color-darktheme);
    color: var(--font-color-darktheme);
    font-family: 'Helvetica', sans-serif;
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    position: relative;
}

.info-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    max-width: 800px;
}

h1 {
    font-size: 2.5rem;
    color: var(--border-color-light-darktheme);
    margin-bottom: 80px;
    margin-top: 100px;
    text-align: left;
}

.text-content {
    text-align: left;
}

.paragraph-container {
    display: flex;
    margin-bottom: 40px;
    align-items: flex-start;
}

.bullet {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--border-color-light-darktheme);
    margin-right: 15px;
    margin-top: 8px;
}

p {
    font-size: 1.2rem;
    line-height: 1.3;
    margin: 0;
    text-align: left;
    flex: 1;
}

a {
    color: var(--border-color-light-darktheme);
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}
</style>