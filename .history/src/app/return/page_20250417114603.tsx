"use client"
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function Success(){
    const searchParams = useSearchParams();
    const successValue = searchParams.get('success');
    const success = successValue === "true";

    return 
}

export default function Return(){
    
    
    return (
        <>
            <Suspense>
               
            </Suspense>    
        </> 
    )
}