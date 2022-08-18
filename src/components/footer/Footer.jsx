import {ReactComponent as CursorIcon} from "../../images/icons/cursor-icon.svg";
import {ReactComponent as EmailIcon} from "../../images/icons/email-icon.svg";
import {ReactComponent as PhoneIcon} from "../../images/icons/phone-icon.svg";


const Footer = (props) => {
    return ( 
        <footer>
            <div className="bg-secondary text-white p-5">
                <section className="mx-32 my-5 flex flex-col gap-4">
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
            </div>
        </footer>
     );
}
 
export default Footer;