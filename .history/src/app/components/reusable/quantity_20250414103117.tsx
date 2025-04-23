import { useState } from "react";
export default function Quantity(props: {quantity:number, updateQuantity:(q:number) => void}){

    const [quantityDisplay, setQuantityDisplay] = useState(props.quantity);

    const handleQuantityChange = (btn:string) => {
    
        if(btn === "increase"){
            
            setQuantityDisplay(quantityDisplay + 1);
            props.updateQuantity(quantityDisplay + 1);
        } else if(quantityDisplay > 0){
            setQuantityDisplay(quantityDisplay - 1);
            props.updateQuantity(quantityDisplay - 1);
        }

    }

    return (
        <div className="flex items-center">
            <div className="w-30 h-fit grid grid-cols-4 text-center border-1 border-solid border-(--gray) divide-solid divide-x divide-(--gray)">
                <div className="bg-(--off-white) col-span-1">
                    <p className="large font-bold cursor" onClick={()=>handleQuantityChange('decrease')}>-</p>
                </div>
                <div className="col-span-2">
                    <p>{quantityDisplay}</p>
                </div>
                <div className="bg-(--off-white) col-span-1">
                    <p className="large font-bold cursor" id="increase" onClick={()=>handleQuantityChange('increase')}>+</p>
                </div>
            </div>
        </div>
    )
}