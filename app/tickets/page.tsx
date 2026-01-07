import { redirect } from 'next/navigation'

const Page = () => redirect(process.env.TICKETS_REDIRECT_URL || '/')

export default Page
