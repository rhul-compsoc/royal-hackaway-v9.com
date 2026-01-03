import { ReactElement } from 'react'

import { Divider } from './components/divider'
import { FAQ } from './faq/faq'
import { Footer } from './footer/footer'
import { Header } from './header/header'
import { Information } from './information/information'
import { Sponsors } from './sponsors/sponsors'
import { Timetable } from './timetable/timetable'

const Home = (): ReactElement => {
  return (
    <main>
      <div>
        <Header />
      </div>
      <div className="relative w-full h-full bg-white flex flex-col gap-y-12 pt-12">
        <Information />
        <FAQ />
        <Timetable showSchedule={false} />
        <Sponsors />
        <Divider />
        <Footer />
      </div>
    </main>
  )
}

export default Home
