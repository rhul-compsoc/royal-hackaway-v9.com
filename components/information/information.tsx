import { ReactElement } from 'react'

import Index, { metadata } from '@/content/information/index.mdx'

import { DiscordIcon } from '../shared/discord-icon'
import { InstagramIcon } from '../shared/instagram-icon'
import { TicketsButton } from '../shared/tickets-button'
import { H2, H4 } from '../ui/typography'
import { InformationMap } from './information-map'

const Information = (): ReactElement => {
  return (
    <div className="relative flex flex-col min-h-[50%] items-center gap-y-4" id="info">
      <H2>{metadata.title}</H2>
      <H4 className="text-center">
        {metadata.date}
        <br />
        {metadata.location}
      </H4>
      <TicketsButton />
      <div className="w-3/5 leading-relaxed">
        <Index />
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
