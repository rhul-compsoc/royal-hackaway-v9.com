declare module '@/content/committee/index.mdx' {
  export const metadata: {
    title: string
  }
}

declare module '@/content/faq/index.mdx' {
  export const metadata: {
    title: string
  }
}

declare module '@/content/information/index.mdx' {
  export const metadata: {
    date: string
    location: string
    title: string
  }

  const Index: ComponentType

  export default Index
}

declare module '@/content/sponsors/index.mdx' {
  export const metadata: {
    sponsorUs: string
    title: string
  }
}

declare module '@/content/timetable/index.mdx' {
  export const metadata: {
    title: string
  }
}
