import WhatIsAHackathon, { metadata as whatIsAHackathon } from '@/markdown/faq/what-is-a-hackathon.mdx'
import WhoCanAttend, { metadata as whoCanAttend } from '@/markdown/faq/who-can-attend.mdx'

import { FAQ, faq } from './types'

const faqData = [
  {
    ...whatIsAHackathon,
    content: WhatIsAHackathon,
  },
  {
    ...whoCanAttend,
    content: WhoCanAttend,
  },
]

const getFaqs = (): FAQ[] =>
  faqData
    .map((data) => faq.parse(data))
    .sort((a, b) => {
      return (a.order ?? 0) - (b.order ?? 0)
    })

export { getFaqs }
