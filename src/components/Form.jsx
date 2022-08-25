import newsmail from "../images/newsmail.jpg";

const Form = () => {
    return ( 
        <section className="p-20 my-5 flex flex-col items-center gap-5" style={{
            backgroundImage: `url(${newsmail})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}>
                <h2 className="text-3xl font-bold text-white">Tilmeld dig og få 25% rabat</h2>
                <p className="text-sm text-white">Tilmeld dig vores nyhedsbrev og få 25% rabat på din første tur!</p>
                <form action="" className="flex gap-2">
                    <input type="text" placeholder="Din E-mail" className="text-white py-4 pl-3 pr-28 placeholder-white bg-transGrey" required/>
                    <button className="bg-main px-7 py-4 text-white">Tilmeld</button>
                </form>
            </section>
     );
}
 
export default Form;