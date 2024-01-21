

export const useAccount = (web3: any) => () =>{
    return{
        account:web3? "Test acc" :"null"
    }
}