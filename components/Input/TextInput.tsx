import { forwardRef, ForwardRefRenderFunction, InputHTMLAttributes } from 'react'

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  ref: string
  error: string
}

const TextInputBase: ForwardRefRenderFunction<HTMLInputElement, TextInputProps> = (
  { name, label, error, ...rest },
  ref
) => {
  return (
    <>
      <label className="mb-2 block text-xs font-bold uppercase tracking-wide" htmlFor={name}>
        {label}
      </label>
      <input
        className="mb-3 block w-full appearance-none rounded border border-paragraph bg-transparent py-3 px-4 leading-tight text-paragraph focus:border-primary focus:text-primary focus:outline-none"
        id={name}
        name={name}
        {...rest}
        ref={ref}
      />
      {!!error && <p className="text-xs italic text-red-500">{error}</p>}
    </>
  )
}

const TextInput = forwardRef(TextInputBase)

export default TextInput
