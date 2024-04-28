import {ReactNode} from 'react'

type TitleLevel2Props = {
    children: ReactNode
  }

const TitleLevel2 = (props: TitleLevel2Props) => {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">{props.children}</h2>
  )
}

export default TitleLevel2;