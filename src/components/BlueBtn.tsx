import { ButtonProps } from "../types"
import { FC } from 'react';

const BlueBtn: FC<ButtonProps> = ({children,...props}) => {
  return (
    <button className="bg-[#153d69] p-1.5 px-2.5 m-1 text-white border-none transition-all duration-300 ease-linear hover:bg-[#1e4977] cursor-pointer"
    {...props}> 
    {children}
    </button>
  )
}

export default BlueBtn