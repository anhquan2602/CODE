import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)

// front awe some






// Tạo App
const app = createApp(App);

// Nhúng router
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon)
library.add(fas)
// 

// mount app
app.mount('#app')

