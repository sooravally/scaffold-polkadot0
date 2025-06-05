import { getBalanceTool } from './getBalance.js';
import { getWalletAddressTool } from './getWalletAddress.js';
import { deployErc20Tool } from './deployErc20.js';
import { sendTransactionTool } from './sendTransaction.js';

export interface ToolConfig<T = any> {
    definition: {
        type: 'function';
        function: {
            name: string;
            description: string;
            parameters: {
                type: 'object';
                properties: Record<string, unknown>;
                required: string[];
            };
        };
    };
    handler: (args: T) => Promise<any>;
}

export const tools: Record<string, ToolConfig> = {
    // == READ == \\
    get_balance: getBalanceTool,
    get_wallet_address: getWalletAddressTool,
    // get_contract_bytecode: getContractBytecodeTool,

    // == WRITE == \\
    send_transaction: sendTransactionTool,
    deploy_erc20: deployErc20Tool,
    // Add more tools here...
};