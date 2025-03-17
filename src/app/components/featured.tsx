/* eslint-disable @next/next/no-img-element */
export default function Featured(props){
    const img = props.img;
    const name = props.name;
    const color = props.color
    return(
        <>
            {
                img
                    ? 
                        <div className="my-10">
                
                            <div className="w-fit h-fit relative mx-auto">
                                <img src={img} alt="" className=" object-scale-down"/> 
                                <h2 className={`top-2 right-2 absolute font-bold`}><span className="gold">FEATURED:</span> <span className={` ${color} `}>{name}</span></h2>
                            </div>
                        </div>
                :""
            }
        </>
    )
}