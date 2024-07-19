export default function Pt({ year }:{ year: number }) {

    return <>
        <p className="mb-4">Oi, aprendi a programar com 12 anos fazendo engenharia reversa em um <span className="font-bold">Script de Pascal</span>, e a partir daí nasceu minha paixão pelo código.</p>
        <p className="mb-4">Agora mesmo tenho <span className="font-bold">{year} anos</span> desenvolvendo diferentes soluções de software para várias agências, onde trabalhei com <span className="font-bold">landing pages, ecommerce, apps web e mobile</span>.</p>
        <span className="flex flex-col-reverse">
            <input type="checkbox" className="peer opacity-0" id="more" />
            <label className="sm:hidden cursor-pointer peer-checked:hidden border border-black rounded py-1 px-4 inline w-fit" htmlFor="more">Mais..</label>
            <label className="!sm:hidden cursor-pointer peer-checked:sm:hidden peer-checked:inline mt-2 border border-black rounded py-1 px-4 hidden w-fit" htmlFor="more">Menos..</label>
            <span className="overflow-hidden block h-fit max-h-0 peer-checked:max-h-max peer-checked:min-h-[100px] sm:max-h-max sm:min-h-[100px]">
                <p className="mb-4">Desempenhei diferentes funções, não apenas entre <span className="font-bold">frontend</span> e <span className="font-bold">backend</span>, mas também pude <span className="font-bold">liderar equipes</span> e a <span className="font-bold">qualidade do código e boas práticas</span> me foram confiadas.</p>
                <p>Também desenvolvi algumas ideias próprias que você pode ver abaixo.</p>
            </span>
        </span>
    </>
}