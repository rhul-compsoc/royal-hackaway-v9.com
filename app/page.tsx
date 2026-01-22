import { ReactElement } from 'react'

import { Committee } from '@/components/committee/committee'
import { FAQ } from '@/components/faq/faq'
import { Footer } from '@/components/footer/footer'
import { Header } from '@/components/header/header'
import { Information } from '@/components/information/information'
import { MLHBadge } from '@/components/shared/mlh-badge'
import { Sponsors } from '@/components/sponsors/sponsors'
import { Timetable } from '@/components/timetable/timetable'
import { Divider } from '@/components/ui/divider'

const Page = (): ReactElement => {
  return (
    <main>
      <MLHBadge />
      <div>
        <Header />
      </div>
      <div className="relative w-full h-full bg-white flex flex-col gap-y-12 pt-12 px-4 md:px-2 lg:px-1">
        <Information />
        <FAQ />
        <Timetable showSchedule={false} />
        <Sponsors />
        <Committee />
        <Divider />
        <Footer />
      </div>
    </main>
  )
}

export default Page
