/* eslint-disable @next/next/no-img-element */
import StarRating from "./reusable/star-rating";
import Button from "./reusable/button";
import { useState } from "react";

export default function ProductDetails(props){
    const [quantity, setQuantity] = useState(1);

    const product = props.product;
    const img = process.env.NEXT_PUBLIC_AWS_BUCKET_URL + product.img;
    const name = product.name;
    const long_description = product.long_description;
    const price = product.price;
    const rating = product.rating;
    const count = product.num_of_ratings;
    
    const handleQuantityChange = (e) => {
        const id = e.target.id;

        if(id == "increase"){
            setQuantity(quantity + 1)
        } else if(quantity > 0){
            setQuantity(quantity - 1)
        }
    }

    return(
        <div className="grow">
            <h1 className="text-center mb-5 font-bold">{name}</h1>
            <div className="grid md:grid-cols-2 w-full h-fit">
                <div className="md:col-span-1 w-full h-full px-5">
                    <div className="w-full h-full contain-content justify-center flex">
                        <img src={img} alt={name} className="object-scale-down"/>   
                    </div>  
                </div>
                <div className="md:col-span-1 w-full h-full px-5">
                    <p className="gray -mb-2">WRITE A REVIEW</p>
                    <StarRating rating={rating} count={count} size={20} />
                    
                    <p  className="xlarge my-3">{`$${price}`}</p>
                    <div className="flex items-center">
                        <p className="font-bold mr-2">Quantity</p>
                        <div className="w-30 h-fit grid grid-cols-4 text-center border-1 border-solid border-(--gray) divide-solid divide-x divide-(--gray)">
                            <div className="bg-(--off-white) col-span-1">
                                <p className="large font-bold cursor" id="decrease" onClick={handleQuantityChange}>-</p>
                            </div>
                            <div className="col-span-2">
                                <p >{quantity}</p>
                            </div>
                            <div className="bg-(--off-white) col-span-1">
                            <p className="large font-bold cursor" id="increase" onClick={handleQuantityChange}>+</p>
                            </div>
                        </div>
                    </div>
                    <Button className='primary-btn'>ADD TO BAG</Button>
                </div>
            </div>
        </div>
    )
}