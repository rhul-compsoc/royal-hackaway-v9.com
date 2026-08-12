'use client'

import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'

import background from '@/public/background.png'
import text from '@/public/hackaway-text.png'

import { Stats } from '../stats/stats'

export const Header = () => {
  return (
    <>
      <div className="absolute -z-50 h-screen w-full bg-black [clip-path:inset(0,0,0,0)]">
        <div className="fixed top-0 left-0 h-full w-full">
          <Image
            alt="Hackaway Photo"
            src={background}
            placeholder="blur"
            fill
            className="object-cover blur brightness-[.35]"
          />
        </div>
      </div>
      <div className="min-h-screen items-center">
        <div className="w-full pt-10">
          <Image
            title="<//"
            alt="Hackaway Logo"
            src={text}
            className="mx-auto w-3/4 blur-none drop-shadow-[3px_3px_rgba(217,91,23,.75)] lg:w-1/2"
          />
        </div>
        <div className="mt-5 mb-20 w-full blur-none sm:mt-10 lg:mb-10">
          <div className="bg-accent mx-auto w-fit rounded-4xl py-5 sm:mt-20 lg:w-4/5">
            <Stats />
          </div>
        </div>
        <div className="mt-5 block h-full w-full text-sm sm:mt-10 md:hidden lg:mt-32 lg:block lg:text-3xl">
          <div className="mx-auto w-fit">
            <Link href="/#info">
              <FontAwesomeIcon
                className="animate-[bounce_3s_infinite] drop-shadow-[6px_9px_rgb(217,91,23)] transition-transform hover:scale-110"
                size="5x"
                color="white"
                icon={faChevronDown}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
