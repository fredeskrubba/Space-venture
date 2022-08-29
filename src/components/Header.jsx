import banner2 from "../images/banner2.jpg";
import banner1 from "../images/banner1.jpg";
import banner3 from "../images/banner3.jpg";
import { useState, useRef } from "react";

const Header = () => {

    const [bannerImg, setBannerImg] = useState(banner2);
    const [headline, setHeadline] = useState("Turen går til Mars");
    const [subline, setSubline] = useState("Oplev den røde planet");
    const [active, setActive] = useState(false);

    return ( 
        <header className="p-20 py-56 mt-32" style={{
            backgroundImage: `url(${bannerImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}>
            <div className="relative left-28 bottom-2 ">
                <p className="text-white">{subline}</p>
                <h1 className="text-white text-6xl">{headline}</h1>
            </div>
            <div className="flex flex-col gap-2 absolute right-20 bottom-80">
                <div className="p-2 w-1 bg-gray-300 hover:cursor-pointer hover:bg-main" onClick={()=>{
                    setBannerImg(banner1);
                    setHeadline("Flyv til Månen");
                    setSubline("Se jorden stå op");
                }}></div>

                <div className="p-2 w-1 bg-gray-300 hover:cursor-pointer hover:bg-main" onClick={()=>{
                    setBannerImg(banner2);
                    setHeadline("Turen går til Mars");
                    setSubline("Oplev den røde planet");
                }}></div>

                <div className="p-2 w-1 bg-gray-300 hover:cursor-pointer hover:bg-main" onClick={()=>{
                    setBannerImg(banner3);
                    setHeadline("Stig ombord på rumfærgen");
                    setSubline("TOPHASTIGHED PÅ 1.000.000 KM/T");
                }}></div>
            </div>
        </header>
     );
}
 
export default Header;