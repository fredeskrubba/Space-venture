import om from "../images/om-os.jpg";
import { useState, useEffect } from "react";


const AboutSection = () => {
    const [data, setData] = useState({
        title: "",
        contenct: "",
    });

    async function fetchText(){
        let response = await fetch("http://localhost:3001/about");
        let text = await response.json();   
        console.log(text);
        setData(text[0]);
    } 
    useEffect(()=>{
        fetchText()
    }, [])

    return ( 
        <section className="flex grid-cols-2 p-24 px-52 gap-20">
            <img src={om} alt="om-os" className="h-96"/>
            <article className="m-4">
                <h2 className="text-3xl font-semibold">Lidt om os</h2>
                <p className="text-main my-5 font-semibold border-b-4 pb-2">{data.title}</p>
                <p className="">{data.content}</p>
                <button className="bg-main px-12 py-5 text-white my-12">Kontakt os</button>
            </article>
        </section>
     );
}
 
export default AboutSection;