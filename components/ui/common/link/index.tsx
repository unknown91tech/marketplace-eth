
import Link from "next/link"
import React from "react"
import { useRouter } from "next/router"

export default function ActiveLink({children, activeLinkClass, ...props}:any) {
  const { pathname } = useRouter()
  let className = children.props.className || ""

  if (pathname === props.href) {
    className = `${className} ${activeLinkClass ? activeLinkClass : ""}`
  }

  return (
    <Link href={""} {...props} legacyBehavior>
      {
        React.cloneElement(children, {className})
      }
    </Link>
  )
}