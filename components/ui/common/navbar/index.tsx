
import { useWeb3 } from "@components/providers"

import { ActiveLink } from "@components/ui/common"
import { useAccount } from "@components/hooks/web3"
import { useRouter } from "next/router"
import { CiSquarePlus } from "react-icons/ci";
import {Switch} from "@nextui-org/react";



import React from "react";
import {Dropdown, Link, DropdownTrigger, DropdownMenu, DropdownItem, Button, DropdownSection, User} from "@nextui-org/react";

export default function Navbar() {
  const { connect, isLoading, requireInstall }:any = useWeb3()
  const { account } = useAccount()
  const { pathname } = useRouter()
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["Theme"]));

  const isManufacturer = account.isManufacturer;

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );
  
  return (
    <section>
      <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
        <nav className="relative" aria-label="Global">
          <div className="flex flex-col xs:flex-row justify-between items-center">
            <div>
              <ActiveLink href="/" >
              <Button  color="primary" variant="light"  className=" font-medium"  disableRipple>Home</Button>
              </ActiveLink>
              {/* {
                isManufacturer ?
                <>
                  <span className="inline-flex rounded-md shadow-sm ml-2"></span>
                </>
                : */}
                  <ActiveLink href="/marketplace" >
                <Button  color="primary" variant="light" className="mx-2 font-medium" disableRipple>Marketplace</Button>
                </ActiveLink>
              {/* } */}
              
              
            </div>
            <div className="text-center flex flex-row justify-between items-center">
              <ActiveLink href="/wishlist" >
              <Button  color="primary" variant="light"  className="mx-2 font-medium" disableRipple>
                  Wishlist
                  </Button>
              </ActiveLink>
              { isLoading ?
                <Button radius="full" variant="light" className="bg-gradient-to-tr from-blue-500 to-purple-500 text-white shadow-lg"
                  disabled={true}
                  onClick={connect}>
                    Loading...
                </Button> :
                account.data ?
                <div
                  >
                  <Dropdown
                  backdrop="blur"
                  shouldCloseOnInteractOutside={true}
                      showArrow
                      radius="sm"
                      classNames={{
                        base: "before:bg-default-200", // change arrow background
                        content: "p-0 border-small border-divider bg-background",
                      }}
                    >
                      <DropdownTrigger>
                        <Button  color="success" className="text-white" disableRipple>Open Menu</Button>
                      </DropdownTrigger>
                      <DropdownMenu
                        aria-label="Custom item styles"
                        disabledKeys={["profile"]}
                        className="p-3"
                        onAction={(key) => alert(key)}
                        itemClasses={{
                          base: [
                            "rounded-md",
                            "text-default-500",
                            "transition-opacity",
                            "data-[hover=true]:text-foreground",
                            "data-[hover=true]:bg-default-100",
                            "dark:data-[hover=true]:bg-default-50",
                            "data-[selectable=true]:focus:bg-default-50",
                            "data-[pressed=true]:opacity-70",
                            "data-[focus-visible=true]:ring-default-500",
                          ],
                        }}
                      >
                        <DropdownSection aria-label="Profile & Actions" showDivider>
                          <DropdownItem
                            isReadOnly
                            key="profile"
                            className="h-14 gap-2 opacity-100"
                            
                          >
                            <User
                              name="Jay Koart"
                              description="@jaykorat"
                              classNames={{
                                name: "text-default-600",
                                description: "text-default-500",
                              }}
                              avatarProps={{
                                size: "sm",
                                src: "",
                              }}
                            />
                          </DropdownItem>
                          <DropdownItem key="dashboard">
                            Dashboard
                          </DropdownItem>
                          <DropdownItem key="settings">Settings</DropdownItem>
                          <DropdownItem
                            key="new_project"
                            endContent={<CiSquarePlus />}
                          >
                            New Project
                          </DropdownItem>
                        </DropdownSection>

                        <DropdownSection aria-label="Preferences" showDivider>
                          <DropdownItem key="quick_search" shortcut="⌘K">
                            Quick search
                          </DropdownItem>
                          <DropdownItem>
                          <Dropdown>
                                <DropdownTrigger>
                                  <Button 
                                    variant="bordered" 
                                    className="capitalize"
                                  >
                                    {selectedValue}
                                  </Button>
                                </DropdownTrigger>
                                <DropdownMenu 
                                  aria-label="Single selection example"
                                  variant="flat"
                                  disallowEmptySelection
                                  selectionMode="single"
                                  selectedKeys={selectedKeys}
                                  onSelectionChange={setSelectedKeys}
                                >
                                  <DropdownItem key="text"> System</DropdownItem>
                                  <DropdownItem key="number"> Dark</DropdownItem>
                                  <DropdownItem key="date">Light</DropdownItem>
                                  
                                </DropdownMenu>
                              </Dropdown>
                          </DropdownItem>
                          
                        </DropdownSection>  
                        

                        <DropdownSection aria-label="Help & Feedback">
                          <DropdownItem key="help_and_feedback">
                            Help & Feedback
                          </DropdownItem>
                          <DropdownItem key="logout">Log Out</DropdownItem>
                        </DropdownSection> 
                      </DropdownMenu>
                    </Dropdown>
                  
                </div> :
                requireInstall ?
                <Button radius="full" className="bg-gradient-to-tr from-blue-500 to-purple-500 text-white shadow-lg"
                  onClick={() => window.open("https://metamask.io/download.html", "_blank")}>
                  Install Metamask
                </Button> :
                <Dropdown backdrop="blur">
                <DropdownTrigger>
                  <Button 
                    variant="bordered" 
                  >
                    Connect
                  </Button>
                </DropdownTrigger>
                <DropdownMenu variant="faded" aria-label="Static Actions">
                  <DropdownItem key="new" onClick={connect}>Register as Manufacturer</DropdownItem>
                  <DropdownItem key="copy" onClick={connect}>Register as User</DropdownItem>
                  <DropdownItem key="edit" onClick={connect}>Switch</DropdownItem>
                  <DropdownItem key="delete" className="text-danger" color="danger" >
                    Log out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              }
             
            </div>
          </div>
        </nav>
      </div>
      {/* { account.data &&
        !pathname.includes("/marketplace") &&
        <div className="flex justify-end pt-1 sm:px-6 lg:px-8">
          <div className="text-white bg-indigo-600 rounded-md p-2">
            {account.data}
          </div>
        </div>
      } */}
    </section>
  )
}