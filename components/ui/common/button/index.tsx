
const SIZE:any = {
    sm: "p-3 text-base xs:px-8",
    md: "p-3 text-base xs:px-8",
    lg: "p-3 text-lg xs:px-8"
  }


export default function Button({
    children,
     className,
     size = "md",
     variant= "purple",
     hoverable= true,
     ...rest
    }:any){

        const sizeClass = SIZE[size]
        const variants:any={
            white:`text-black bg-white ${hoverable &&" hover:transition-transform duration-200"}`,
            purple:`text-indigo-700 bg-indigo-100 ${hoverable &&"hover:bg-indigo-200 hover:transition-transform duration-200 border-0"}`,
            green:`text-green-700 bg-green-100 ${hoverable &&"hover:bg-green-200 hover:transition-transform duration-200 border-0"}`,
            blue:`text-blue-700 bg-blue-100 ${hoverable &&"hover:bg-blue-200 hover:transition-transform duration-200 border-0"}`,
            red: `text-red-700 bg-red-100 ${hoverable &&"hover:bg-red-200 hover:transition-transform duration-200 border-0"}`,
            lightPurple: `text-indigo-700 bg-indigo-100 ${hoverable &&"hover:bg-indigo-200 hover:transition-transform duration-200 border-0"}`
        }
    return (
        <button 
            {...rest}
            
            className={`${sizeClass} disabled:opacity-50 disabled:cursor-not-allowed border rounded-md font-medium ${className} ${variants[variant]}`}>
            {children}
        </button>
    )
}