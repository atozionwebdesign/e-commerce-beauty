/* eslint-disable @next/next/no-img-element */
export default function Featured(props: { img: string; name: string; color: string; shadow: string}){
    const img = props.img;
    const name = props.name;
    const color = props.color;
    const shadow = props.shadow;

    return(
        <>
            {
                img
                    ? 
                        <div className="mb-10">
                            <div className="w-full h-fit relative flex justify-center">
                                <img className="" src={img} alt="" style={{filter:`drop-shadow(0 0 5px var(--${shadow})`}}
                                /> 
                                <h2 className={`text-right bottom-2 lg:top-2 right-2 xl:right-40 absolute`}><span className="white">FEATURED:</span> <span className={` ${color} `}>{name}</span></h2>
                            </div>
                        </div>
                :""
            }
        </>
    )
}