const CursoMaquetacion = new Component('/src/components/curso-maquetacion/curso-maquetacion.html',{
    data() {
        return {
            sessions: [
                {
                    id:1,
                    title:"Introducción a la Programación y Ambiente de trabajo",
                    description: "Nuestro metodo de trabajo, expectativas",
                    github:"https://github.com/zenx5/academia-kavav/tree/curso/maquetacion-level-1/clase-2",
                    video: "/assets/videos/maquetacion-n1/maquetacion-n1-c1.mp4",
                    videoName:"Introduccion-maquetacion-nivel-1-clase-1.mp4",
                    date: '11/6/2023'
                },
                {
                    id:2,
                    title:"¿Qué es HTML y CSS?",
                    description: "Bases sobre HTML y CSS",
                    github:"https://github.com/zenx5/academia-kavav/tree/curso/maquetacion-level-1/clase-2",
                    video: null,
                    videoName: "",
                    date: '11/7/2023'
                },
                {
                    id:3,
                    title:"Git y Github",
                    description: "Flujo de trabajo en Git, clonando repositorios",
                    github:"https://github.com/zenx5/academia-kavav/tree/curso/maquetacion-level-1/clase-2",
                    video: "/assets/videos/maquetacion-n1/maquetacion-n1-c1.mp4",
                    videoName:"Introduccion-maquetacion-nivel-1-clase-4.mp4",
                    date: '11/8/2023'
                },
                {
                    id:4,
                    title: "Cajas en HTML",
                    description: "Div y span; margin, padding y border",
                    github: "https://github.com/zenx5/academia-kavav/tree/curso/maquetacion-level-1/clase-2",
                    video: "/assets/videos/maquetacion-n1/maquetacion-n1-c4.mp4",
                    videoName: "Introduccion-maquetacion-nivel-1-clase-4.mp4",
                    date: '11/9/2023'
                },
                {
                    id:5,
                    title: "Flex y Tailwindcss",
                    description: "Ordenamiento horizontal y vertical con Flex, implementacion Tailwind",
                    github: "https://github.com/zenx5/academia-kavav/tree/curso/maquetacion-level-1/clase-2",
                    video: null,
                    videoName: "",
                    date: '11/10/2023'
                }
            ]

        }
    },
    created: async function(){
        // const response = await fetch(`https://api.github.com/users/zenx5`, { cache:"force-cache" })

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
