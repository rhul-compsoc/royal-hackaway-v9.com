import { ReactElement } from 'react'

import { metadata } from '@/content/faq/index.mdx'

import { DiscordButton } from '../shared/discord-button'
import { Accordion } from '../ui/accordion'
import { H2, H3 } from '../ui/typography'
import { getFAQs } from './get-faqs'

const FAQ = (): ReactElement => {
  const faqs = getFAQs()

  return (
    <div className="relative flex flex-col min-h-[50%] items-center" id="faq">
      <H2 className="mb-12">{metadata.title}</H2>
      <Accordion elements={faqs} />
      <div className="pt-8">
        <H3 className="text-center mb-2">Got another question?</H3>
        <DiscordButton />
      </div>
    </div>
  )
}

export { FAQ }
