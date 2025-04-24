"use client"
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function Return(){

    const searchParams = useSearchParams();
    const successValue = searchParams.get('success');
    const success = successValue === "true";
    
    return (
        <>
        <Suspense>

        </Suspense>
        
        </>
        
    )
}