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
      label:'WhatsApp',
      icon: 'mdi-whatsapp',
      url: 'https://wa.me/584125292507',
      bgcolor:'#4caf50',
      color:'#fff',
      outlined: false
    },
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
      label:{
          es: "CV-Es",
          en: "CV-En",
          pt: "CV-Pt"
      },
      icon: 'mdi-file',
      url: {
          es: "https://docs.google.com/presentation/d/1FwwnfO3ecUqhXlx7hAwhGJvbllphLLBun5fbn023Y0k/edit?usp=sharing",
          en: "https://docs.google.com/presentation/d/1RKko_7pjTwIA7p5_GVu2TX-bTz71N62RTamAT904fwo/edit?usp=sharing",
          pt: "https://docs.google.com/presentation/d/1FwwnfO3ecUqhXlx7hAwhGJvbllphLLBun5fbn023Y0k/edit?usp=sharing"
      },
      bgcolor:'#fff',
      color:'#000',
      outlined: true
    },
]

export const langs = ['es', 'en', 'pt']

export const translate = [
    {
        description: "Autodidacta, apasionado y soñador. La programación es lo mío. Pascal a los 12, Javascript de un Nokia 6262, PHP por casualidad... Me gusta desafiarme y aprender",
        links: "",
    },
    {
        description: "Self Taught, passionate and a dreamer. Programming is my thing. Pascal at 12, Javascript from a Nokia 6262, PHP by chance... I enjoy challenging myself and push",
        links: "",
    },
    {
        description: "Autodidata por natureza com a capacidade de aprender rapidamente; Prefiro trabalhar em equipe, mas não tenho problemas em fazê-lo sozinho. Pontual, comprometido, formal e empático.",
        links: "",
    }
]