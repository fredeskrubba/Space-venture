import card1 from "../../images/moon-btn.jpg";
import card2 from "../../images/mars-btn.jpg";
import { Link } from "react-router-dom";
import CardTemp from "./CardTemp";


const MoonOrMars = () => {
    return ( 
        <section className="bg-gray-200 flex flex-col items-center">
                <div className="flex grid-cols-2 justify-center gap-5 relative bottom-7">
                    <CardTemp 
                        img={card1}
                        destination="Månen"
                    />
                    <CardTemp 
                        img={card2}
                        destination="Mars"
                    />
                </div>
                <Link to={"/Trips"} className="pb-32">Vores ture</Link>
            </section>
     );
}
 
export default MoonOrMars;