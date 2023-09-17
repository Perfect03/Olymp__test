import '@/assets/base.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from '@/store';
import components from '@/components/UI';
import { i18n } from '@/i18n/config';

import { useI18n } from 'vue-i18n';

const app = createApp(App, {
  setup() {
    const { t } = useI18n();
    return { t };
  },
});

components.forEach((component) => {
  app.component(component.name, component);
});

app.use(router).use(store).use(i18n).mount('#app');

components.forEach((component) => {
  app.component(component.name, component);
});
