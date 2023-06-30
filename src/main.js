import { createApp, reactive } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import 'nprogress/nprogress.css';

const app = createApp(App);
// create a reactive object
const GStore = reactive({ flashMessage: '' });

app.use(createPinia());
app.use(router);
app.provide('GStore', GStore); // prove this object so others can inject it

app.mount('#app');
