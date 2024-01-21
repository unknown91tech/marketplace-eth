


export default function Button({children,
     className="text-white bg-indigo-600 hover:bg-indigo-700 hover:transition-transform duration-200",
     ...rest
    }:any){
    return (
        <span 
            {...rest}
            className={`rounded-md px-8 py-3 border text-base font-medium ${className}`}>
            {children}
        </span>
    )
}