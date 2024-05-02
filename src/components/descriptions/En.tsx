export default function En({ year }:{ year: number }) {
    
        return <div className="col-span-1 sm:col-span-2 text-md">
            <p className="mb-4">Hi, I learned to program at 12 years old by reverse engineering a <span className="font-bold">Pascal Script</span>, and from there my passion for code was born.</p>
            <p className="mb-4">Right now I am <span className="font-bold">{year} years old</span> developing different software solutions for various agencies, where I have worked with <span className="font-bold">landing pages, ecommerce, web and mobile apps</span>.</p>
            <span className="flex flex-col-reverse">
                <input type="checkbox" className="peer opacity-0" id="more" />
                <label className="sm:hidden cursor-pointer peer-checked:hidden border border-black rounded py-1 px-4 inline w-fit" htmlFor="more">More..</label>
                <label className="!sm:hidden cursor-pointer peer-checked:sm:hidden peer-checked:inline mt-2 border border-black rounded py-1 px-4 hidden w-fit" htmlFor="more">Less..</label>
                <span className="overflow-hidden block h-fit max-h-0 peer-checked:max-h-max peer-checked:min-h-[100px] sm:max-h-max sm:min-h-[100px]">
                    <p className="mb-4">I have played different roles, not only between <span className="font-bold">frontend</span> and <span className="font-bold">backend</span>, but I have also been able to <span className="font-bold">lead teams</span> and the <span className="font-bold">quality of the code and good practices</span> have been entrusted to me.</p>
                    <p>I have also developed some of my own ideas that you can see below.</p>
                </span>
            </span>
        </div>
}