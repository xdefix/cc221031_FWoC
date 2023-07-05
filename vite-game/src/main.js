import {createApp} from "vue/dist/vue.esm-bundler";
import {createRouter, createWebHashHistory} from 'vue-router'

import gamePage from "./pages/game.vue"
import homePage from "./pages/homePage.vue"
import aboutUs from "./pages/aboutUs.vue"


// 1. Define route components.
// These can be imported from other files
// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
    { path: '/', component: homePage },
    { path: '/about', component: aboutUs },
    { path: '/game', component: gamePage},
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

// 5. Create and mount the root instance.
const app = createApp({})
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)

app.mount('#app')

// Now the app has started!
