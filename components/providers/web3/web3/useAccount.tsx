

import { useEffect } from "react"
import useSWR from "swr"

const adminAddresses: any= {
    "0x5f91616708ef13e62815a7e0396edce58a807044cc3d2104cfc7be5d18556ec0": true
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