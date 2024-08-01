// Imports
import React from 'react'
import Image from 'next/image'
import heroImg from '@/public/images/hero_image.png'
import Link from 'next/link'
import { AiFillSpotify } from 'react-icons/ai'
import { IoLogoApple } from 'react-icons/io5'
import { FaYoutube } from 'react-icons/fa'
import biographyImg from '@/public/images/biography_image.jpg'
import achievementsImg from '@/public/images/achievements_image.jpg'
import BackToTopNavigation from '../shared/BackToTopNavigation'

const Artist = () => {
    return (
        <div className="text-white p-5 sm:p-10">
            <div className="flex flex-col space-y-14 lg:space-y-20">
                <div className="flex flex-col">
                    {/* Heading / Main Line */}
                    <div className="flex justify-between text-xs sm:text-sm md:text-base lg:text-2xl xl:text-3xl 2xl:text-4xl">
                        <span>Shreya Ghoshal</span>
                        <span>Renowned Indian Singer</span>
                    </div>

                    {/* Hero Image and Info */}
                    <div className="flex justify-between space-x-5 py-5">
                        <p className="flex items-center text-center text-[7px] sm:text-xs md:text-sm lg:text-base xl:text-lg">
                            Most streamed Indian female artist on Spotify in
                            2021, 2022 and 2023.
                        </p>
                        <Image
                            src={heroImg}
                            alt="hero image"
                            className="object-contain w-[50%] h-[50%]"
                        />
                        <p className="flex items-center text-center text-[7px] sm:text-xs md:text-sm lg:text-base xl:text-lg">
                            Most streamed Indian female artist on Apple Music in
                            2021 and Amazon Music in 2022.
                        </p>
                    </div>

                    {/* Latest Release Section */}
                    <div className="flex flex-col items-center space-y-1 lg:space-y-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                        <span>Latest release {'>'}</span>
                        <div className="flex items-center space-x-3">
                            <Link href="https://open.spotify.com/album/1VCRwUKZVhYMYPYVZEl5af">
                                <AiFillSpotify className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 text-green-500 hover:text-green-700" />
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

                {/* Biography Section */}
                <div className="flex flex-col items-center space-y-3 md:space-y-5">
                    <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                        Biography
                    </span>
                    <div className="flex flex-col xs:max-md:text-center xs:max-md:items-center xs:max-md:space-y-4 md:flex-row md:justify-between md:space-x-10">
                        <p className="md:flex md:items-center lg:basis-2/3 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                            Shreya Ghoshal, born on March 12, 1984, in
                            Berhampore, West Bengal, is a celebrated Indian
                            singer known for her wide vocal range and
                            versatility. Growing up in Rawatbhata, Rajasthan,
                            she began learning music at the age of four and
                            received formal classical training from six. She
                            gained recognition at sixteen by winning the TV
                            singing reality show “Sa Re Ga Ma”, leading to her
                            Bollywood playback debut in the film "Devdas" (2002)
                            directed by Sanjay Leela Bhansali. Renowned as the
                            "Queen of Dynamics", Ghoshal is considered one of
                            the greatest vocalists of the Indian subcontinent.
                        </p>
                        <Image
                            src={biographyImg}
                            alt="biography image"
                            className="object-contain w-[70%] h-[70%]"
                        />
                    </div>
                </div>

                {/* Achievements Section */}
                <div className="flex flex-col items-center space-y-3 md:space-y-5">
                    <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                        Achievements
                    </span>
                    <div className="flex flex-col xs:max-md:text-center xs:max-md:items-center xs:max-md:space-y-6 md:flex-row md:justify-between w-full md:max-xl:space-x-10">
                        <Image
                            src={achievementsImg}
                            alt="achievements image"
                            className="object-contain w-[50%] h-[50%] basis-2/5"
                        />
                        <ul className="md:flex md:flex-col md:justify-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl space-y-2 lg:space-y-5 xl:space-y-8 2xl:space-y-12">
                            <li>
                                5 National Film Awards for Best Female Playback
                                Singer
                            </li>
                            <li>
                                7 Filmfare Awards, including the RD Burman Award
                                for New Music Talent
                            </li>
                            <li>6 awards for Best Female Playback Singer</li>
                            <li>
                                9 Filmfare Awards South for Best Female Playback
                                Singer
                            </li>
                            <li>2 Tamil Nadu State Film Awards</li>
                        </ul>
                    </div>
                </div>
            </div>

            <BackToTopNavigation />
        </div>
    )
}

export default Artist
