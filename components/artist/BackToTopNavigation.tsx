'use client'

// Imports
import React from 'react'
import { FiArrowUp } from 'react-icons/fi'

const BackToTopNavigation = () => {
    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <div className="flex flex-row justify-center pt-6 md:pt-10">
            <button
                className="bg-green-800 hover:bg-green-900 hover:text-gray-200 rounded-full p-1 md:p-2"
                onClick={scrollToTop}
            >
                <FiArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
        </div>
    )
}

export default BackToTopNavigation
