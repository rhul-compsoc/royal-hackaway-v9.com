import { redirect } from 'next/navigation'

const Page = () => redirect(process.env.DISCORD_REDIRECT_URL || '/')

export default Page
