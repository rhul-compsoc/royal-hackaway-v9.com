import { ReactElement } from 'react'

import { Committee } from './committee/committee'
import { Divider } from './components/divider'
import { FAQ } from './faq/faq'
import { Footer } from './footer/footer'
import { Header } from './header/header'
import { Information } from './information/information'
import { Sponsors } from './sponsors/sponsors'
import { Timetable } from './timetable/timetable'

const Page = (): ReactElement => {
  return (
    <main>
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
