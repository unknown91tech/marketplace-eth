import Link from "next/link";
import { ActiveLink } from "@components/ui/common";
import React from "react"

const BreadcrumbItem = ({item, index}:any) => {
  return (
    <li
      className={`${index == 0 ? "pr-4" : "px-4"} font-medium text-gray-500 hover:text-gray-900`}>
      <ActiveLink href={item.href}>
        <a>
          {item.value}
        </a>
      </ActiveLink>
    </li>
  )
}


export default function Breadcrumbs({items, isAdmin}:any) {

    return (
      <nav aria-label="breadcrumb" >
        <ol className="flex leading-none text-indigo-600 divide-x divide-indigo-400">
        { items.map((item: { href: React.Key | null | undefined; requireAdmin: any; }, i: any) =>
          <React.Fragment key={item.href}>
          { !item.requireAdmin &&
            <BreadcrumbItem
              item={item}
              index={i}
            />
          }
          { item.requireAdmin && isAdmin &&
            <BreadcrumbItem
              item={item}
              index={i}
            />
          }
        </React.Fragment>
        )}
        </ol>
      </nav>
    )
  }