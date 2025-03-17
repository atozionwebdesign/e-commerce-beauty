import FilterCard from "./filter-card";

export default function FiltersContainer(props){
    const filters = [
        {
            src: "/assets/skincare-couple.png",
            title: "SKINCARE",
            filter: "skin",
            color:"lightbeige"
        },
        {
            src: "/assets/bodycare-woman.png",
            title: "BODY CARE",
            filter: "body",
            color:"dark-gray"
        },
        {
            src: "/assets/haircare-woman.png",
            title: "HAIR CARE",
            filter: "hair",
            color:"white"
        },
    ]

    return (
        <div className="w-full grid grid-cols-3 gap-2">
            {
                filters.map((filter, index) => {
                    return (
                        <div className="col-span-1" key={index}>
                            <FilterCard src={filter.src} title={filter.title} filter={filter.filter} color ={filter.color} handleFilterClick={props.handleFilterClick}/>
                        </div>
                    
                    )
                })
            }
        </div>
    )
}