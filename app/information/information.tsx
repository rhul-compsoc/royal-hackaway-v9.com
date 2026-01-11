import { ReactElement } from 'react'

import Date from '@/content/information/date.mdx'
import Description from '@/content/information/description.mdx'
import Location from '@/content/information/location.mdx'
import Title from '@/content/information/title.mdx'

import { H2, H4 } from '../components/typography'
import { DiscordIcon } from '../shared/discord-icon'
import { InstagramIcon } from '../shared/instagram-icon'
import { TicketsButton } from '../shared/tickets-button'
import { InformationMap } from './information-map'

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
        <InstagramIcon />
        <DiscordIcon />
      </div>
      <InformationMap />
    </div>
  )
}

export { Information }
