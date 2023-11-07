const CursoMaquetacion = new Component('/src/components/curso-maquetacion/curso-maquetacion.html',{
    data() {
        return {
            sessions: [
                {
                    id:1,
                    title:"Introducción a la Programación y Ambiente de trabajo",
                    github:"https://github.com/zenx5/academia-kavav/tree/curso/maquetacion-level-1/clase-2",
                    video: "/assets/videos/maquetacion-n1/maquetacion-n1-c1.mp4",
                    videoName:"Introduccion-maquetacion-nivel-1.mp4",
                    date: '11/6/2023'
                },
                {
                    id:2,
                    title:"¿Qué es HTML y CSS?",
                    github:"https://github.com/zenx5/academia-kavav/tree/curso/maquetacion-level-1/clase-2",
                    video: null,
                    date: '11/7/2023'
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
