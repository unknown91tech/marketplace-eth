
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
            purple:`text-white bg-indigo-600 ${hoverable &&"hover:bg-indigo-700 hover:transition-transform duration-200"}`,
            green:`text-white bg-green-600 ${hoverable &&"hover:bg-green-700 hover:transition-transform duration-200"}`,
            blue:`text-white bg-blue-600 ${hoverable &&"hover:bg-blue-700 hover:transition-transform duration-200"}`,
            red: `text-white bg-red-600 ${hoverable &&"hover:bg-red-700 hover:transition-transform duration-200"}`,
            lightPurple: `text-indigo-700 bg-indigo-100 ${hoverable &&"hover:bg-indigo-200 hover:transition-transform duration-200"}`
        }
    return (
        <button 
            {...rest}
            
            className={`${sizeClass} disabled:opacity-50 disabled:cursor-not-allowed border rounded-md font-medium ${className} ${variants[variant]}`}>
            {children}
        </button>
    )
}