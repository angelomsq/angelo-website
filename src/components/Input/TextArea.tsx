import {
  forwardRef,
  ForwardRefRenderFunction,
  TextareaHTMLAttributes,
} from 'react'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string
  label: string
  ref: string
  error: string
}

const TextAreaBase: ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextAreaProps
> = ({ name, label, error, ...rest }, ref) => {
  return (
    <>
      <label
        className="mb-2 block text-xs font-bold uppercase tracking-wide"
        htmlFor={name}
      >
        {label}
      </label>
      <textarea
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

const TextArea = forwardRef(TextAreaBase)

export default TextArea
