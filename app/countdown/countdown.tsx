'use client'

import { ReactElement, useEffect, useState } from 'react'

import { getDays } from './get-days'
import { getHours } from './get-hours'
import { getMinutes } from './get-minutes'
import { getSeconds } from './get-seconds'
import { getTimeUntil } from './get-time-until'

interface CountdownProps {
  date: Date
}

const Countdown = ({ date }: CountdownProps): ReactElement => {
  const [days, setDays] = useState(0)

  const [hours, setHours] = useState(0)

  const [minutes, setMinutes] = useState(0)

  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const updateTimer = () => {
      const timeDelta = getTimeUntil(date)

      setDays(getDays(timeDelta))
      setHours(getHours(timeDelta))
      setMinutes(getMinutes(timeDelta))
      setSeconds(getSeconds(timeDelta))
    }

    updateTimer()
    const timer = setInterval(updateTimer, 1000)
    return () => clearInterval(timer)
  }, [date])

  return (
    <div className="w-full lg:grid lg:grid-cols-4 px-5 lg:px-0">
      <div className="text-center mb-5 lg:mb-0">
        <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-bold">{days}</p>
        <p className="text-xl sm:text-2xl md:text-4xl text-white">days</p>
      </div>
      <div className="text-center mb-5 lg:mb-0">
        <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-bold">{hours}</p>
        <p className="text-xl sm:text-2xl md:text-4xl text-white">hours</p>
      </div>
      <div className="text-center mb-5 lg:mb-0">
        <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-bold">{minutes}</p>
        <p className="text-xl sm:text-2xl md:text-4xl text-white">minutes</p>
      </div>
      <div className="text-center">
        <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-bold">{seconds}</p>
        <p className="text-xl sm:text-2xl md:text-4xl text-white">seconds</p>
      </div>
    </div>
  )
}

export type { CountdownProps }

export { Countdown }
