import Image from "next/image"
import {SearchIcon} from "@heroicons/react/outline"

function Main() {
    return (
        <div>
            
            <div className="flex items-center md:border-2 rounded-full py-2
                            md:shadow-sm">
                <input
                    className="w-96 sm:w-150 pl-5 bg-transparent outline-none flex-grow text-m
                    text-gray-600 placeholder-gray-400" 
                    type="text" placeholder="Please enter a RSA ID number"
                />
                <SearchIcon className="h-8 p-1"/>
            </div>
            
            <h2 class="validator"></h2>
        </div>
    )
}

export default Main
