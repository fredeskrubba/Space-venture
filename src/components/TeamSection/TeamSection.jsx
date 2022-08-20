import diana from "../../images/Diana.jpg";
import peter from "../../images/Peter.jpg";
import jill from "../../images/Jill.jpg";
import james from "../../images/James.jpg";
import TeamCard from "./TeamCard";


const TeamSection = () => {
    return ( 
        <section className="p-20 flex flex-col items-center">
                <h2 className="font-bold text-3xl my-2">Vores team</h2>
                <div className="flex gap-5">
                    <TeamCard
                        img={diana}
                        alt="Diana pic"
                        name="Diana Robinson"
                        position="C.E.O"
                        phone="+45 23 34 45 56"
                    />
                    <TeamCard
                        img={peter}
                        alt="Peter pic"
                        name="Peter McMillian"
                        position="Rejse agent"
                        phone="+45 84 58 20 23"
                    />
                    <TeamCard
                        img={jill}
                        alt="Jill pic"
                        name="Jill Peterson"
                        position="Tur konsulent"
                        phone="+45 34 15 56 34"
                    />
                    <TeamCard
                        img={james}
                        alt="James pic"
                        name="James Smith"
                        position="PR Manager"
                        phone="+45 89 47 67 36"
                    />
                </div>
            </section>
     );
}
 
export default TeamSection;