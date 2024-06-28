import { cn } from "@/shared/utils/utils"
import { forwardRef } from "react"
import { Label } from "../Label/Label"
 

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}
 
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"


interface IProps extends InputProps{
  wrapperClassName?:string
  label:string
}

export const LabeledInput = forwardRef(({label, id, wrapperClassName, ...props}:IProps, ref:any)=> {
  return (
    <div className={`grid w-full max-w-sm items-center gap-1.5 ${wrapperClassName}`}>
      <Label htmlFor={id}>{label}</Label>
      <Input ref={ref} id={id} {...props} />
    </div>
  )
})
LabeledInput.displayName = "LabeledInput"