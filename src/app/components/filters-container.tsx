import FilterCard from "./filter-card";

export default function FiltersContainer(props: { handleFilterClick: (filter: string) => void; }){
    const filters = [
        {
            src: "/assets/skincare-man.svg",
            title: "SKINCARE",
            filter: "skin",
            color:"lightbeige"
        },
        {
            src: "/assets/bodycare-woman.svg",
            title: "BODY CARE",
            filter: "body",
            color:"dark-gray"
        },
        {
            src: "/assets/haircare-woman.svg",
            title: "HAIR CARE",
            filter: "hair",
            color:"white"
        },
    ]

    return (
        <div className="w-full md:max-h-150 grid grid-cols-1 sm:grid-cols-3 gap- justify-self-center gap-2 my-10">
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