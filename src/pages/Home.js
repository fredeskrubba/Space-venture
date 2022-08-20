import banner2 from "../images/banner2.jpg";
import card1 from "../images/moon-btn.jpg";
import card2 from "../images/mars-btn.jpg";
import om from "../images/om-os.jpg";
import diana from "../images/Diana.jpg";
import peter from "../images/Peter.jpg";
import jill from "../images/Jill.jpg";
import james from "../images/James.jpg";
import TeamCard from "../components/TeamCard";

import { Link } from "react-router-dom";

const Home = (props) => {
    return ( 
        <section>
            <header className="p-20 py-56 " style={{
                backgroundImage: `url(${banner2})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}>
                <div className="relative left-28 bottom-2 ">
                    <p className="text-white">{props.subHeader}</p>
                    <h1 className="text-white text-6xl">{props.headline}</h1>
                </div>
            </header>
            <section className="bg-gray-200 flex flex-col items-center">
                <div className="flex grid-cols-2 justify-center gap-5 relative bottom-7">
                    <div className=" w-80 flex items-end justify-center" style={{
                        backgroundImage: `url(${card1})`
                    }}>
                        <p className="text-white mb-5 font-semibold">Månen</p>
                    </div>
                    <div className="w-80 h-96 flex items-end justify-center" style={{
                        backgroundImage: `url(${card2})`
                    }}>
                        <p className="text-white mb-5 font-semibold">Mars</p>
                    </div>
                </div>
                <Link to={"/Trips"} className="pb-32">Vores ture</Link>
            </section>
            <section className="flex grid-cols-2 p-24 px-52 ">
                <img src={om} alt="om-os" />
                <article className=" mx-16 w-full px-14">
                    <h2 className="text-3xl font-semibold">Lidt om os</h2>
                    <p className="text-main my-10 font-semibold">OPLEV NYE HORISONTER</p>
                    <p className="">I foråret 2075 blev Space Venture lanceret som det første danske firma, der udbyder charterrejser til Mars og Månen. Det betyder, at også du nu får mulighed for at sætte dit fodaftryk på Månen eller Mars. Vi er stolte af at byde dig velkommen til vores nye hjemmeside, hvor vi håber, du finder lige netop de oplevelser og den information, du søger.</p>
                    <button className="bg-main px-12 py-5 text-white">Kontakt os</button>
                </article>
            </section>
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
        </section>
     );
}
 
export default Home;