import { ReactElement } from 'react'

import jacob from '@/public/committee/jacob.jpg'
import joseph from '@/public/committee/joseph.jpg'

import { Card } from '../components/card'
import { H2 } from '../components/typography'

const Committee = (): ReactElement => {
  return (
    <div className="relative flex flex-col min-h-[50%] items-center py-24" id="team">
      <H2 className="text-center mb-4">Meet the Team!</H2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:gap-8">
        <Card text="Jacob" subtext="President" img={jacob} alt="jacob" />
        <Card text="Joseph" subtext="Competitions Director" img={joseph} alt="joseph" />
      </div>
    </div>
  )
}

export { Committee }
