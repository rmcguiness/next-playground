import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';
import { X } from 'lucide-react';

const alertVariants = cva(
    'relative w-full rounded-lg border p-4 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7',
    {
        variants: {
            variant: {
                default: 'bg-background text-foreground',
                info: 'border-blue-200 bg-blue-50 text-blue-900 [&>svg]:text-blue-900',
                success: 'border-green-200 bg-green-50 text-green-900 [&>svg]:text-green-900',
                warning: 'border-yellow-200 bg-yellow-50 text-yellow-900 [&>svg]:text-yellow-900',
                error: 'border-red-200 bg-red-50 text-red-900 [&>svg]:text-red-900',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    }
);

const Alert = forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants> & {
        onDismiss?: () => void;
        icon?: React.ReactNode;
    }
>(({ className, variant, children, onDismiss, icon, ...props }, ref) => {
    return (
        <div
            ref={ref}
            role="alert"
            className={cn(alertVariants({ variant }), className)}
            {...props}
        >
            {icon}
            <div className="flex-1">{children}</div>
            {onDismiss && (
                <button
                    onClick={onDismiss}
                    className="absolute right-2 top-2 rounded-md p-1 text-gray-500 opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Dismiss</span>
                </button>
            )}
        </div>
    );
});
Alert.displayName = 'Alert';

const AlertTitle = forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h5
        ref={ref}
        className={cn('mb-1 font-medium leading-none tracking-tight', className)}
        {...props}
    />
));
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn('text-sm [&_p]:leading-relaxed', className)}
        {...props}
    />
));
AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertTitle, AlertDescription }; 