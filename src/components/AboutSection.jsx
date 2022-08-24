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
        <section className="flex grid-cols-2 p-24 px-52 ">
            <img src={om} alt="om-os" />
            <article className=" mx-16 w-full px-14">
                <h2 className="text-3xl font-semibold">Lidt om os</h2>
                <p className="text-main my-10 font-semibold">{data.title}</p>
                <p className="">{data.content}</p>
                <button className="bg-main px-12 py-5 text-white">Kontakt os</button>
            </article>
        </section>
     );
}
 
export default AboutSection;