import { LabelHTMLAttributes, forwardRef } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const labelVariants = cva('label', {
    variants: {
        variant: {
            default: 'label-default',
            muted: 'label-muted',
            error: 'label-error',
            success: 'label-success',
        },
        required: {
            true: 'label-required',
        },
        optional: {
            true: 'label-optional',
        },
    },
    defaultVariants: {
        variant: 'default',
    },
});

interface LabelProps
    extends LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof labelVariants> {
    description?: string;
}

const Label = forwardRef<HTMLLabelElement, LabelProps>(
    (
        {
            className,
            variant,
            required,
            optional,
            children,
            description,
            htmlFor,
            ...props
        },
        ref
    ) => {
        // Ensure we don't have both required and optional set
        if (required && optional) {
            console.warn('Label cannot be both required and optional');
        }

        return (
            <div className="label-group">
                <label
                    ref={ref}
                    htmlFor={htmlFor}
                    className={cn(
                        labelVariants({ variant, required, optional }),
                        className
                    )}
                    {...props}
                >
                    {children}
                </label>
                {description && (
                    <p className="label-description" id={`${htmlFor}-description`}>
                        {description}
                    </p>
                )}
            </div>
        );
    }
);

Label.displayName = 'Label';

export { Label, labelVariants };
export type { LabelProps }; 