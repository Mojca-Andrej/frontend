"use client"
import { useState } from "react";
import { Proza, ProzaPesem } from "../proza";

interface Props {
   proza: Proza[];
}


export default function Content({ proza }: Props) {
    const [part, setPart] = useState(1);

    const toDisplay = proza.filter((item) => item.part === part)[0];

    return (
        <div className="container mb-8 bg-gradient-to-br from-purple-200 to-zinc-200 p-4 md:p-8 rounded-md shadow-md text-neutral-900">
            <div className="flex justify-center md:space-x-4 space-x-2 text-sm md:text-md items-center mb-2">
                {proza.map((item) => (
                    <button key={item.part} onClick={() => setPart(item.part)} className={`${item.part === part ? "text-neutral-900" : "text-neutral-500"} focus:text-neutral-700 focus:font-semibold hover:text-neutral-800 hover-border-bottom-2`}>odlomek {item.part}</button>
                ))}
            </div>
            <h1 className="text-black text-xl font-semibold mb-8">{toDisplay.title}</h1>
            <div>
                {toDisplay.content.map((line, index) => (
                    <div key={index} className="text-sm md:text-md">
                        {typeof line==="object" && line.text.map((item, index) => (
                            console.log(item),
                            <p key={index} className={`${index === line.text.length - 1 ? "mb-4" : "mb-1"} italic ${index === 0 ? "mt-4" : ""}`}>{item}</p>
                        ))}
                        {typeof line==="string" && line !== "" && <p key={index} className={`mb-2 ${index === 0 || index === toDisplay.content.length - 1 ? "mt-4" : ""}`} dangerouslySetInnerHTML={{__html: line}}></p>}
                        {typeof line==="string" && line === "" && <div key={index} className="h-4"></div>}
                    </div>
                ))}
            </div>
            <div>
            </div>
        </div>
    );
}







