


export default function Button({children,
     className,
     variant= "purple",
     hoverable= true,
     ...rest
    }:any){

        const variants:any={
            white:`text-black bg-white ${hoverable &&" hover:transition-transform duration-200"}`,
            purple:`text-white bg-indigo-600 ${hoverable &&"hover:bg-indigo-700 hover:transition-transform duration-200"}`,
            green:`text-white bg-green-600 ${hoverable &&"hover:bg-green-700 hover:transition-transform duration-200"}`,
            red: `text-white bg-red-600 ${hoverable &&"hover:bg-red-700 hover:transition-transform duration-200"}`,
            lightPurple: `text-indigo-700 bg-indigo-100 ${hoverable &&"hover:bg-indigo-200 hover:transition-transform duration-200"}`
        }
    return (
        <button 
            {...rest}
            
            className={`disabled:opacity-50 disabled:cursor-not-allowed rounded-md xs:px-8 xs:py-3 p-2 border text-base font-medium ${className} ${variants[variant]}`}>
            {children}
        </button>
    )
}