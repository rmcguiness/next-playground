'use client';

import { signOut } from "@/actions/auth-actions";
import { cn } from "@/utils/cn";
import { buttonVariants } from "./button";
import { useRouter } from "next/navigation";

type CustomButtonProps = {
    text: string;
    endpt?: string;
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "glow";
    size?: "default" | "sm" | "lg" | "icon" | null | undefined;
    className?: string;
};

export default function CustomButton({ text, className, endpt, variant = "default", size = 'sm' }: CustomButtonProps) {
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