import Checkout from "./checkout";
import Button from "./reusable/button";
import Image from "next/image";

/* eslint-disable @next/next/no-img-element */
export default function ShoppingCart(props){
    const cart = props.cart;
    let subTotal = 0;

    function calcItemTotal(price, quantity){

        const itemTotal = price*quantity;
        subTotal += itemTotal;

        return itemTotal.toFixed(2);
    }

    function handlePayClick(){
        props.handlePayClick();
    }
   
    function handleTrashClick(e){
        const id = e.target.id;
        const productId = id.slice(0,-2);
        props.handleTrashClick(productId);
        return productId;
    }

    return (
    <div className="w-full h-full overflow-y-scroll">
        <h1>Shopping Cart</h1>
        {
            cart.length > 0
                ? (
                    <div className="w-full max-h-full p-10 ">
                        <div className="grid grid-cols-12 h-20 w-full justify-items-center gray">
                            <div className="col-span-2 h-full flex items-center">
                                <p>PRODUCT</p>
                            </div>
                            <div className="col-span-6 h-full flex items-center">

                            </div>
                            <div className="col-span-1 h-full flex items-center">
                                <p>PRICE</p>
                            </div>
                            <div className="col-span-1 h-full flex items-center">
                                <p>QUANTITY</p>
                            </div>
                            <div className="col-span-1 h-full flex items-center">
                                <p>TOTAL</p>
                            </div>
                            <div className="col-span-1 h-full flex items-center">
                            </div>
                        </div>
                        {
                            cart.map((item, index) => {
                                return(
                                    <div className="grid grid-cols-12 h-fit w-full justify-items-center py-2 border-solid border-t-1 " key={index}>
                                        <div className="col-span-2 h-full contain-content ">
                                            <img src={process.env.NEXT_PUBLIC_AWS_BUCKET_URL +item.product.img} alt="" className="object-scale-down h-30 max-w-20" />
                                        </div>
                                        <div className="col-span-6 h-full w-full flex items-center">
                                            
                                            <div>
                                                <p>{item.product.name}</p>
                                                <p className="gray">{item.product.short_description}</p>
                                            </div>
                                        </div>
                                        <div className="col-span-1 h-full flex items-center">
                                            
                                            <p>{`$${item.product.price}`}</p>
                                        </div>
                                        <div className="col-span-1 h-full flex items-center">
                                            <p>{item.quantity}</p>
                                        </div>
                                        <div className="col-span-1 h-full flex items-center">
                                            <p>${calcItemTotal(item.product.price, item.quantity)}</p>
                                        </div>
                                        <div className="col-span-1 h-full flex items-center relative">
                                            <Image 
                                                src="/icons/trash-solid.svg"
                                                width={15}
                                                height={15}
                                                alt="x"
                                                onClick={handleTrashClick} 
                                                id={`${item.id}-t`}
                                                className="cursor"
                                            />
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <div className="w-full flex h-fit justify-end">
                        <div className="w-1/4 h-50 p-5">
                            <div className="flex justify-between">
                                <p className="large"><strong>Subtotal:</strong></p>
                                <p className="large">${subTotal.toFixed(2)}</p>
                            </div>
                            <Button className="dark-btn " onClick = {handlePayClick}>PAY NOW</Button>
                            </div>
                        </div>
                    </div>
            
                )
                : <p className="text-center">Your cart is empty.</p>
        }
        
        
    </div>
    )
}