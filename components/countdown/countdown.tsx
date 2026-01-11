'use client'

import { ReactElement, useEffect, useState } from 'react'

import { CountdownValue } from './countdown-value'
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
      <CountdownValue label="days" value={days} />
      <CountdownValue label="hours" value={hours} />
      <CountdownValue label="minutes" value={minutes} />
      <CountdownValue label="seconds" value={seconds} />
    </div>
  )
}

export type { CountdownProps }

export { Countdown }
