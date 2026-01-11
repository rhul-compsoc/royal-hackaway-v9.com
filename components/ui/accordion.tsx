import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ComponentType, ReactElement } from 'react'

import { isDefined } from '@/lib/is/is-defined'
import { isNonEmptyArray } from '@/lib/is/is-non-empty-array'

import { H4 } from './typography'

interface AccordionItemProps {
  title: string
  content?: ComponentType
}

interface AccordionProps {
  elements?: AccordionItemProps[]
}

const Accordion = ({ elements }: AccordionProps): ReactElement => {
  return (
    <div className="space-y-4 w-full px-5 sm:px-10 md:w-3/4 md:px-0 lg:w-2/3">
      {isNonEmptyArray(elements) &&
        elements.map((element, index) => (
          <details key={index} className="group [&_summary::-webkit-details-marker]:hidden">
            <summary
              className="flex cursor-pointer items-center justify-between gap-1.5 rounded-2xl bg-primary hover:bg-accent outline-none shadow-xl hover:shadow-4xl p-4 text-white transition-all duration-200 hover:scale-105 active:scale-95
            focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent"
            >
              <H4 className="text-white">{element.title}</H4>
              <FontAwesomeIcon
                icon={faChevronDown}
                className="h-5 w-5 shrink-0 transition-transform duration-300 ease-out group-open:rotate-180"
              />
            </summary>
            <div className="overflow-hidden transition-all duration-300 ease-out group-open:duration-300">
              <div className="mt-4 px-4 pb-4">{isDefined(element.content) ? <element.content /> : undefined}</div>
            </div>
          </details>
        ))}
    </div>
  )
}

export type { AccordionItemProps, AccordionProps }

export { Accordion }
