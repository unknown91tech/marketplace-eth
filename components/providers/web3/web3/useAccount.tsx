

import { useEffect } from "react"
import useSWR from "swr"

const adminAddresses: any= {
    "0x5f91616708ef13e62815a7e0396edce58a807044cc3d2104cfc7be5d18556ec0": true
}
const manufacturerAddresses: any = {
  "0xbc759b69a30763188b8676d9c0bbdf7621ba3287dab924cb3e189394b755b54f" :true
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
        isManufacturer: (data &&  manufacturerAddresses[web3.utils.keccak256(data)]) ?? false,
        mutate, 
        ...rest
        }
    }
}