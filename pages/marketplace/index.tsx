/* eslint-disable react/no-unescaped-entities */

import { CourseCard, CourseList } from "@components/ui/course"
import { BaseLayout } from "@components/ui/layout"
import { getAllCourses } from "@/components/ui/content/courses/fetcher"
import {  useOwnedCourses, useWalletInfo } from "@/components/hooks/web3"
import {  Button, Loader, Message } from "@/components/ui/common"
import { OrderModal } from "@/components/ui/order"
import { useState } from "react"
import { MarketHeader } from "@/components/ui/marketplace"
import { useWeb3 } from "@/components/providers"
import {OwnedCourses} from "./courses/owned"
import { redirect } from "next/dist/server/api-utils"

export default function Marketplace({courses}:any) {

  const {web3, contract, requireInstall} =useWeb3()
  const [selectedCourse , setSelectedCourse] = useState(null)
  const {hasConnectedWallet, isConnecting , account}:any = useWalletInfo()
  const {ownedCourses} = useOwnedCourses(courses , account.data)


  const purchaseCourse =async (order: any) => {
    const hexCourseId = web3.utils.utf8ToHex(selectedCourse.id)

    const orderHash = web3.utils.soliditySha3(
      {type:"bytes16" , value: hexCourseId},
      {type:"address" , value: account.data}
    )

    const emailHash = web3.utils.sha3(order.email)

    const proof = web3.utils.soliditySha3(
      {type: "bytes32" , value: emailHash},    
      {type: "bytes32" , value: orderHash}
    )

    const value = web3.utils.toWei(String(order.price))
    try{
     const result= await contract.methods.purchaseCourse(
        hexCourseId,
        proof
      ).send({from: account.data, value})

      console.log( result)
    }
    catch{
      console.log("Purchase Course: Opertaion falied!!")
    }



    //courseHash + emailHash
  }

 

  return (
    <>
     
       <MarketHeader/>
      <CourseList
        courses={courses}
      >
      {(course: any) =>
      {
        const owned = ownedCourses.lookup[course.id]
        return(
          <CourseCard
            key={course.id}
            course={course}
            state={owned?.state}
            disabled={!hasConnectedWallet}
            Footer={() =>
              {
                if(requireInstall){
                  return (
                    // <div className="mt-4">
                      <Button variant="lightPurple" 
                              disabled={true}
                              size="sm"
                              >
                        Install
                      </Button>
                    // </div>
                  )
                }

                if(isConnecting){
                  return (
                    // <div className="mt-4">
                      <Button variant="lightPurple" 
                              disabled={true}
                              size="sm"
                              >
                        <Loader size="sm"/>
                      </Button>
                    // </div>
                  )
                }

                if(!ownedCourses.hasInitialResponse){
                  return (
                    <div style={{height: "42px"}}></div>
                  )
                }

                

                if(owned) {
                  return (
                    <>
                    <div className="flex">
                      <Button
                        
                        size="sm"
                        variant="green">
                        Owned <span > &#10003;</span> 
                      </Button>
                      {
                        owned.state ==="deactivated" &&
                        <Button
                        disabled={false}
                        size="sm"
                        onClick={() => alert("Re-activating")}
                        variant="blue">
                        Reactivate
                      </Button>
                      }
                    </div>
                  </>
                )
              }


              return (
                // <div className="mt-4">
                  <Button variant="lightPurple" 
                          disabled={!hasConnectedWallet}
                          size="sm"
                          onClick= {() => setSelectedCourse(course)}
                          >
                    Purchase
                  </Button>
                // </div>
              )
            }
            
          }
        />
        )
      }
      }
      </CourseList>
      { selectedCourse &&
        <OrderModal course={selectedCourse} 
                    onSubmit={purchaseCourse}
                    onClose= {()=> setSelectedCourse(null)} />
      }
    </>
  )
}
export function getStaticProps() {
  const { data } = getAllCourses()
  return {
    props: {
      courses: data
    }
  }
}
Marketplace.Layout = BaseLayout