import { InputProps } from "../types"

const Input = ({id,name}:InputProps) => {
  return (
    <input className='mr-5 border border-gray-300' id={id} name={name} />
  )
}

export default Input