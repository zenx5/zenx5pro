const Home = new Component('/src/components/home/home.html',{
    data() {
        return {
            mode: true,
            langs:LangConfig.getListLang(),
            currentLang:LangConfig.getListLang()[1],
            translate:LangConfig.getLang( LangConfig.getListLang()[1] ),
            username:'Zenx5',
            publicRepos: 0,
            image:'https://avatars.githubusercontent.com/u/26119733?s=400&u=ad26266086d9fc6836ce5e180ef2f0e1a5eb68dd&v=4',
            links:[
                { label:'Cursos', icon:'mdi-book', url: '#/curso/maquetacion', color:'#ff3333' },
                { label:'WhatsApp', icon:'mdi-whatsapp', url: 'https://wa.me/584125292507', color:'green' },
                { label:'LinkedIn', icon:'mdi-linkedin', url: 'https://www.linkedin.com/in/zenx5', color:'blue' },
                { label:'GitHub', icon:'mdi-github', url: 'https://github.com/zenx5', color:'black' },
                {
                    label:{
                        Es: "CV-Es",
                        En: "CV-En",
                        Pt: "CV-Pt"
                    },
                    icon:'mdi-file',
                    url: {
                        Es: "https://docs.google.com/presentation/d/1FwwnfO3ecUqhXlx7hAwhGJvbllphLLBun5fbn023Y0k/edit?usp=sharing",
                        En: "https://docs.google.com/presentation/d/1RKko_7pjTwIA7p5_GVu2TX-bTz71N62RTamAT904fwo/edit?usp=sharing",
                        Pt: "https://docs.google.com/presentation/d/1FwwnfO3ecUqhXlx7hAwhGJvbllphLLBun5fbn023Y0k/edit?usp=sharing"
                    },
                },
            ]
        }
    },
    created: async function(){
        const response = await fetch(`https://api.github.com/users/zenx5`, { cache:"force-cache" })
        const { avatar_url, public_repos } = await response.json()
        if( avatar_url ) this.image = avatar_url
        if( public_repos ) this.publicRepos = public_repos
    },
    methods:{
        changeLang(lang){
            this.currentLang = lang
            this.translate = LangConfig.getLang( lang )
        },
        getByLang( arg ) {
            if( typeof arg === 'string' ) return arg
            return arg[this.currentLang]
        }
    }
})