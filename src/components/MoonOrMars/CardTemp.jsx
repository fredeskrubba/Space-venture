const CardTemp = (props) => {
    return ( 
        <div className="w-80 h-96 flex justify-center bg-no-repeat items-end" style={{
            backgroundImage: `url(${props.img})`
        }}>
            <p className="text-white mb-5 font-semibold">{props.destination}</p>
        </div>
     );
}
 
export default CardTemp;