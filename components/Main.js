import Image from "next/image"
import Validator from "../functions/Validator.js"
import {SearchIcon,
        FingerPrintIcon,
        CheckIcon
} 
        from "@heroicons/react/outline"
import { useState } from "react"

function Main() {
    const [idNumber, setidNumber] = useState("")

    const validateProcess = () => {
        
        const valid = Validator(idNumber)
    }
    
    return (


        <div className="container bg-rsa-flag bg-auto bg-center p-5 sm:p-5">

            {/* <div className="relative h-[300px] 
                        sm:h-[400px] lg:h-[500px] 
                        xl:h-[600px] 2xl:h-[7000px]">

                <Image className="rounded-xl"
                    src="/public/img/rsa-flag.jpg"
                    layout="fill" 
                    objectFit="cover"
                />
            </div> */}
            
            {/* Input box */}
            <div className="">
                <div className="flex items-center md:border-2 rounded-full py-2
                                md:shadow-sm">
                    <input
                        value={idNumber}
                        onChange={(e) => setidNumber(e.target.value)}
                        className="w-96 pl-5 bg-transparent outline-none flex-grow text-m
                                text-gray-600 placeholder-gray-400
                                sm:text-lg" 

                        type="text" placeholder="Please enter a RSA ID number"
                    />
                    <FingerPrintIcon className="opacity-0 sm:opacity-100 h-8 pl-2 pr-2 py-1 cursor-pointer"
                    />
                </div>
            </div>
            
            {/* Check ID button */}
            <div className="absolute">
                <button className="flex text-white bg-green-500 px-5
                                    py-3 rounded-full shadow-md
                                    font-bold my-3 hover:shadow-xl
                                    active:scale-90 transition duration-150">
                        
                    Check ID 
                    <CheckIcon className="h-5 my-auto pl-2"/>
                </button>
            </div>
            
        </div>
    )
}

export default Main
