import { useRouter } from "next/navigation";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faShop, faInfo, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import ICartItem from "../models/CartItem";

export default function TopNav(props: { cart: string | ICartItem[]; handleBagClick: (type: string, q?: number, item?: string) => void; }) {
    const cartLength =  
        props.cart
            ? props.cart.length
            : ''
    
    const router = useRouter();

    function handleClick(){
        props.handleBagClick('cart');
    }

    return (
        <div className="py-5 md:sticky top-0 z-10 bg-(--off-white)">
            <div className="h-fit px-5 lg:px-10 w-full grid grid-cols-11 " >
                
                <div className="col-span-3 w-full h-full">
                    <p>
                        <FontAwesomeIcon icon={faShop}></FontAwesomeIcon>
                        
                    </p>
                </div>
                <div className="col-span-5 justify-items-center">
                    <Image 
                        src="/assets/logo.svg"
                        width={230}
                        height={75}
                        alt="ii.ix.xxii"
                        onClick={() => router.push('/')}
                        className="cursor-pointer"
                    />
                </div>
                <div className="col-span-3 w-full h-full justify-items-end">
                    <div className="flex">
                        <p>
                            <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                        </p>
                        <p onClick={handleClick} className="mx-2 md:mx-5">
                            <FontAwesomeIcon icon={faShoppingCart} className=" cursor"></FontAwesomeIcon><span className="ml-1 gold"><sup>{cartLength}</sup></span>
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
  }