import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { ReactElement } from 'react'

import Date from '@/content/information/date.mdx'
import Description from '@/content/information/description.mdx'
import Location from '@/content/information/location.mdx'
import Title from '@/content/information/title.mdx'

import { H2, H4 } from '../components/typography'
import { InformationMap } from './information-map'
import { TicketsButton } from './tickets-button'

interface InformationProps {
  _?: never
}

const Information = ({}: InformationProps): ReactElement => {
  return (
    <div className="relative flex flex-col min-h-[50%] items-center gap-y-4" id="info">
      <H2>
        <Title />
      </H2>
      <H4 className="text-center">
        <Date />
        <Location />
      </H4>
      <TicketsButton />
      <div className="w-3/5 leading-relaxed">
        <Description />
      </div>
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
