import { HTMLAttributes, forwardRef } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const cardVariants = cva('card', {
    variants: {
        variant: {
            default: '',
            elevated: 'card-elevated',
            bordered: 'card-bordered',
            ghost: 'card-ghost',
        },
        size: {
            default: 'card-default',
            sm: 'card-sm',
            lg: 'card-lg',
        },
        interactive: {
            true: 'card-interactive',
        },
    },
    defaultVariants: {
        variant: 'default',
        size: 'default',
    },
});

interface CardProps
    extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
    asChild?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ className, variant, size, interactive, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(cardVariants({ variant, size, interactive }), className)}
                {...props}
            >
                {children}
            </div>
        );
    }
);

Card.displayName = 'Card';

// Sub-components
const CardHeader = forwardRef<
    HTMLDivElement,
    HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn('card-header', className)} {...props} />
));
CardHeader.displayName = 'CardHeader';

const CardTitle = forwardRef<
    HTMLParagraphElement,
    HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn('card-title', className)} {...props} />
));
CardTitle.displayName = 'CardTitle';

const CardDescription = forwardRef<
    HTMLParagraphElement,
    HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <p ref={ref} className={cn('card-description', className)} {...props} />
));
CardDescription.displayName = 'CardDescription';

const CardContent = forwardRef<
    HTMLDivElement,
    HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn('card-content', className)} {...props} />
));
CardContent.displayName = 'CardContent';

const CardFooter = forwardRef<
    HTMLDivElement,
    HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn('card-footer', className)} {...props} />
));
CardFooter.displayName = 'CardFooter';

export {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
    cardVariants,
};
export type { CardProps }; 