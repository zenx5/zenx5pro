(async()=>{

const { createApp } = Vue;
const { createRouter, createWebHashHistory } = VueRouter;
const { createVuetify } = Vuetify;
const vuetify = createVuetify();

const routeHome = await Route.create('/', Home)
const routeCurso = await Route.create('/curso/maquetacion', CursoMaquetacion)

const router = createRouter({
    history: createWebHashHistory(),
    routes:[
        routeHome,
        routeCurso
    ]
})

createApp()
    .use(router)
    .use(vuetify)
    .mount('#app')

})()