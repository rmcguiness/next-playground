import { ButtonHTMLAttributes, forwardRef } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const buttonVariants = cva('btn', {
    variants: {
        variant: {
            primary: 'btn-primary',
            secondary: 'btn-secondary',
            accent: 'btn-accent',
            destructive: 'btn-destructive',
            outline: 'btn-outline',
        },
        size: {
            default: '',
            sm: 'btn-sm',
            lg: 'btn-lg',
        },
    },
    defaultVariants: {
        variant: 'primary',
        size: 'default',
    },
});

interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, isLoading, children, disabled, ...props }, ref) => {
        return (
            <button
                className={cn(
                    buttonVariants({ variant, size }),
                    isLoading && 'btn-loading',
                    className
                )}
                ref={ref}
                disabled={isLoading || disabled}
                {...props}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
export type { ButtonProps };