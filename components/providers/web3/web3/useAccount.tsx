

import { useEffect } from "react"
import useSWR from "swr"

const adminAddresses: any= {
    "0x74fd681a6eecc44685c50429919e3a7484654e7d43435e64113245063bc9e079": true
}

export const handler = (web3:any , provider:any) => () => {

  const { data, mutate, ...rest } = useSWR(() =>
    web3 ? "web3/accounts" : null,
    async () => {
      const accounts = await web3.eth.getAccounts()
      return accounts[0]
    }
  )

  useEffect(() => {
    provider &&
    provider.on("accountsChanged",
        (      accounts: any[]) => mutate(accounts[0] ?? null)
    )
  }, [provider])

  return { 
    account: 
    {   
        data,
        isAdmin: (data && adminAddresses[web3.utils.keccak256(data)]) ?? false,
        mutate, 
        ...rest
        }
    }
}