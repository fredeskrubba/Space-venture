import { Link } from "react-router-dom";

const Nav = (props) => {
    
    return ( 
        <nav className="container flex my-5 mx-72 flex-row">
            <section>
                <img src={props.logo} alt={props.logoAlt} />
            </section>
            <section>
                <div>
                    {props.links.map(link => {
                        return <Link to={link.route}> {link.name} </Link>
                    })}
                </div>
            </section> 
        </nav>
     );
}
 
export default Nav;