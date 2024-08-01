// Imports
import React from 'react'
import { FaRegCopyright } from 'react-icons/fa6'

const Footer = () => {
    return (
        <div className="bg-black bottom-0 w-full pt-5 lg:pt-10 pb-4 text-white border-t border-green-800">
            <div className="flex flex-row justify-center items-center text-gray-500 text-[7px] md:text-xs lg:text-sm space-x-1">
                <FaRegCopyright className="ml-1.5 w-2.5 h-2.5 md:w-3 md:h-3 lg:w-3.5 lg:h-3.5" />
                <span>
                    Copyright UTT Group Corps 2024 - Layton Chetty. All rights
                    reserved
                </span>
            </div>
        </div>
    )
}

export default Footer
