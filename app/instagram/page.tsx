import { redirect } from 'next/navigation'

const Page = () => redirect(process.env.INSTAGRAM_REDIRECT_URL || '/')

export default Page
