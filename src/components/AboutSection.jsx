import om from "../images/om-os.jpg";

const AboutSection = () => {
    return ( 
        <section className="flex grid-cols-2 p-24 px-52 ">
            <img src={om} alt="om-os" />
            <article className=" mx-16 w-full px-14">
                <h2 className="text-3xl font-semibold">Lidt om os</h2>
                <p className="text-main my-10 font-semibold">OPLEV NYE HORISONTER</p>
                <p className="">I foråret 2075 blev Space Venture lanceret som det første danske firma, der udbyder charterrejser til Mars og Månen. Det betyder, at også du nu får mulighed for at sætte dit fodaftryk på Månen eller Mars. Vi er stolte af at byde dig velkommen til vores nye hjemmeside, hvor vi håber, du finder lige netop de oplevelser og den information, du søger.</p>
                <button className="bg-main px-12 py-5 text-white">Kontakt os</button>
            </article>
        </section>
     );
}
 
export default AboutSection;