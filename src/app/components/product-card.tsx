import {Card} from "react-bootstrap";
import StarRating from "./reusable/star-rating";
import Button from "./reusable/button";
import IProduct from "../models/Product";

export default function ProductCard(props: {product: IProduct, key: unknown, onClick: (id: string) => void, handleBagBtn: (type: string, q?: number, item?: string) => void}){
 
    const product = props.product;
    const id = product._id as string;
    
    const handleClick = () => { 
        props.onClick(id);
    }
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleBagClick = (e: any) => {
        const productId = e.target.id.substring(0, e.target.id.indexOf("-"))
        props.handleBagBtn("bag", 1, productId);
    }

    return (
        <Card className="contain-content w-50 h:100 lg:w-80 product-card my-2 flex flex-col bg-(--white) p-3" >
            <Card.Body className="justify-center h-full flex flex-col" onClick={handleClick}>
                <div className="h-45 w-full p-2 lg:h-60 flex items-end justify-center mx-auto mb-2 ">
                    <Card.Img src={process.env.NEXT_PUBLIC_AWS_BUCKET_URL + product.images[0]} alt={product.name} className="max-w-6/10 h-full object-contain"/>
                </div>  
                <Card.Title className="fancy-text">
                    {`${product.name}`}
                </Card.Title>
                <Card.Subtitle className="gray">{`$${product.price}`}</Card.Subtitle>
                <div className="grow">
                    <Card.Text className="h6">{product.short_description}</Card.Text>
                </div>
                <StarRating rating={product.rating} count={product.num_of_ratings} size={20} class="justify-self-end ml-auto"/>
                
            </Card.Body>
            <Button className='dark-btn' onClick={handleBagClick} id={`${product._id}-bagBtn`}>ADD TO BAG</Button>
            
        </Card>
    )
}