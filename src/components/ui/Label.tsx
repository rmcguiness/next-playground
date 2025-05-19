import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const labelVariants = cva(
    'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
    {
        variants: {
            variant: {
                default: 'text-gray-900',
                error: 'text-red-500',
                success: 'text-green-600',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    }
);

const Label = React.forwardRef<
    React.ElementRef<typeof LabelPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants> & {
        required?: boolean;
        optional?: boolean;
        error?: string;
        description?: string;
    }
>(
    (
        { className, variant, children, required, optional, error, description, ...props },
        ref
    ) => {
        return (
            <div className="space-y-1">
                <LabelPrimitive.Root
                    ref={ref}
                    className={cn(labelVariants({ variant, className }))}
                    {...props}
                >
                    {children}
                    {required && <span className="ml-1 text-red-500">*</span>}
                    {optional && (
                        <span className="ml-1 text-gray-500 text-xs">(optional)</span>
                    )}
                </LabelPrimitive.Root>
                {description && (
                    <p className="text-sm text-gray-500">{description}</p>
                )}
                {error && variant === 'error' && (
                    <p className="text-sm text-red-500">{error}</p>
                )}
            </div>
        );
    }
);
Label.displayName = LabelPrimitive.Root.displayName;

export { Label }; 