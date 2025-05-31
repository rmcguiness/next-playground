import { HTMLAttributes, forwardRef } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/utils/cn';
import {
    InfoIcon,
    CheckCircleIcon,
    AlertTriangleIcon,
    XCircleIcon,
    XIcon,
} from 'lucide-react';

const alertVariants = cva('alert', {
    variants: {
        variant: {
            info: 'alert-info',
            success: 'alert-success',
            warning: 'alert-warning',
            error: 'alert-error',
        },
        size: {
            default: '',
            sm: 'alert-sm',
            lg: 'alert-lg',
        },
    },
    defaultVariants: {
        variant: 'info',
        size: 'default',
    },
});

const iconMap = {
    info: InfoIcon,
    success: CheckCircleIcon,
    warning: AlertTriangleIcon,
    error: XCircleIcon,
};

interface AlertProps
    extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
    onClose?: () => void;
    icon?: boolean;
}

const Alert = forwardRef<HTMLDivElement, AlertProps>(
    (
        {
            className,
            variant = 'info',
            size,
            children,
            onClose,
            icon = true,
            ...props
        },
        ref
    ) => {
        const Icon = iconMap[variant || 'info'];

        return (
            <div
                ref={ref}
                role="alert"
                className={cn(alertVariants({ variant, size }), className)}
                {...props}
            >
                {icon && <Icon className="h-4 w-4" />}
                <div>{children}</div>
                {onClose && (
                    <button
                        onClick={onClose}
                        className="alert-action"
                        aria-label="Close alert"
                    >
                        <XIcon className="h-4 w-4" />
                    </button>
                )}
            </div>
        );
    }
);

Alert.displayName = 'Alert';

const AlertTitle = forwardRef<
    HTMLParagraphElement,
    HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h5 ref={ref} className={cn('alert-title', className)} {...props} />
));

AlertTitle.displayName = 'AlertTitle';

const AlertDescription = forwardRef<
    HTMLParagraphElement,
    HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn('alert-description', className)} {...props} />
));

AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertTitle, AlertDescription };
export type { AlertProps }; 