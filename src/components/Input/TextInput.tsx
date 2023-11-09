import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from 'react'

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  error: string
}

const TextInputBase: ForwardRefRenderFunction<
  HTMLInputElement,
  TextInputProps
> = ({ name, label, error, ...rest }, ref) => {
  return (
    <>
      <label
        className="mb-2 block text-xs font-bold uppercase tracking-wide"
        htmlFor={name}
      >
        {label}
      </label>

      <input
        className="border-paragraph text-paragraph focus:border-primary focus:text-primary mb-3 block w-full appearance-none rounded border bg-transparent px-4 py-3 leading-tight focus:outline-none"
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
