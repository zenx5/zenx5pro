(async()=>{

const { createApp } = Vue;
const { createRouter, createWebHashHistory } = VueRouter;
const { createVuetify } = Vuetify;
const vuetify = createVuetify();

const routeHome = await Route.create('/', Home)

const router = createRouter({
    history: createWebHashHistory(),
    routes:[
        routeHome
    ]
})

createApp()
    .use(router)
    .use(vuetify)
    .mount('#app')

})()