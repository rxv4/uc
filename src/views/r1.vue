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
        { title: "test1", date: "2025-02-15" }
      ];
  
      const navigateTo = (title) => { // push sur la route correspondante au titre
        const formattedTitle = title.toLowerCase().replace(/\s+/g, "-");
        router.push(`/r/${formattedTitle}`);
      };
  
      return { items, navigateTo };
    }
  };
  </script>
  
  <style scoped>
  .content {
    background-color: var(--background-color-dark);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    height: 100vh;
    font-family: 'Helvetica', sans-serif;
    color: var(--font-color-dark);
  }
  
  .list-container {
    width: 100%;
    max-width: 50rem;
    height: 54vh;
    overflow-y: auto;
    margin-top: 50px;
    padding: 10px;
    border: 3px solid rgb(64, 204, 255);
    border-radius: 10px;
    background: var(--background-color-light);
  }
  
  /* scrollbar */
  .list-container::-webkit-scrollbar {
    width: 12px;
  }
  
  .list-container::-webkit-scrollbar-track {
    background: var(--background-color-dark);
    border-radius: 10px;
  }
  
  .list-container::-webkit-scrollbar-thumb {
    background: rgb(188, 205, 207);
    border-radius: 10px;
    border: 2px solid var(--background-color-dark);
  }
  
  .list-container::-webkit-scrollbar-thumb:hover {
    background: rgb(32, 170, 230);
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
    background: var(--background-color-hover-dark);
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
  