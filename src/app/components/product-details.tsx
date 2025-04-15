/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import StarRating from "./reusable/star-rating";
import Button from "./reusable/button";
import { useState, useEffect } from "react";
import IProduct from "../models/Product";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import Quantity from "./reusable/quantity";
import ICartItem from "../models/CartItem";
import { getQuantity } from "../lib/helper";

export default function ProductDetails(props:{product:IProduct, handleBagClick: (type: string, q?: number, item?: string) => void, cart:ICartItem[]}){
    
    const [img, setImg] = useState(process.env.NEXT_PUBLIC_AWS_BUCKET_URL + props.product.images[0]);
    const [isVisible, setIsVisible] = useState(false);
    const [toggle, setToggle] = useState(true);
    const [quantity, setQuantity] = useState(getQuantity(props.product._id as string, props.cart));

    const product = props.product;
    const name = product.name;
    const long_description = product.long_description;
    const price = product.price;
    const rating = product.rating;
    const count = product.num_of_ratings;
    const images = product.images;
    const ingredients = product.ingredients;
    const includes = product.includes;

    const colors = ['bg-(--rose)', 'bg-(--olive)', 'bg-(--gold)']

    useEffect(() => {
        setIsVisible(true);
        const timer1 = setTimeout(() => {
            setIsVisible(false);
        }, 1000)

        return () => clearTimeout(timer1);
    }, [img])

    function handleQuantityUpdate(q: number){
        setQuantity(q);
    }

    function handleBagClick(){
        props.handleBagClick("bag", quantity, product._id as string);
    }
    
    function handleThumbnailClick(e:any){
        const id = e.target.id;

        if(id){
            setImg(process.env.NEXT_PUBLIC_AWS_BUCKET_URL + id);
        }
    }

    function handleCollapseBtn(e:any){
        
        const id = e.target.closest('button').id;
        const div = document.getElementById(id + 'Div');
        const arrow = document.getElementById(id + 'Arrow');

        div?.classList.toggle('collapse');
        div?.classList.toggle('h-0');
        div?.classList.toggle('pb-5');
        div?.classList.toggle('expanded');
        div?.classList.toggle('collapsed-section');
        arrow?.classList.toggle('collapse-icon');

        getIcon(id + 'Arrow');
        setToggle(!toggle)
    }

    function getIcon(id:string){
        
        const arrow = document.getElementById(id);
        
        if(arrow?.classList.contains('collapse-icon')){
            return 'Down'
            
        }else{
            return 'Up'
        }

    }
    function getBackground(i:number | string){
        
        if(typeof(i) === 'string'){
            const arr = i.split('/');
            i = images.indexOf(arr[arr.length - 1]);
        }
        const index = i % colors.length;
        return colors[index];
    }

    return(
        <div className="h-full w-full overflow-y-scroll py-3">  
            <div className="grid sm:grid-cols-2 w-full h-fit">
                <div className="sm:col-span-1 w-full h-full px-5 grow">
                    <div className={`w-full h-fit contain-content justify-center items-center flex ${getBackground(img)} p-20 rounded-tr-4xl rounded-bl-4xl`}>
                        <img src={img} alt={name} className={isVisible ? 'fade-in' : 'object-scale-down drop-shadow-[50px_-5px_10px_rgba(84,76,55,0.4)]'}/>   
                    </div>  
                    <div className="w-full h-fit justify-center flex">
                        <div className="w-fit h-30 my-3 mx-auto flex overflow-x-scroll bg-(--white) p-2">
                            {
                                images.map(
                                    (image, index) => {
                                        return (
                                            <div key={index} id={image+'-outerdiv'}  className={`h-full p-2 mx-1 ${getBackground(index)}`}>
                                                <div className= 'h-full w-15 relative' id={image+'-innerdiv'}>
                                                <Image 
                                                    alt=''
                                                    src={process.env.NEXT_PUBLIC_AWS_BUCKET_URL+image}
                                                    id={image}
                                                    style={{objectFit: 'contain'}}
                                                    fill
                                                    onClick={handleThumbnailClick}
                                                />
                                                </div>
                                            </div>    
                                        )   
                                    }
                                )
                            } 
                        </div>
                    </div>
                    
                </div>
                <div className="sm:col-span-1 w-full h-full px-5 mt-3 sm:mt-0">
                    <h2 className="mb-3">{name}</h2>
                    <div className="flex items-center">
                        <StarRating rating={rating} count={count} size={20} />
                        <p className="gray -mb-2 ml-2">WRITE A REVIEW</p>
                    </div>
                    <p  className="xlarge my-3">{`$${price}`}</p>
                    <div className="flex">
                        <p className="font-bold mr-2">Quantity</p>
                        <Quantity quantity = {quantity} updateQuantity={(q:number) => handleQuantityUpdate(q)} />
                    </div>
                    <Button className='dark-btn' onClick={handleBagClick}>ADD TO BAG</Button>
                    <p className="my-3">{long_description}</p>
                    <Button className="collapsible-btn flex" id="ingredients" onClick={handleCollapseBtn} >
                        <p className="large grow">KEY INGREDIENTS</p>
                        <p id='ingredientsArrow' className="collapse-icon">                        
                            {
                                getIcon('ingredientsArrow') === 'Down'
                                    ? <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
                                    : <FontAwesomeIcon icon={faAngleUp}></FontAwesomeIcon>
                            }
                        </p>
                    </Button>
                    <div className="overflow-hidden">
                        <div id='ingredientsDiv' className="collapse border-b-(--dark-gray) border-b-1 h-0 bg-(--light-gold) p-2  collapsed-section" style={{transition: 'visibility 1s linear, opacity 1s ease, margin-top 1s ease-in-out, height 1s ease'}}>
                            {
                                ingredients?.map((ingredient, index) => {
                                    return (
                                        <div key={index} className="mb-5">
                                            <p className="mb-1 uppercase">{ingredient.name}</p>
                                            <p className="small">{ingredient.details}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <Button className="collapsible-btn flex" id="includes" onClick={handleCollapseBtn} >
                        <p className="large grow">INCLUDES</p>
                        <p id='includesArrow' className="collapse-icon">                        
                            {
                                getIcon('includesArrow') === 'Down'
                                    ? <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
                                    : <FontAwesomeIcon icon={faAngleUp}></FontAwesomeIcon>
                            }
                        </p>
                    </Button>
                    <div className="overflow-hidden">
                        <div id='includesDiv' className="collapse border-b-(--dark-gray) border-b-1 h-0 bg-(--light-gold) p-2 collapsed-section" style={{transition: 'visibility 1s linear, opacity 1s ease, margin-top 1s ease-in-out, height 1s ease'}}>
                            <div className="">
                                { includes?.map((item, index) => {
                                    return (
                                        <p key={index} className="mb-1">
                                            {
                                                typeof(item) === "string"
                                                    ? item
                                                    :''
                                            }
                                        </p>
                                    )
                                })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}