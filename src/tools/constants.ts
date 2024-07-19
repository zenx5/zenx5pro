export const PATHS = {
    skill: (lang:string, skill:string) => `/${lang}/skill/${skill}`,
    home: (lang:string) => `/${lang}`,
}

export const labelSkill = [
    'React',
    'Next',
    'Vue',
    'Angular',
    'Prisma',
    'Laravel',
    'Node',
    'Prestashop',
    'Wordpress'
]

export const links = [
    {
      label:'LinkedIn',
      icon: 'mdi-linkedin',
      url: 'https://www.linkedin.com/in/zenx5',
      bgcolor:'#2196f3',
      color:'#fff',
      outlined: false
    },
    {
      label:'GitHub',
      icon: 'mdi-github',
      url: 'https://github.com/zenx5',
      bgcolor:'#000000',
      color:'#fff',
      outlined: false
    },
    {
        label:'Email',
        icon: 'mdi-email',
        url: 'mailto:omartinez1618@gmail.com',
        bgcolor:'#000000',
        color:'#fff',
        outlined: false
    },
    {
      label:{
          es: "CV-Es",
          en: "CV-En",
          pt: "CV-Pt"
      },
      icon: 'mdi-file',
      url: {
          es: "https://docs.google.com/document/d/10i7Fic4orcgdtHKgt6QSRMM1gn-BbL4iaRavHzCZzFA/edit?usp=sharing",
          en: "https://docs.google.com/presentation/d/1RKko_7pjTwIA7p5_GVu2TX-bTz71N62RTamAT904fwo/edit?usp=sharing",
          pt: "https://docs.google.com/presentation/d/1FwwnfO3ecUqhXlx7hAwhGJvbllphLLBun5fbn023Y0k/edit?usp=sharing",
      },
      bgcolor:'#fff',
      color:'#000',
      outlined: true
    },
]

export const langs = ['es', 'en', 'pt']
export const code_es = 'es'
export const code_en = 'en'
export const code_pt = 'pt'

export const projects = [
    {
        id:1,
        title:'Prompt Box',
        image: '',
        description: "Extension para chrome con 170 usuarios que permite crear, guardar y copiar prompts con facilidad para usar en ChatGPT o algún otro servicio de IA.</span>",
        website:'https://chromewebstore.google.com/detail/prompt-box/odcagcgihohglhnolhimdoeahaaefilm',
        repository:'https://github.com/zenx5/prompt-box',
        privateRepository: true,
        tags:['Extension', 'Javascript', 'IA']
    },
    {
        id:2,
        title:'Search Dependencies',
        image: '',
        description:'Search Dependencies es una apliacación web, estension de chrome y complemento de firefox que permite buscar dependencias de un proyecto en NPM y Yarn.',
        website:'https://search-dependencies.vercel.app/',
        repository:'https://github.com/zenx5/search-dependencies',
        privateRepository: true,
        tags:['NextJS', 'React', 'API']
    },
    {
        id:3,
        title:'Not {JSON} Placeholder',
        image: '',
        description:'Implementacion de los endpoint del famoso {JSON} Placeholder con un "toque" didactico.',
        website:'https://not-json-placeholder.vercel.app',
        repository:'https://github.com/zenx5/not-json-placeholder',
        privateRepository: false,
        tags:['React', 'HowDoIt', 'API']
    },
    {
        id:4,
        title:'How Do It',
        image: '',
        description:'How Do It es una libreria de React que permite crear tutoriales interactivos de forma sencilla.',
        website:'https://www.npmjs.com/package/how-do-it',
        repository:'https://github.com/zenx5/how-do-it',
        privateRepository: false,
        tags:['NPM', 'React']
    },
    {
        id:5,
        title:'Zoho API Support',
        image: '',
        description:'Plugin de WordPress que permite conectar con la API de Zoho para obtener y enviar datos de los modulos de Zoho CRM.',
        website:'',
        repository:'https://github.com/zenx5/zoho-api-support',
        privateRepository: false,
        tags:['PHP', 'WordPress', 'Plugin', 'Rest API', 'Zoho']
    },
    {
        id:6,
        title:'Log Users  of Zoho Books',
        image: '',
        description:'Plugin de WordPress que permite llevar un Log de usuarios de Zoho Books en WordPress e importar clientes de Zoho a WordPress.',
        website:'',
        repository:'https://github.com/zenx5/log-users-zoho-books',
        privateRepository: false,
        tags:['PHP', 'WordPress', 'Plugin', 'Rest API', 'Zoho']
    }
]