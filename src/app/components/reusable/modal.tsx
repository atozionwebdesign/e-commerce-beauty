
export default function Modal(props:any){
    
    if(!props.isOpen){
        return null;
    }
    return (
        
        <div className="fixed inset-0 flex justify-center items-center bg-(--gray)/50 z-50 backdrop-blur-[2px] transition-opacity duration-300">
     
            <div className="w-9/10 h-9/10 relative p-5" style={{backgroundColor: 'var(--white)'}}>
                <div className="flex h-full w-full">
                    <button
                    onClick={props.onClose}
                    className="absolute top-0 right-3"
                    >
                    &times;
                    </button>
                    {props.children}
                </div>
                
            </div>
            
          
        </div>
      );
}