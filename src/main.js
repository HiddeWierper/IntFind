import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Zorg dat je de router correct importeert
import './input.css'; // Importeer Tailwind CSS of je globale stijlen
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

// Maak de Vue-app aan
const app = createApp(App);

// Voeg de router toe
app.use(router);

// Mount de app
app.use(VueSweetalert2);
app.mount('#app');

