import { css, firebase, html, jsClient, jsServer, nextjs, php, prisma, react, tailwindcss } from "@/tools/skills"
import Scrollbar from "./Scrollbar"

export default function SkillMap(){
    const lines = [
        {
            area:'Languages',
            hard: [jsClient, jsServer, html, css, php, 'C','C++'],
            soft: ['java', 'ruby', 'python']
        },
        {
            area:'Libraries & Modules',
            hard: [react, 'jquery', 'i18n', 'Express'],
            soft: []
        },
        {
            area:'Framewords',
            hard: [nextjs, 'Vuejs', 'Angularjs'],
            soft: ['Angular', 'Laravel']
        },
        {
            area:'Frameword UI',
            hard: [tailwindcss, 'MUI', 'Bootstrap', 'Vuetify'],
            soft: []
        },
        {
            area:'Testing',
            hard: ['Jest'],
            soft: []
        },
        {
            area:'ORM',
            hard: [prisma, 'Sequelize'],
            soft: []
        },
        {
            area:'Database',
            hard: [firebase, 'mysql', 'sqlite', 'mongodb'],
            soft: ['sqlserver']
        },
        {
            area:'CMS & Others',
            hard: ['Wordpress', 'Prestashop', 'Magento', 'Shopify', 'Zoho Books'],
            soft: ['Zoho CRM']
        }
    ]


    return <div className="w-full max-w-4xl mx-4">
        <div className="relative flex flex-col w-full gap-2 divide-y bg-white text-black rounded-lg h-96" >
            <span className="flex flex-row w-full divide-x mb-2 sticky top-0 bg-white py-2 px-5 rounded-t-lg">
                <span className="w-2/12 flex gap-2 flex-wrap justify-center">
                    <h2 className="text-lg text-center">Zone</h2>
                </span>
                <span className="w-5/12 flex gap-2 flex-wrap justify-center">
                    <h2 className="text-lg text-center after:content-['*'] after:text-xs after:relative after:-top-1 after:left-0.5 after:text-red-500">Experiencia</h2>
                </span>
                <span className="w-5/12 flex gap-2 flex-wrap justify-center">
                    <h2 className="text-lg text-center after:content-['**'] after:text-xs after:relative after:-top-1 after:left-0.5 after:text-red-500">Practicas</h2>
                </span>
            </span>
            <span className="overflow-y-scroll" style={{ scrollbarWidth:'thin' }}>
                {lines.map( line => <span key={line.area} className="flex flex-row w-full divide-x even:divide-white py-2 px-5 even:bg-slate-200">
                    <span className="w-2/12 text-lg font-bold flex justify-start items-center">{line.area}</span>
                    <span className="w-5/12 flex gap-2 flex-wrap justify-center px-2 items-center">
                        {line.hard.map( skillObject => typeof skillObject === 'string' ? skillObject : skillObject?.label ).map( skill => <span key={skill} className="px-4 py-1 h-fit text-black rounded-full">{skill}</span> )}
                    </span>
                    <span className="w-5/12 flex gap-2 flex-wrap justify-center px-2 items-center">
                        {line.soft.map( skill => <span key={skill} className="px-4 py-1 h-fit text-black rounded-full">{skill}</span> )}
                    </span>
                </span>)}
            </span>
        </div>
        <small className="mt-2">
            <p className="ml-2">(*) He desarrollado productos funcionales usando estos skill</p>
            <p className="ml-2">(**) He estudiado estos skill y desarrollado proyectos para conocer la tecnología. Me atrevo a tomar proyectos relacionados</p>
        </small>
    </div>
}