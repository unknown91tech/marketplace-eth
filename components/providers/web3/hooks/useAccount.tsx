/* eslint-disable react-hooks/exhaustive-deps */


import { useEffect } from "react"
import useSWR from "swr"

const adminAddresses: any= {
    "0x74fd681a6eecc44685c50429919e3a7484654e7d43435e64113245063bc9e079": true,
    "0x5f91616708ef13e62815a7e0396edce58a807044cc3d2104cfc7be5d18556ec0":true
}

export const handler = (web3:any , provider:any) => () => {

  const { data, mutate, ...rest } = useSWR(() =>
    web3 ? "web3/accounts" : null,
    async () => {
      const accounts = await web3.eth.getAccounts()
      const account = accounts[0]
      if(!account) {
        throw new Error("Cannot retreive an account. Plx refresh the browser!")
      }

      return account
    }
  )

  useEffect(() => {

    const mutator = (accounts: any[]) => mutate(accounts[0] ?? null)
    provider?.on("accountsChanged", mutator)
    
    return () => {
      provider?.removeListener("accountsChanged", mutator)
    }
  }, [provider])

  return { 
      
        data,
        isAdmin: (data && adminAddresses[web3.utils.keccak256(data)]) ?? false,
        mutate, 
        ...rest
        
    }
}