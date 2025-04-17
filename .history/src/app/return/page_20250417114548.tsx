"use client"
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function Success(){
    const searchParams = useSearchParams();
    const successValue = searchParams.get('success');
    const success = successValue === "true";
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