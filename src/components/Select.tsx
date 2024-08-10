import { SelectProps } from "../types"


const Select = ({children, id , name}:SelectProps) => {
  return (
    <select className='mr-5 border border-gray-300 w-200 m-1' id={id} name={name}>
        {children}
    </select>
  )
}

export default Select