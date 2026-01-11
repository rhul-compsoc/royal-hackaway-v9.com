import { redirect } from 'next/navigation'

const Page = () => redirect(process.env.DEVPOST_REDIRECT_URL || '/')

export default Page
