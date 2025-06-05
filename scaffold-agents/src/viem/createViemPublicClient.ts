import { createPublicClient, http } from 'viem'
import { moonbaseAlpha } from 'viem/chains'

export function createViemPublicClient() {
    return createPublicClient({
        chain: moonbaseAlpha,
        transport: http(),
    });
}