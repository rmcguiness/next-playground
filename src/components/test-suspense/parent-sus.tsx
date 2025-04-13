import { Suspense } from "react";
import { ChildSuspense } from "./child-sus";

export default function ParentSuspense() {
    return (
        <Suspense fallback={<div data-testid="loading"></div>}>
            <ChildSuspense />
        </Suspense>
    )
}