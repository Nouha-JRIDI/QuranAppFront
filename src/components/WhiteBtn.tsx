import { FC } from "react"
import { ButtonProps } from "../types"


const WhiteBtn : FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button className="flex items-center gap-[5px] text-[#50B3B3] text-[20px] bg-white border border-[#50B3B3] rounded-[20px] py-[0.2rem] px-[1rem] mt-[10px] w-fit transition-all duration-300 hover:text-white hover:bg-[#50B3B3] cursor-pointer"
    {...props}>
      {children}
        </button>
  )
}

export default WhiteBtn