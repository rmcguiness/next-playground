import { headers } from 'next/headers';

export async function getNonce() {
	const headersList = await headers();
	return headersList.get('x-nonce') ?? '';
}

export async function addNonceToScript(script: string) {
	const nonce = await getNonce();
	return `<script nonce="${nonce}">${script}</script>`;
}
