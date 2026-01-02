import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faCalendar, faMap } from '@fortawesome/free-regular-svg-icons'
import { faMapPin } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { ReactElement } from 'react'

import { Button } from '../components/button'
import { H2 } from '../components/typography'
import { InformationMap } from './information-map'

interface InformationProps {
  _?: never
}

const Information = ({}: InformationProps): ReactElement => {
  return (
    <div className="relative flex flex-col min-h-[50%] items-center pt-24 px-12" id="info">
      <H2 className='mb-4'>Coming soon: Royal Hackaway v9...</H2>
      <p className="text-center px-4">
        <FontAwesomeIcon icon={faCalendar} />
        {} Saturday 1st of January - Sunday 1th of February 2026
      </p>
      <p className="text-center px-4">
        <FontAwesomeIcon icon={faMap} />
        {} Windsor Building, Royal Holloway, University of London
      </p>
      <div className="mt-4 mb-4">
        <Button>
          <Link href="https://royalhackaway-v8.devpost.com/project-gallery" target="_blank">
            Check out last years projects on Devpost!
          </Link>
        </Button>
      </div>
      <div className="mt-4 mb-4">
        <Button variant="discord" size="lg">
          <Link href="https://discord.gg/XptvsDZwXc" target="_blank">
            <FontAwesomeIcon icon={faDiscord} className="mr-2" />
            Join our Discord!
          </Link>
        </Button>
      </div>
      <p className="w-3/4 text-lg tracking-tight lg:w-1/2 lg:text-xl py-10">
        Royal Hackaway is Royal Holloway&apos;s annual hackathon, open to university students from the UK and around the
        world! Spend the 24 hours as a team working together on a project, attend any of our workshops, talks or
        mini-events, and work together to create the coolest project!
      </p>
      <p className="mt-2 ml-2 mr-2 mb-2">
        <Link href={'https://www.instagram.com/royalhackaway/'} target="_blank" className="mt-2">
          <FontAwesomeIcon size="xl" icon={faInstagram} />
        </Link>

        <Link href={'https://maps.app.goo.gl/7neALzxuHu5iQEMw7'} target="_blank" className="mt-2 ml-2">
          <FontAwesomeIcon size="xl" icon={faMapPin} />
        </Link>
      </p>
      <InformationMap />
    </div>
  )
}

export { Information }
