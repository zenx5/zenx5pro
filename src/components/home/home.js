const Home = new Component('/src/components/home/home.html',{
    data() {
        return {
            langs:LangConfig.getListLang(),
            currentLang:LangConfig.getListLang()[0],
            translate:LangConfig.getLang( LangConfig.getListLang()[0] ),
            username:'Zenx5',
            image:'https://avatars.githubusercontent.com/u/26119733?s=400&u=ad26266086d9fc6836ce5e180ef2f0e1a5eb68dd&v=4',
            links:[
                { label:'LikedIn', icon:'mdi-linkedin', url: 'https://www.linkedin.com/in/zenx5' },
                { label:'GitHub', icon:'mdi-github', url: 'https://github.com/zenx5' },
                { label:'CV', icon:'mdi-file', url: 'https://github.com/zenx5' },
            ]
        }
    },
    methods:{
        changeLang(lang){
            this.currentLang = lang
            this.translate = LangConfig.getLang( lang )
        },
    }
})