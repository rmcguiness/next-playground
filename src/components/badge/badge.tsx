import { HTMLAttributes, forwardRef } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const badgeVariants = cva('badge', {
    variants: {
        variant: {
            primary: 'badge-primary',
            secondary: 'badge-secondary',
            accent: 'badge-accent',
            success: 'badge-success',
            warning: 'badge-warning',
            info: 'badge-info',
            destructive: 'badge-destructive',
        },
        size: {
            default: 'badge-default',
            sm: 'badge-sm',
            lg: 'badge-lg',
        },
        outline: {
            true: 'badge-outline',
        },
    },
    defaultVariants: {
        variant: 'primary',
        size: 'default',
    },
});

interface BadgeProps
    extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
    // Add any additional props here
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
    ({ className, variant, size, outline, children, ...props }, ref) => {
        return (
            <span
                ref={ref}
                className={cn(badgeVariants({ variant, size, outline }), className)}
                {...props}
            >
                {children}
            </span>
        );
    }
);

Badge.displayName = 'Badge';

export { Badge, badgeVariants };
export type { BadgeProps }; 