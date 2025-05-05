"use client";
import { createContext, useContext } from "react";

export const NonceContext = createContext<string | undefined>(undefined);

export function NonceProvider({ children, nonce }: { children: React.ReactNode, nonce: string | undefined }) {
    return <NonceContext.Provider value={nonce}>{children}</NonceContext.Provider>;
}

export function useNonce() {
    const nonce = useContext(NonceContext);
    if (!nonce) {
        throw new Error("NonceContext not found");
    }
    return nonce;
}