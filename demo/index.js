import {createApp } from 'vue';

import VueTreeSelect from '../dist/treeselect.common';
import '../dist/treeselect.css';


import App from './demo-app.vue';

createApp(App)
    .component('vue-treeselect',VueTreeSelect)
    .mount('#app');