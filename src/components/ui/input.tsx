import { cva } from "class-variance-authority"
import { forwardRef } from "react"
import { cn } from "~/utils"

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
	variant?: "outlined" | "contained"
}

const inputVariants = cva("py-2 focus:outline-none", {
	variants: {
		variant: {
			outlined:
				"rounded-[4px] border border-stroke bg-transparent px-3 focus:border-[hsl(0_0%_44%)]",
			contained:
				"rounded-md border-2 border-[hsl(240,4%,39%)] bg-secondary-surface px-4  text-base placeholder:text-[hsl(219_8%_60%)] focus:border-[hsl(240,4%,46%)]",
		},
	},
	defaultVariants: {
		variant: "contained",
	},
})

export const Input: React.FC<Props> = forwardRef<HTMLInputElement, Props>(
	({ className, variant, ...props }, ref) => {
		return <input ref={ref} className={cn(inputVariants({ variant, className }))} {...props} />
	}
)
Input.displayName = "Input"
