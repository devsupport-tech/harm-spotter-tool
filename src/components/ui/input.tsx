
import * as React from "react"

import { cn } from "@/lib/utils"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  success?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, success, ...props }, ref) => {
    const id = React.useId();
    const errorId = error ? `${id}-error` : undefined;
    const successId = success ? `${id}-success` : undefined;
    
    return (
      <div className="w-full">
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-colors duration-200",
            error && "border-destructive focus-visible:ring-destructive input-error",
            success && "border-teal-500 focus-visible:ring-teal-500 input-success",
            className
          )}
          ref={ref}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : (success ? successId : undefined)}
          {...props}
        />
        
        {error && (
          <div id={errorId} className="error-message" aria-live="polite">
            {error}
          </div>
        )}
        
        {success && !error && (
          <div id={successId} className="success-message" aria-live="polite">
            {success}
          </div>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
