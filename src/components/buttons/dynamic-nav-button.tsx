'use client';

import { signOut } from "@/actions/auth-actions";
import { useRouter } from "next/navigation";
type CustomButtonProps = {
    text: string;
    style?: string;
    endpt?: string;
};

export default function CustomButton({ text, style, endpt }: CustomButtonProps) {
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
            onClick={handleClick}
            className={style}
            type="button"
        >
            {text}
        </button>
    );
} 