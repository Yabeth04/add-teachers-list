import { createApp } from 'vue';
import App from './App.vue';
import router from '../router'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Notifications from '@kyvg/vue3-notification';
import { plugin, defaultConfig } from '@formkit/vue';

const app = createApp(App);

app.use(router);
app.use(Notifications);
app.use(plugin, defaultConfig);

app.mount('#app');
