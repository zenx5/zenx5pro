const CursoMaquetacion = new Component('/src/components/curso-maquetacion/curso-maquetacion.html',{
    data() {
        return {
            sessions: [
                {
                    id:1,
                    title:"Introducción a la Programación e Instalación del Ambiente",
                    github:"https://github.com/zenx5/academia-kavav/tree/curso/maquetacion-level-1/clase-2",
                    video: null,
                    date: '11/3/2023'
                },
                {
                    id:2,
                    title:"¿Qué es HTML y CSS?",
                    github:"https://github.com/zenx5/academia-kavav/tree/curso/maquetacion-level-1/clase-2",
                    video: null,
                    date: '11/10/2023'
                },
            ]

        }
    },
    created: async function(){
        const response = await fetch(`https://api.github.com/users/zenx5`, { cache:"force-cache" })

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