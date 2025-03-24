import ClientButton from './client-button';

interface ServerButtonWrapperProps {
    configIds: number[];
}

export default async function ServerButtonWrapper({ configIds }: ServerButtonWrapperProps) {
    // First fetch the initial config
    const firstConfigId = configIds[0];
    const initialModalInfo = await fetch(`https://jsonplaceholder.typicode.com/posts/${firstConfigId}`).then(res => res.json());

    // Fetch the rest of the configs in parallel
    const remainingConfigs = configIds.slice(1);
    const remainingModalInfoPromise = Promise.all(
        remainingConfigs.map(async (id, index) => {
            // Don't wait before the first request
            await sleep(15000); // Wait 15 seconds
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            const data = await response.json();
            console.log(`Fetched data for config ID ${id}:`, data);
            return data;
        })
    );

    return (
        <ClientButton
            modalInfo={initialModalInfo}
            remainingModalInfoPromise={remainingModalInfoPromise}
        />
    );
}

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));