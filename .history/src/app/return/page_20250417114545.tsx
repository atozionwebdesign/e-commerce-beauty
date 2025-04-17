"use client"
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function Success(){

}

export default function Return(){
    
    
    return (
        <>
            <Suspense>
                { success    
                    ? <p>Payment successful, thank you</p>
                    : <p>Please try again....</p>
                }
            </Suspense>    
        </> 
    )
}