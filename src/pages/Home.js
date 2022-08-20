import Header from "../components/Header";
import MoonOrMars from "../components/MoonOrMars/MoonOrMars";
import AboutSection from "../components/AboutSection";
import TeamSection from "../components/TeamSection/TeamSection";
import Form from "../components/Form";

const Home = () => {
    return ( 
        <section>
            <Header subHeader="OPLEV DE RØDE PLANET" headline="Turen går til Mars"/>
            <MoonOrMars />
            <AboutSection/>
            <TeamSection/>
            <Form/>
        </section>
     );
}
 
export default Home;