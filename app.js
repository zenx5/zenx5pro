(async()=>{

const { createApp } = Vue;
const { createRouter, createWebHashHistory } = VueRouter;
const { createVuetify } = Vuetify;
const vuetify = createVuetify();

const routeHome = await Route.create('/', Home)
const routeCursoMaq = await Route.create('/curso/maquetacion', CursoMaquetacion)
const routeCurso = await Route.create('/cursos', Cursos)

const router = createRouter({
    history: createWebHashHistory(),
    routes:[
        routeHome,
        routeCursoMaq,
        routeCurso
    ]
})

createApp()
    .use(router)
    .use(vuetify)
    .mount('#app')

})()