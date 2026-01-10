import { ReactElement } from 'react'

import { Card } from '../components/card'
import { H2 } from '../components/typography'
import { isNonEmptyArray } from '../utils/is-non-empty-array'
import { getCommittee } from './get-committee'

const Committee = async (): Promise<ReactElement> => {
  const committee = await getCommittee()

  return (
    <div className="relative flex flex-col min-h-[50%] items-center py-24" id="team">
      <H2 className="text-center mb-4">Meet the Team!</H2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:gap-8">
        {isNonEmptyArray(committee)
          ? committee.map((member, index) => <Card key={`${index}-${member.text}`} {...member} />)
          : undefined}
      </div>
    </div>
  )
}

export { Committee }
