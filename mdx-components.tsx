import type { MDXComponents } from 'mdx/types'

const components: MDXComponents = {
  p: ({ children }) => <p className="leading-relaxed text-black">{children}</p>,
  strong: ({ children }) => <strong className="font-bold">{children}</strong>,
  em: ({ children }) => <em className="italic">{children}</em>,
  a: ({ href, children }) => (
    <a href={href} className="text-accent hover:underline">
      {children}
    </a>
  ),
  ul: ({ children }) => <ul className="list-disc list-inside my-2">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal list-inside my-2">{children}</ol>,
  li: ({ children }) => <li className="ml-2">{children}</li>,
}

const useMDXComponents = (): MDXComponents => components

export { useMDXComponents }
