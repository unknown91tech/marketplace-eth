import { useHooks } from "@/components/providers/web3";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useWeb3 } from "@components/providers"

const _isEmpty = (data:any) => {
    return (
        data == null ||
        data == "" ||
        (Array.isArray(data) && data.length === 0) ||
        (typeof data === "object" && Object.keys(data).length === 0)
    )
}

const enhanceHook = (swrRes:any) => {

    const {data, error} = swrRes
    const hasInitialResponse = !!(data || error)
    const isEmpty = hasInitialResponse && _isEmpty(data)

    return{
        ...swrRes,
        isEmpty,
        hasInitialResponse
        
    }
}

export const useNetwork = () =>{
    const swrRes=enhanceHook(useHooks((hooks:any)=> hooks.useNetwork)())
    return{
        network:swrRes
    }
}

export const useAccount = () =>{
    const swrRes=enhanceHook(useHooks((hooks:any)=> hooks.useAccount)())
    return{
        account:swrRes
    }
}

export const useAdmin = ({redirectTo}:any) =>{
    const {account} =useAccount()
    const router = useRouter()
    const {requireInstall} = useWeb3()
    useEffect(() => {
        
        if((requireInstall || account.hasInitialResponse && !account.isAdmin) || account.isEmpty) {
            router.push(redirectTo)
        }
    },[account])

    return {account}
}

export const useOwnedCourses = (...args: any[]) => {
    const swrRes = enhanceHook(useHooks((hooks:any) =>hooks.useOwnedCourses)(...args))
    return {
        ownedCourses: swrRes
    }
}

export const useOwnedCourse = (...args: any[]) => {
    const swrRes = enhanceHook(useHooks((hooks:any)=> hooks.useOwnedCourse)(...args))
  
    return {
      ownedCourse: swrRes
    }
  }

  export const useManagedCourses = (...args: any[]) => {
    const swrRes = enhanceHook(useHooks((hooks:any) => hooks.useManagedCourses)(...args))
  
    return {
      managedCourses: swrRes
    }
  }

export const useWalletInfo = () => {
    const {account} =useAccount()
    const {network} = useNetwork()

    const hasConnectedWallet = !!(account.data && network.isSupported)

    const isConnecting = !account.hasInitialResponse && !network.hasInitialResponse

    return{
        account,
        network,
        isConnecting,
        hasConnectedWallet
    }
}