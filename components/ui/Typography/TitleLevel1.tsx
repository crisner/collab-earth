import {ReactNode} from 'react'

type TitleLevel1Props = {
    children: ReactNode
  }

const TitleLevel1 = (props: TitleLevel1Props) => {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">{props.children}</h1>
  )
}

export default TitleLevel1;