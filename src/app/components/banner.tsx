import Image from "next/image";
import Button from "./reusable/button";

export default function Banner(){

    function handleBtnClick(){
        const anchor = document.querySelector('#skinContainer')
        if(anchor){
            anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    return (
        <div className="flex flex-col-reverse lg:flex-row h-150 lg:h-125 px-5 lg:px-10" id="banner"  >
            <div className="w-full lg:w-1/3 h-full text-center lg:text-right content-center -mt-30 sm:-mt-20 lg:mt-0">
                <p className="title font-bold">The <span className="rose">Legacy</span> of <span className="olive">Clean</span>,</p>
                <p className="title font-bold gold">Naturally</p>
                <div>
                    <p className="subtitle">Shop our <span className="font-bold">*new*</span> COCONUT skincare collection</p>
                    <div className="w-1/2 lg:w-full justify-self-center lg:justify-end lg:ml-auto">
                        <Button className="dark-btn" onClick={handleBtnClick}>SHOP</ Button>
                    </div>  
                </div>
            </div>
            <div className="w-full lg:w-2/3 h-full relative ">
                <Image 
                    alt="" 
                    src="/assets/banner-coconut.svg"
                    className="drop-shadow-[1px_-15px_5px_var(--gold)]"
                    style={{
                        objectFit:'contain'
                    }}
                    fill
                />
            </div>
        </div>
    )
}