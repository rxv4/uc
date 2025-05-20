import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import "./assets/global.css";

const app = createApp(App);

//goatcounter
router.afterEach(() => {
  if (window.goatcounter && typeof window.goatcounter.count === 'function') {
    window.goatcounter.count({
      path: location.pathname + location.search + location.hash,
    });
  }
});

app.use(router).mount('#app');
