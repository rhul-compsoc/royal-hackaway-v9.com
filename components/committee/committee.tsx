import { ReactElement } from 'react'

import { metadata } from '@/content/committee/index.mdx'
import { isNonEmptyArray } from '@/lib/is/is-non-empty-array'

import { Card } from '../ui/card'
import { H2 } from '../ui/typography'
import { getCommittee } from './get-committee'

const Committee = (): ReactElement => {
  const committee = getCommittee()

  return (
    <div className="relative flex min-h-[50%] flex-col items-center py-24" id="team">
      <H2 className="mb-4 text-center">{metadata.title}</H2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:gap-8">
        {isNonEmptyArray(committee)
          ? committee.map((member, index) => <Card key={`${index}-${member.text}`} {...member} />)
          : undefined}
      </div>
    </div>
  )
}

export { Committee }
