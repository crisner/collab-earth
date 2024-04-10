import {ReactNode} from 'react'

type TextSmallProps = {
    children: ReactNode
  }

const TextSmall = (props: TextSmallProps) => {
  return (
    <small className="text-sm font-medium leading-none">{props.children}</small>
  )
}

export default TextSmall;
  