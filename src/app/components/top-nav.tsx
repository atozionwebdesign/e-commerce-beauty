import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

export default function TopNav(props) {
    
    return (
        <div className="h-30" style={{backgroundColor:"var(--white)"}}>
            <div className="h-20 items-center px-50 w-full grid grid-cols-12" >
                
                <div className="col-span-5 w-full h-full">

                </div>
                <div className="col-span-2 justify-items-center">
                    <Image 
                        src="/assets/logo.png"
                        width={175}
                        height={75}
                        alt="ii.ix.xxii"
                    />
                </div>
                <div className="col-span-5 w-full h-full justify-items-end content-center">
                    <div className="flex">
                        <p>
                            <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                        </p>
                        <p onClick={props.handleBagClick} className="mx-5">
                            <FontAwesomeIcon icon={faShoppingCart} className=" cursor"></FontAwesomeIcon><span className="ml-1 gold"><sup>{props.cart.length}</sup></span>
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                        </p>
                    </div>
                </div>
            </div>
            <div className="h-10 w-full text-center">
                <p>
                    <span className="mx-5">SHOP ALL PRODUCTS</span>
                    <span className="mx-5">SKINCARE</span>
                    <span className="mx-5">BODY CARE</span>
                    <span className="mx-5">HAIR CARE</span>
                    <span className="mx-5">SALE</span>
                </p>
                
            </div>
        </div>
      
    );
  }