import {ReactComponent as CursorIcon} from "../../images/icons/cursor-icon.svg";
import {ReactComponent as EmailIcon} from "../../images/icons/email-icon.svg";
import {ReactComponent as PhoneIcon} from "../../images/icons/phone-icon.svg";
import { Link } from "react-router-dom";


const Footer = (props) => {
    return ( 
        <footer>
            <div className="bg-secondary text-white p-5 flex grid-cols-2">
                <section className="mx-32 my-12 flex flex-col gap-4">
                    <h2>KONTAKT</h2>
                    <div className="flex gap-4">
                        <PhoneIcon className="fill-main w-6" />
                        <p>{props.phoneNum}</p>
                    </div>
                    <div className="flex gap-4">
                        <EmailIcon className="fill-main w-6"/>
                        <p>{props.email}</p>
                    </div>
                    <div className="flex gap-4">
                        <CursorIcon className="fill-main w-6 h-6"/>
                        <p>{props.address}</p>
                    </div>
                </section>
                <section className="m-auto">
                    <h2>HURTIG LINKS</h2>
                        <ul className="grid grid-cols-2 gap-2 list-disc list-inside marker:text-main my-5">
                            {props.quickLinks.map(quickLink => {
                                return <li className="text-2xl items-center"><Link to={quickLink.route} className="text-base mx-0">{quickLink.name}</Link></li>
                            })}
                        </ul>
                    
                    <button className="px-10 py-5 bg-main text-white">Kontakt</button>
                </section>
            </div>
            <div className="bg-secondaryDark flex px-32 items-center py-3">
                <p className="text-gray-600">{props.copyright}</p>
                <div className="flex items-center mx-auto gap-2">
                    {props.socials.map(Social => {
                        return <Social className="fill-gray-600"/>
                    })}
                </div>
                <button className="p-5 py-3 bg-main text-white my-1">^</button>
            </div>
        </footer>
     );
}
 
export default Footer;