const Cursos = new Component('/src/components/curso/curso.html',{
    data() {
        return {
            sessions: [
                {
                    id:1,
                    title:"Curso de Maquetacion Web",
                    nivelTag: "principiante",
                    nivel: 1,
                    description: "Curso introductorio e intensivo a la maquetacion web basado en tailwindcss",
                    github:"https://github.com/zenx5/academia-kavav/tree/curso/maquetacion-level-1",
                    link: "#/curso/maquetacion",
                    date: '11/3/2023'
                },
                {
                    id:2,
                    title:"¿Qué es HTML y CSS?",
                    nivel: 0,
                    github:"https://github.com/zenx5/academia-kavav/tree/curso/maquetacion-level-1/clase-2",
                    video: null,
                    date: '11/10/2023'
                },
            ]

        }
    },
    created: async function(){

    },
    computed:{
        availableSessions() {
            return this.sessions.filter( session => {
                const sessionDate = Date.parse( session.date )
                const now = Date.now()
                return sessionDate < now
            })
        }
    },
    methods:{

    }
})