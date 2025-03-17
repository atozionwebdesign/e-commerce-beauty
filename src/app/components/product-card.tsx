import {Card} from "react-bootstrap";
import StarRating from "./reusable/star-rating";
import Button from "./reusable/button";

export default function ProductCard(props){
 
    const product = props.product;
    const id = product._id;
    
    const handleClick = () => {
        props.onClick(id);
    }
    
    const handleBagClick = (e) => {
        const productId = e.target.id.substring(0, e.target.id.indexOf("-"))
        props.handleBagBtn(productId, 1 , "bag");
    }

    return (
        <Card className="contain-content w-100 h-120 product-card px-3 my-2" >
            
            <Card.Body onClick={handleClick}>
                <div className="h-75 w-full justify-center flex items-end">
                    <Card.Img src={process.env.NEXT_PUBLIC_AWS_BUCKET_URL + product.img} alt={product.name} className="max-h-75"/>
                </div>
                <Card.Subtitle className="gray large">{`$${product.price}`}</Card.Subtitle>
                <Card.Title className="subtitle">
                    {`${product.name}`}
                </Card.Title>
                <div className="h-[50px]">
                    <Card.Text className="gray">{product.short_description}</Card.Text>
                </div>
                <StarRating rating={product.rating} count={product.num_of_ratings} size={20} className="justify-self-end ml-auto"/>
                 
            </Card.Body>
            <Button className='primary-btn' onClick={handleBagClick} id={`${product._id}-bagBtn`}>ADD TO BAG</Button>
        </Card>
    )
}