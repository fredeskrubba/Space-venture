const Form = () => {
    return ( 
        <section className="p-20 m-5 flex flex-col items-center">
                <h2 className="text-3xl font-extrabold">Tilmeld dig og få 25% rabat</h2>
                <p className="text-sm">Tilmeld dig vores nyhedsbrev og få 25% rabat på din første tur!</p>
                <form action="">
                    <input type="text" placeholder="Din E-mail"/>
                    <button>Tilmeld</button>
                </form>
            </section>
     );
}
 
export default Form;