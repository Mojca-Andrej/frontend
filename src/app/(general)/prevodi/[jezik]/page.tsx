interface Props {
    params: {
        jezik: string;
    
    }
}

import { vsiPrevodi } from "../data/prevodi";

export default function Prevodi({ params }: Props) {
    const prevodi = vsiPrevodi.filter(prevod => prevod.abv === params.jezik);
    const language = prevodi[0].language;
    return (
        <div>
            <h1 className="text-2xl bg-gradient-to-r font-semibold text-transparent bg-clip-text from-slate-500 w-fit to-stone-500 mb-4">{language}</h1>
            <div className="container md:px-0 text-black">
                {prevodi.map((prevod, index) => (
                    <div key={index} className="mb-8 bg-gradient-to-br from-slate-200 to-stone-200 md:p-8 rounded-md shadow-md">
                        <h2 className="text-xl font-semibold mb-2">{prevod.title}</h2>
                        <div className="text-sm text-neutral-900 mb-8">
                            {prevod.text.map((line, index) => (
                                <div key={index}>
                                    {line !== "" && <p key={index} className="mb-2" dangerouslySetInnerHTML={{__html: line}}></p>}
                                    {line === "" && <div key={index} className="h-4"></div>}
                                </div>
                            ))}
                        </div>
                        <p className="italic flex justify-end text-neutral-700">({prevod.translation})</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
