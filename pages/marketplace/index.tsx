/* eslint-disable react/no-unescaped-entities */

import { CourseCard, CourseList } from "@components/ui/course"
import { BaseLayout } from "@components/ui/layout"
import { getAllCourses } from "@/components/ui/content/courses/fetcher"
import {  useWalletInfo } from "@/components/hooks/web3"
import {  Button } from "@/components/ui/common"
import { OrderModal } from "@/components/ui/order"
import { useState } from "react"
import { MarketHeader } from "@/components/ui/marketplace"
import { useWeb3 } from "@/components/providers"

export default function Marketplace({courses}:any) {

  const {web3, contract} =useWeb3()

  const [selectedCourse , setSelectedCourse] = useState(null)

  const {canPurchaseCourse,account} = useWalletInfo()



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
      <div className="py-4">
        
       <MarketHeader/>
        
      </div>
      <CourseList
        courses={courses}
      >
      {(course: any) =>
        <CourseCard
          key={course.id}
          course={course}
          disabled={!canPurchaseCourse}
          Footer={() =>
            <div className="mt-4">
              <Button variant="lightPurple " 
                      disabled={!canPurchaseCourse}
                      onClick= {() => setSelectedCourse(course)}
                      >
                Purchase
              </Button>
            </div>
          }
        />
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