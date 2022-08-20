const TeamCard = (props) => {
    return ( 
        <div className="flex flex-col items-center">
            <img src={props.img} alt={props.alt} className="relative border-8 border-white top-7 rounded-full "/>
            <article className="bg-gray-200 py-10 px-16 text-center">
                <h3 className=" font-semibold ">{props.name}</h3>
                <p className="text-main text-xs">{props.position}</p>
                <p>{props.phone}</p>
            </article>
        </div>
     );
}
 
export default TeamCard;