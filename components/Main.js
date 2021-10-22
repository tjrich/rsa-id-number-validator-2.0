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

        <div className="grid p-5 sm:p-10 w-full">
            
            {/* Input box */}
            <div className="mx-auto sm:max-w-[500px] md:max-w-[600px]">
                <div className="flex items-center md:border-2 rounded-full py-2
                                md:shadow-sm">
                    <input
                        value={idNumber}
                        onChange={(e) => setidNumber(e.target.value)}
                        className="min-w-[400px] sm:min-w-[500px] md:min-w-[600px]
                                pl-5 bg-transparent outline-none
                                text-gray-600 placeholder-gray-400
                                sm:text-lg" 

                        type="text" placeholder="Please enter a RSA ID number"
                    />
                    <FingerPrintIcon className="h-8 pl-2 pr-3 py-1 cursor-pointer
                                                animate-pulse sm:visible"
                    />
                </div>
            </div>

            {/* Check ID button */}
            <div className="mx-auto">
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
