import { useEffect, useState } from "react"


const useCounter = () => {
    const [count, setCount] =useState(0)

    useEffect(()=> {
        setInterval(()=> {
            setCount(c=>c+1)
        },1000)
    },[])
    return count
}

const SimpleComponent = () => {
    const count = useCounter()
    return (
        <h1>Simple Component = {count}</h1>
    )
}

export default function Hooks() {
    const count = useCounter()
    return(
        <>
        <h1>Hello - {count}</h1>
        <SimpleComponent/>
        </>
    )
}