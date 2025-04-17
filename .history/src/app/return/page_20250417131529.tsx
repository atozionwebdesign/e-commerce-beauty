"use client"
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function Success(){
    const searchParams = useSearchParams();
    const successValue = searchParams.get('success');
    const success = successValue === "true";

    return (
        <>
            { success    
                ? <p>Payment successful, thank you</p>
                : <p>Please try again....</p>
            }
        </>
    )
}

export default function Return(){
    return (
        <>
            <Suspense>
               <Success />
            </Suspense>    
        </> 
    )
}