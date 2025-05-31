'use client';

import { signOut } from "@/actions/auth-actions";
import { cn } from "@/utils/cn";
import { buttonVariants } from "./button";
import { useRouter } from "next/navigation";

type CustomButtonProps = {
    text: string;
    endpt?: string;
    variant?: "primary" | "secondary" | "accent" | "destructive" | "outline" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
    className?: string;
};

export default function CustomButton({ text, className, endpt, variant = "primary", size = 'sm' }: CustomButtonProps) {
    const router = useRouter();

    const handleClick = () => {
        if (endpt) {
            router.push(endpt);
        }
        if (text === 'Sign Out') {
            signOut();
        }
    }

    return (
        <button
            className={cn(buttonVariants({ variant, size, className }))}
            onClick={handleClick}
            type="button"
        >
            {text}
        </button>
    );
} 