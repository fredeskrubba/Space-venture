import TeamCard from "./TeamCard";
import { useState, useEffect } from "react";



const TeamSection = () => {
    const [data, setData] = useState([]);

    async function fetchText(){
        let response = await fetch("http://localhost:3001/team");
        let text = await response.json();
        console.log(text);
        setData(text);
    } 
    useEffect(()=>{
        fetchText()
    }, [])
    return ( 
        <section className="p-20 flex flex-col items-center">
                <h2 className="font-bold text-3xl my-2">Vores team</h2>
                <div className="flex gap-5">
                    {data.map((member) => {
                        return <TeamCard 
                            img={require(`../../images/${member.image}`)}
                            name={member.name}
                            position={member.title}
                            phone={member.tlf}
                        />
                    })}
                </div>
            </section>
     );
}
 
export default TeamSection;