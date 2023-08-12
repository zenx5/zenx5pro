(async()=>{

const { createApp } = Vue;
const { createRouter, createWebHashHistory } = VueRouter;
const { createVuetify } = Vuetify;
const vuetify = createVuetify();

const routeHome = await Route.create('/', Home)
const routeCode = await Route.create('/code', Code)

const router = createRouter({
    history: createWebHashHistory(),
    routes:[
        routeHome,
        routeCode
    ]
})

createApp()
    .use(router)
    .use(vuetify)
    .mount('#app')

})()