import { FC } from "react"
import { ButtonProps } from "../types"

const LightBlueBtn: FC<ButtonProps>  = ({children,...props}:ButtonProps) => {
  return (
    <button className="text-white text-2xl bg-[#50b3b3] border-none py-2 px-4 mt-2.5 w-[150px] transition-all duration-300 hover:bg-[#76c7c7] cursor-pointer" {...props}>{children} </button>
  )
}

export default LightBlueBtn