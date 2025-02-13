import { ReactNode } from "react"

interface TypographyProps {
  children: ReactNode;
}

const Heading1 = ({ children }: TypographyProps) => {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {children}
    </h1>
  )
}

const Heading2 = ({ children }: TypographyProps) => {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {children}
    </h2>
  )
}

const Heading3 = ({ children }: TypographyProps) => {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {children}
    </h3>
  )
}

const Heading4 = ({ children }: TypographyProps) => {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      {children}
    </h4>
  )
}

const Paragraph = ({ children }: TypographyProps) => {
  return (
    <p className="leading-7">
      {children}
    </p>
  )
}

const InlineCode = ({ children }: TypographyProps) => {
  return (
    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
      {children}
    </code>
  )
}

export {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Paragraph,
  InlineCode,
}