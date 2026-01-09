import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faCalendar, faMap } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { ReactElement } from 'react'

import { H2, H4 } from '../components/typography'
import { information } from '../data/information'
import { InformationMap } from './information-map'
import { TicketsButton } from './tickets-button'

interface InformationProps {
  _?: never
}

const Information = ({}: InformationProps): ReactElement => {
  return (
    <div className="relative flex flex-col min-h-[50%] items-center gap-y-4" id="info">
      <H2 className="">Coming soon: Royal Hackaway v9...</H2>
      <H4 className="text-center">
        <FontAwesomeIcon icon={faCalendar} />
        Saturday 31st of January - Sunday 1st of February 2026
      </H4>
      <H4 className="text-center">
        <FontAwesomeIcon icon={faMap} />
        Windsor Building, Royal Holloway, University of London
      </H4>
      <TicketsButton />
      <p className="w-3/5 leading-relaxed text-black">{information}</p>
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
