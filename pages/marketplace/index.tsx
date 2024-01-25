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

  const {web3} =useWeb3()

  const [selectedCourse , setSelectedCourse] = useState(null)

  const {canPurchaseCourse,account} = useWalletInfo()



  const purchaseCourse = (order: any) => {
    const hexCourseId = web3.utils.utf8ToHex(selectedCourse.id)
    console.log(hexCourseId)

    const orderHash = web3.utils.soliditySha3(
      {type:"bytes16" , value: hexCourseId},
      {type:"address" , value: account.data}
    )
    console.log(orderHash)

    const emailHash = web3.utils.sha3(order.email)

    console.log(emailHash)
    const proof = web3.utils.soliditySha3(
      {type: "bytes32" , value: emailHash},    
      {type: "bytes32" , value: orderHash}
    )
    console.log(proof)
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