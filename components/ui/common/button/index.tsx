


export default function Button({children,
     className="text-white bg-indigo-600 hover:bg-indigo-700 hover:transition-transform duration-200",
     ...rest
    }:any){
    return (
        <button 
            {...rest}
            
            className={`disabled:opacity-50 disabled:cursor-not-allowed rounded-md px-8 py-3 border text-base font-medium ${className}`}>
            {children}
        </button>
    )
}