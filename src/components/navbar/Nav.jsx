import { Link } from "react-router-dom";

const Nav = (props) => {
    
    return ( 
        <nav className="flex flex-col">
            <section className="px-72 my-5">
                <img src={props.logo} alt={props.logoAlt} />
            </section>
            <section className="py-5 px-72 bg-indigo-800 w-full flex">
                <div>
                    {props.links.map(link => {
                        return <Link to={link.route} className="text-gray-100 text-lg mr-7 "> {link.name} </Link>
                    })}
                </div>
                <div className="flex ml-auto items-center">
                    {props.icons.map(Icon => {
                        return <Icon className="mx-2 fill-white"/>
                    })}
                </div>
            </section> 
        </nav>
     );
}
 
export default Nav;