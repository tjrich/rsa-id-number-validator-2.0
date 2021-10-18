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
    
    return (


        <div className="relative ">
            
            <div className="">
                <div className="flex items-center md:border-2 rounded-full py-2
                                md:shadow-sm">
                    <input
                        value={idNumber}
                        onChange={(e) => setidNumber(e.target.value)}
                        className="w-96 pl-5 bg-transparent outline-none flex-grow text-m
                        text-gray-600 placeholder-gray-400" 
                        type="text" placeholder="Please enter a RSA ID number"
                    />
                    <FingerPrintIcon className="h-8 pr-2 py-1 cursor-pointer"/>
                </div>
            </div>
            
            <div className="absolute">
                <button className="flex text-white bg-green-600 px-6
                                    py-4 rounded-full shadow-md
                                    font-bold my-3 hover:shadow-xl
                                    active:scale-90 transition duration-150"
                        onClick={Validator(idNumber)}>
                    Check ID 
                    <CheckIcon className="h-5 my-auto pl-2"/>
                </button>
            </div>
            
        </div>
    )
}

export default Main
