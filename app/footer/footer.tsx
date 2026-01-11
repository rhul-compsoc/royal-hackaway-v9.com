import { faDiscord, faGithub, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import { ReactElement } from 'react'

import logo from '@/public/hackaway-text.png'

const Footer = (): ReactElement => {
  return (
    <footer className="relative bg-white lg:grid lg:grid-cols-5" id="footer">
      <div className="relative block h-32 lg:col-span-2 lg:h-full mb-16">
        <Image src={logo} alt="logo" placeholder="blur" className="filter brightness-75 w-3/4 mx-auto" />
      </div>
      <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <p className="font-medium text-gray-900">CompSoc</p>
            <p className="mt-8 space-y-1 text-sm text-gray-700">Made with love by RHUL Computing Society</p>
            <ul className="mt-8 flex gap-6">
              <li>
                <Link
                  href="/instagram"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Instagram</span>
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
              </li>
              <li>
                <Link
                  href="/discord"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Discord</span>
                  <FontAwesomeIcon icon={faDiscord} />
                </Link>
              </li>
              <li>
                <Link
                  href="https://twitter.com/rhulcompsoc"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Twitter</span>
                  <FontAwesomeIcon icon={faXTwitter} />
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/rhul-compsoc"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">GitHub</span>
                  <FontAwesomeIcon icon={faGithub} />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/company/rhulcompsoc"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">LinkedIn</span>
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>
              </li>
              <li>
                <Link
                  href="https://computingsociety.co.uk/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Website</span>
                  <FontAwesomeIcon icon={faGlobe} />
                </Link>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <p className="font-medium text-gray-900">Information</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link
                    href="https://www.su.rhul.ac.uk/pageassets/intranet/staff/policies/RHSU-Data-Protection-Policy-Feb-2022.pdf"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Data Protection
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://royalhackaway.com/CodeOfConduct_2.pdf"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    CompSoc Code of Conduct
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf?_gl=1*1251erg*_ga*MTEwMjE5OTUxNS4xNzAxOTY2NzYw*_ga_E5KT6TC4TK*MTcwMTk2Njc2MC4xLjEuMTcwMTk2NzI4MS4wLjAuMA"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    MLH Code of Conduct
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.hackathons.org.uk/code-of-conduct"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Hackathons UK Code of Conduct
                  </Link>
                </li>
                <li>
                  <Link href="#info" className="text-gray-700 transition hover:opacity-75">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-gray-900">Hackaway</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link href="#info" className="text-gray-700 transition hover:opacity-75">
                    Information
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="text-gray-700 transition hover:opacity-75">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="#team" className="text-gray-700 transition hover:opacity-75">
                    Meet the Team
                  </Link>
                </li>
                <li>
                  <Link href="#schedule" className="text-gray-700 transition hover:opacity-75">
                    Schedule
                  </Link>
                </li>
                <li>
                  <Link href="#sponsors" className="text-gray-700 transition hover:opacity-75">
                    Sponsors
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
