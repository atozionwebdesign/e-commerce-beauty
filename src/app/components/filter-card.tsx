/* eslint-disable @next/next/no-img-element */

export default function FilterCard(props: { src: string; title: string; filter: string; color: string; handleFilterClick: (filter: string) => void; }){

    const src = props.src;
    const title = props.title;
    const filter = props.filter;
    const color = props.color;

    const handleFilterClick = () => {
        props.handleFilterClick(filter)
    }

    return(
        <div className="relative w-full h-full" onClick={handleFilterClick}>
            <img src={`${src}`} alt=""/>
            <p className={`absolute bottom-1 filter-title w-full text-center ${color}`} id={filter}>{title}</p>
        </div>
    )
}