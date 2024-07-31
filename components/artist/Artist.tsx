// Imports
import React from 'react'
import Image from 'next/image'
import heroImg from '@/public/images/hero_image.png'
import Link from 'next/link'
import { AiFillSpotify } from 'react-icons/ai'
import { IoLogoApple } from 'react-icons/io5'
import { FaYoutube } from 'react-icons/fa'

const Artist = () => {
    return (
        <div className="text-white p-5 sm:p-10">
            {/* Heading / Main Line */}
            <div className="flex justify-between text-xs sm:text-sm md:text-base lg:text-2xl xl:text-3xl 2xl:text-4xl">
                <span>Shreya Ghoshal</span>
                <span>Renowned Indian Singer</span>
            </div>

            {/* Hero Image */}
            <div className="py-5">
                <Image
                    src={heroImg}
                    alt="hero image"
                    className="object-contain"
                    layout="responsive"
                />
            </div>

            {/* Latest Release Section */}
            <div className="flex flex-col items-center space-y-1 lg:space-y-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                <span>Latest release {'>'}</span>
                <div className="flex items-center space-x-3">
                    <Link href="https://open.spotify.com/album/1VCRwUKZVhYMYPYVZEl5af">
                        <AiFillSpotify className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8  text-green-500 hover:text-green-700" />
                    </Link>
                    <Link href="https://music.apple.com/us/album/elomelo-raat-from-babli-single/1759506643">
                        <IoLogoApple className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 text-red-500 hover:text-red-700" />
                    </Link>
                    <Link href="https://www.youtube.com/watch?v=EcO8gtM1mGI">
                        <FaYoutube className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 text-red-600 hover:text-red-800" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Artist
