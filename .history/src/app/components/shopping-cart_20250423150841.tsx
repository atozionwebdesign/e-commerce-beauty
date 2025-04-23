import Button from "./reusable/button";
import Image from "next/image";
import ICartItem from "../models/CartItem";
import { Dispatch, Fragment, SetStateAction, useState} from "react";
import Quantity from "./reusable/quantity";

/* eslint-disable @next/next/no-img-element */
export default function ShoppingCart(props: { cart: ICartItem[]; handlePayClick: () => void; handleTrashClick: (id: string) => void; setCart: Dispatch<SetStateAction<ICartItem[]>>}){

    const [shoppingCart, setShoppingCart] = useState(props.cart);
    const [subTotal, setSubTotal] = useState(shoppingCart.map(item => item.total).reduce((accumulator, currentValue) => accumulator + currentValue, 0));

    function calcItemTotal(id: string, q:number){
        const item = shoppingCart.find(item => item.id === id);
        
        if(item){
            const itemTotal = parseFloat(item.product.price)* q;
            const s = shoppingCart.map(item => item.total).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            setSubTotal(s);
            return itemTotal.toFixed(2);
        }   
    }

    function handlePayClick(){
        props.handlePayClick();
    }
   
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleTrashClick(e:any){
        if(e.target){
            const id = e.target.id;
            const productId = id.slice(0,-2);
            props.handleTrashClick(productId);
            
        }
    }

    function handleQuantityUpdate(q: number, id: string){
        
        const i = shoppingCart.findIndex(item => item.id == id) as number;
        if(id){
            shoppingCart[i].quantity= q;
            shoppingCart[i].total = parseFloat((shoppingCart[i].quantity * parseFloat(shoppingCart[i].product.price)).toFixed(2));
            calcItemTotal(id, q);
        }
        
        props.setCart(shoppingCart);
    }

    return (
    <div className="w-full h-full overflow-y-scroll">
        <h2>Shopping Cart</h2>
        {
            shoppingCart.length > 0
                ? (
                <>
                    <table className="w-full h-fit border-solid border-b-1 border-(--gray) table-auto">
                        <thead>
                            <tr className="gray">
                                <th>PRODUCT</th>
                                <th className="px-3"></th>
                                
                                <th className="collapse md:visible">PRICE</th>
                                <th className="collapse md:visible">QUANTITY</th>
                                <th>TOTAL</th>
                                <th className="collapse md:visible"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                shoppingCart.map((item, index) => {
                                    return(
                                        <Fragment key={index}>
                                            <tr className='border-solid border-t-1 border-(--gray)'>
                                                <td className="flex justify-center">
                                                    <img src={process.env.NEXT_PUBLIC_AWS_BUCKET_URL +item.product.images[0]} alt="" className="object-scale-down h-30 max-w-20" />
                                                </td>
                                                <td className="px-3">
                                                    <p>{item.product.name}</p>
                                                    <p className="gray">{item.product.short_description}</p>
                                                </td>
                                                
                                                <td className="text-center collapse md:visible">
                                                    <p>{`$${item.product.price}`}</p>
                                                </td>
                                                <td className="text-center collapse md:visible">
                                                    <Quantity quantity = {item.quantity} updateQuantity={(q:number) => handleQuantityUpdate(q, item.id)} />
                                                </td>
                                                <td className="text-center">
                                                    <p>${item.total}</p>
                                                </td>
                                                <td className="collapse md:visible">
                                                    <Image 
                                                        src="/icons/trash-solid.svg"
                                                        width={15}
                                                        height={15}
                                                        alt="x"
                                                        onClick={handleTrashClick} 
                                                        id={`${item.id}-t`}
                                                        className="cursor"
                                                    />
                                                </td>
                                            </tr>
                                            <tr className="visible h-fit md:collapse">
                                                <td></td>
                                                <td className="px-3">
                                                <Quantity quantity = {item.quantity} updateQuantity={(q:number) => handleQuantityUpdate(q, item.id)} />
                                                </td>
                                                <td></td>
                                                <td>
                                                <Image 
                                                        src="/icons/trash-solid.svg"
                                                        width={15}
                                                        height={15}
                                                        alt="x"
                                                        onClick={handleTrashClick} 
                                                        id={`${item.id}-t`}
                                                        className="cursor self-end ml-auto"
                                                    />
                                                </td>
                                            </tr>
                                        </Fragment>   
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <div className="w-full flex h-fit justify-end">
                        <div className="w-full sm:w-1/2 md:w-1/4 h-50 p-5">
                            <div className="flex justify-between">
                                <p className="large"><strong>Subtotal:</strong></p>
                                <p className="large">${subTotal.toFixed(2)}</p>
                            </div>
                            <Button className="dark-btn " onClick = {handlePayClick}>PAY NOW</Button>
                        </div>
                    </div>
                </>    
                )
                : <p className="text-center">Your cart is empty.</p>
        }
        
    </div>
    )
}