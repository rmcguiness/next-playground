'use client';

import { handleClick } from "@/actions/nav-button-actions";

type CustomButtonProps = {
    text: string;
    style?: string;
};

export default function CustomButton({ text, style }: CustomButtonProps) {
    const handleButtonClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            console.log('Button clicked:', text);
            await handleClick(text);

        } catch (error) {
            console.error('Error handling button click:', error);
        }
    };

    return (
        <button
            onClick={handleButtonClick}
            className={style}
            type="button"
        >
            {text}
        </button>
    );
} 