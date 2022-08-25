import banner2 from "../images/banner2.jpg";

const Header = (props) => {
    return ( 
        <header className="p-20 py-56 mt-32" style={{
            backgroundImage: `url(${banner2})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}>
            <div className="relative left-28 bottom-2 ">
                <p className="text-white">{props.subHeader}</p>
                <h1 className="text-white text-6xl">{props.headline}</h1>
            </div>
        </header>
     );
}
 
export default Header;