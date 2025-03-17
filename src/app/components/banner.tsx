import Image from "next/image";
import Button from "./reusable/button";

export default function Banner(){

    function handleBtnClick(){
        const anchor = document.querySelector('#productsContainer')
        anchor.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
        <div className="flex h-125 px-10" id="banner" style={{backgroundColor:"var(--white)"}} >
          <div className="grow-2 justify-end flex flex-row items-center" >
            <div className="text-right w-full h-full content-center">
                <p className="title font-bold">The <span className="rose">Legacy</span> of <span className="olive">Clean</span>,</p>
                <p className="title font-bold gold">Naturally</p>
                <div>
                    <p className="subtitle">Shop our new BLK skincare collection</p>
                    <div className="lg:w-1/2 justify-end ml-auto">
                        <Button className="dark-btn" onClick={handleBtnClick}>SHOP</ Button>
                    </div>
                    
                </div>
            </div>
                
            </div>
            <div className="grow-1 w-175 h-full relative align-end">
                <Image 
                    alt="" 
                    src="/assets/banner-blk.png"
                    className="drop-shadow-[25px_-15px_5px_var(--gray)]"
                    style={{
                        objectFit:'contain',
                        
                    }}
                    fill
                />
            </div>
            
        </div>
    )
}