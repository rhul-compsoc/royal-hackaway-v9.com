import { ReactElement } from 'react'

import { Accordion } from '../components/accordion'
import { H2, H3 } from '../components/typography'
import { DiscordButton } from './discord-button'
import { getFaqs } from './get-faqs'

const FAQ = (): ReactElement => {
  const faqs = getFaqs()

  return (
    <div className="relative flex flex-col min-h-[50%] items-center" id="faq">
      <H2 className="mb-12">Frequently Asked Questions</H2>
      <Accordion elements={faqs} />
      <div className="pt-8">
        <H3 className="text-center mb-2">Got another question?</H3>
        <DiscordButton />
      </div>
    </div>
  )
}

export { FAQ }
