<template>
    <div class="content">
      <Header />
      <Warning />
      <div class="list-container">
        <ul class="list">
          <li
            v-for="item in items"
            :key="item.title"
            @click="navigateTo(item.title)"
            class="list-item"
          >
            <span class="title">{{ item.title }}</span>
            <span class="date">{{ item.date }}</span>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import Header from "../components/Header.vue";
  import Warning from "../components/Warning.vue";
  import { useRouter } from "vue-router";
  
  export default {
    components: { Header, Warning },
    setup() {
      const router = useRouter();
  
      const items = [
        { title: "A", date: "27-05-2025" },
        { title: "AetG", date: "27-05-2025" },
        { title: "apprendreSurLesAnimaux", date: "27-05-2025" },
        { title: "EetM", date: "27-05-2025" },
        { title: "EetSetM", date: "27-05-2025" },
        { title: "equipeVictoire", date: "27-05-2025" },
        { title: "GetN", date: "27-05-2025" },
        { title: "JetN", date: "27-05-2025" },
        { title: "KetC", date: "25-03-2025" },
        { title: "leChienEtLeChat", date: "25-03-2025" },
        { title: "les2gamers", date: "27-05-2025" },
        { title: "lesSoveurDesAnimaux", date: "27-05-2025" },
        { title: "loust", date: "27-05-2025" },
        { title: "MetT", date: "27-05-2025" },
        { title: "onL'appelleLaPlaneteBleue", date: "27-05-2025" },
        { title: "poissonSteve", date: "27-05-2025" },
        { title: "realMadrid", date: "27-05-2025" },
        { title: "RetI", date: "27-05-2025" },
        { title: "ZetL", date: "27-05-2025" }
      ];
  
      const navigateTo = (title) => { // push sur la route correspondante au titre
        const formattedTitle = title.toLowerCase().replace(/\s+/g, "-");
        router.push(`/louis-blanc/${formattedTitle}`);
      };
  
      return { items, navigateTo };
    }
  };
  </script>
  
  <style scoped>
  .content {
    background-color: var(--background-color-darktheme);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    height: 100vh;
    font-family: 'Helvetica', sans-serif;
    color: var(--font-color-darktheme);
  }
  
  .list-container {
    width: 100%;
    max-width: 50rem;
    height: 54vh;
    overflow-y: auto;
    margin-top: 50px;
    padding: 10px;
    border: 3px solid var(--border-color-light-darktheme);
    border-radius: 10px;
    background: var(--background-color-darktheme);
  }
  
  /* scrollbar */
  .list-container::-webkit-scrollbar {
    width: 12px;
  }
  
  .list-container::-webkit-scrollbar-track {
    background: var(--background-color-darktheme);
    border-radius: 10px;
  }
  
  .list-container::-webkit-scrollbar-thumb {
    background: rgb(188, 205, 207);
    border-radius: 10px;
    border: 2px solid var(--background-color-darktheme);
  }
  
  .list-container::-webkit-scrollbar-thumb:hover {
    background: #7DE2D1;
  }
  
  .list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .list-item {
    display: flex;
    justify-content: space-between;
    padding: 15px;
    margin-bottom: 10px;
    background: var(--background-color-dark);
    border: 2px solid var(--border-color-dark);
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  }
  
  .list-item:hover {
    background: var(--background-color-hover-darktheme);
    color: white;
  }
  
  .title {
    font-weight: bold;
    font-size:large;
  }
  
  .date {
    color: gray;
    font-style: italic;
  }
  </style>
  