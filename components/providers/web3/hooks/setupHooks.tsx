/* eslint-disable react-hooks/rules-of-hooks */

import { handler as createuseAccount} from "./useAccount";


export const setupHooks= (web3:any, provider:any) => {
    
    return {
        useAccount:createuseAccount(web3, provider)
    }
}