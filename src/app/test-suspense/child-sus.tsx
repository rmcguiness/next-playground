export const ChildSuspense = async () => {
    await sleep(1000);
    return (
        <div data-testid="child-content">Child Suspense</div>
    )
}

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
