import { pesmi } from "./data";
import Image from "next/image";

export default function ZaOtroke() {
    return (
        <div>
            <h1 className="text-2xl bg-gradient-to-r font-semibold text-transparent bg-clip-text from-indigo-500 w-fit to-sky-500 mb-4">Za otroke</h1>
            <div className="container md:px-0 text-black">
                <div className="mb-8 bg-gradient-to-br from-indigo-200 to-sky-200 p-4 md:p-8 rounded-md shadow-md text-neutral-900">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="">
                            <h2 className="text-xl font-semibold mb-8">Agica, mala čarovnica</h2>
                                <div className="flex flex-col space-y-4">
                                    <p>Ilustracije: Darka Erdelji</p>  
                                    <audio controls className="max-w-[300px] w-full mb-4">
                                        <source src="/audio/za-otroke/agica.mp3" type="audio/mpeg"/>
                                        Your browser does not support the audio element.
                                    </audio>
                                    <p className="mb-4">Pesem je napisal, uglasbil in jo izvaja Peter Andrej.<br/> Pojeta Peter Andrej in Alenka Cilenšek.</p>
                                </div>                     
                        </div>
                        <div>
                        <Image height={800} width={800} src="/agica_slikanica.png" alt="Agica slikanica" className="rounded-md shadow-md md:mb-8" quality={100} priority={true}/>
                        </div>
                    </div>
                </div>
                {pesmi.map((pesem, index) => (
                    <div key={index} className="mb-8 bg-gradient-to-br from-indigo-200 to-sky-200 p-4 md:p-8 rounded-md shadow-md">
                        <h2 className="text-xl font-semibold mb-2">{pesem.title}</h2>
                        <div className="text-sm text-neutral-900 mb-8">
                            {pesem.text.map((line, index) => (
                                <div key={index}>
                                    {line !== "" && <p key={index} className="mb-2" dangerouslySetInnerHTML={{__html: line}}></p>}
                                    {line === "" && <div key={index} className="h-4"></div>}
                                </div>
                            ))}
                        </div>
                        {pesem.mp3Url && (
                            <audio controls className="max-w-[300px] w-full">
                                <source src={pesem.mp3Url} type="audio/mpeg"/>
                                Your browser does not support the audio element.
                            </audio>
                        )}
        
                        {pesem.mp3Sub && (
                            <p className="text-sm mt-2 text-neutral-700"  dangerouslySetInnerHTML={{__html: pesem.mp3Sub}}></p>
                        )}
                        <p className="italic flex justify-end text-neutral-700 text-sm md:text-base">({pesem.source})</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
