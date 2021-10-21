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
        // if (valid) {window.prompt(`${idNumber} is a valid RSA ID number`)}
        if (valid) alert(`${idNumber} is a valid RSA ID number`) 
        else alert(`${idNumber} is not a valid RSA ID number`)
        // else window.prompt(`${idNumber} is not a valid RSA ID number`)}
        // return
    }
    
    return (

        <div className="grid my-auto mx-auto p-5 sm:p-10 w-full">

            {/* <div className="h-[300px] 
                        sm:h-[400px] lg:h-[500px] 
                        xl:h-[600px] 2xl:h-[7000px]">

                <Image className=""
                    src="/public/img/rsa-flag.jpg"
                    layout="fill" 
                    objectFit="cover"
                />
            </div> */}
            
            {/* Input box */}
            <div className="px-auto mx-auto sm:max-w-[500px] md:max-w-[600px]">
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
            <div className="px-auto mx-auto">
                <button className="text-white bg-green-500 px-5
                                    py-3 rounded-full shadow-md
                                    font-bold my-3 hover:shadow-xl
                                    active:scale-90 transition duration-150"
                        onClick={validateProcess}>
                        
                    Check ID 
                    {/* <CheckIcon className="h-5 my-auto pl-2"/> */}
                </button>
            </div>
            
        </div>
    )
}

export default Main
