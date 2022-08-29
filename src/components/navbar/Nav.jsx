import { Link } from "react-router-dom";
import { useState } from "react";

const Nav = (props) => {
    
    const [isActive, setActive] = useState("/");
    return ( 
        <nav className="flex flex-col fixed top-0 left-0 right-0 z-10">
            <section className="px-72 bg-white h-14 flex items-center">
                <Link to={"/"}><img src={props.logo} alt={props.logoAlt} /></Link>
            </section>
            <section className=" px-72 bg-secondary flex">
                <div>
                    {props.links.map(link => {
                        return <Link to={link.route} className={`${isActive === link.route ? "text-gray-100 text-lg border-y-4 border-secondary inline-block border-t-main py-5 px-2 bg-secondaryLight border-b-secondaryLight" : "text-gray-100 text-lg border-y-4 border-secondary inline-block hover:border-t-main py-5 px-2 hover:bg-secondaryLight hover:border-b-secondaryLight"}`} onClick={()=>{
                            setActive(link.route)
                        }}> {link.name} </Link>
                    })}
                </div>
                <div className="flex ml-auto items-center">
                    {props.icons.map(Icon => {
                        return <a href={`https://www.${Icon.anchor}`} target="_blank"><Icon.Logo className="mx-2 fill-white hover:fill-main"/></a>
                    })}
                </div>
            </section> 
        </nav>
     );
}
 
export default Nav;