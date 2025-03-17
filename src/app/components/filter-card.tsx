import {Card} from "react-bootstrap";

export default function FilterCard(props){

    const src = props.src;
    const title = props.title;
    const filter = props.filter;
    const color = props.color;

    const handleFilterClick = (e) => {
        props.handleFilterClick(e.target.id)
    }

    return(
        <Card className="contain-content w-full h-100 cursor object-scale-down" style={{backgroundImage:`url(${src})`}} onClick={handleFilterClick} id={filter}>
            <Card.Title className={`absolute bottom-3 text-center w-full filter-title ${color}`}>{title}</Card.Title> 
        </Card>
    )
}