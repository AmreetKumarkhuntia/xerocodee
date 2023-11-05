"use client"

import { PaperPlane } from "@/Content";
import { useState } from "react";

const NewsLetter = () => {
    const [Email, setEmail] = useState<string>("");

    const handleSubscribe = () => {

    }

    return (
        <div className="bg-blue-100 my-16 p-16 w-8/12 rounded-3xl flex flex-col justify-center items-center text-center">
            <img className="h-auto w-2/12" src={PaperPlane} alt="Error" />
            <div className="text-3xl font-bold font-poppins w-9/12 my-8">Subscribe to Our Newsletter & get the Coupon code.</div>
            <div>All your information is completely confidential</div>
            <div className="flex justify-evenly items-center w-7/12 mt-8 text-lg">
                <input className="w-7/12 px-8 py-2 rounded-md" placeholder="Type your email" onChange={(e)=>{setEmail(e.target.value)}}/>
                <button className="px-8 py-2 bg-blue-600 rounded-md text-white" onClick={()=>{handleSubscribe()}}>Subscribe</button>
            </div>
        </div>
    )
}

export default NewsLetter;