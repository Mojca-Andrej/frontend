import { pesmi } from "./data";

export default function Poezija() {
    return (
        <div>
            <h1 className="text-2xl bg-gradient-to-r font-semibold text-transparent bg-clip-text from-rose-500 w-fit to-purple-500 mb-4">Poezija</h1>
            <div className="container md:px-0 text-black">
                {pesmi.map((pesem, index) => (
                    <div key={index} className="mb-8 bg-gradient-to-br from-rose-200 to-purple-200 p-4 md:p-8 rounded-md shadow-md">
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
                            <p className="text-sm mt-2 text-neutral-700">{pesem.mp3Sub}</p>
                        )}
                        <p className="italic flex justify-end text-neutral-700">({pesem.source})</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
