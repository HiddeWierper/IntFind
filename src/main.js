import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Zorg dat je de router correct importeert
import './input.css'; // Importeer Tailwind CSS of je globale stijlen

// Maak de Vue-app aan
const app = createApp(App);

// Voeg de router toe
app.use(router);

// Mount de app
app.mount('#app');

