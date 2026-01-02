import { ReactElement } from 'react'

const Divider = (): ReactElement => {
  return (
    <hr className="mx-auto h-1 border-t-0 bg-transparent bg-linear-to-r from-transparent via-neutral-500 to-transparent opacity-50 w-1/2" />
  )
}

export { Divider }
