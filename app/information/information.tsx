import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faCalendar, faMap } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { ReactElement } from 'react'

import { Button } from '../components/button'
import { H2 } from '../components/typography'
import { InformationMap } from './information-map'

interface InformationProps {
  _?: never
}

const Information = ({}: InformationProps): ReactElement => {
  return (
    <div className="relative flex flex-col min-h-[50%] items-center gap-y-4" id="info">
      <H2 className="">Coming soon: Royal Hackaway v9...</H2>
      <div>
        <p className="text-center">
          <FontAwesomeIcon icon={faCalendar} />
          Saturday 1st of January - Sunday 1th of February 2026
        </p>
        <p className="text-center">
          <FontAwesomeIcon icon={faMap} />
          Windsor Building, Royal Holloway, University of London
        </p>
      </div>
      <div className="">
        <Link href="https://royalhackaway-v8.devpost.com/project-gallery" target="_blank">
          <Button className="hover:cursor-pointer ">Check out last years projects on Devpost!</Button>
        </Link>
      </div>
      <p className="w-3/4 text-lg tracking-tight lg:w-1/2 lg:text-xl">
        Royal Hackaway is Royal Holloway&apos;s annual hackathon, open to university students from the UK and around the
        world! Spend the 24 hours as a team working together on a project, attend any of our workshops, talks or
        mini-events, and work together to create the coolest project!
      </p>
      <div className="flex flex-row gap-x-2">
        <Link href="https://www.instagram.com/royalhackaway/" target="_blank" className="transition hover:opacity-75">
          <FontAwesomeIcon size="xl" className="hover:scale-110" icon={faInstagram} />
        </Link>
        <Link href="https://discord.gg/XptvsDZwXc" target="_blank" className="transition hover:opacity-75">
          <FontAwesomeIcon size="xl" className="hover:scale-110" icon={faDiscord} />
        </Link>
      </div>
      <InformationMap />
    </div>
  )
}

export { Information }
