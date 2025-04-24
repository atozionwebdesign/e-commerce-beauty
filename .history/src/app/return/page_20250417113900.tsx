"use client"
import { useSearchParams } from "next/navigation";

export default function Return(){

    const searchParams = useSearchParams();
    const successValue = searchParams.get('success');
    const success = successValue === "true";
    
    return (
        <>
        <
        { success    
            ? <p>Payment successful, thank you</p>
            : <p>Please try again....</p>
        }
        </>
        
    )
}