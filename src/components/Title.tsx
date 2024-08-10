import { ButtonProps } from "../types"

const Title = ({children}:ButtonProps) => {
  return (
    <h1 className="m-5 text-xl font-bold">
        {children}
    </h1>
  )
}

export default Title