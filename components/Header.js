import {MenuIcon} from "@heroicons/react/outline"

function Header() {
    return (
        <header className="fixed pl-5 pt-3 top-0 z-999 shadow-md w-full h-16">
            <div className="flex justify-between">
                <h1 className="text-2xl text-bold text-black"></h1>
                <MenuIcon className="text-gray-900 h-10 cursor-pointer sm:hidden pr-3"/>
            </div>
        </header>
    )
}

export default Header
