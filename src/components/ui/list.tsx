import { ReactNode } from "react";

interface ListProps {
  children: ReactNode;
}

const UnorderedList = ({ children }: ListProps) => {
  return <ul className="ml-6 list-disc">
    {children}
  </ul>
}

export { UnorderedList }