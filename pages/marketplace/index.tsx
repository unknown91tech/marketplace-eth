/* eslint-disable react/no-unescaped-entities */

import { CourseCard, CourseList } from "@components/ui/course"
import { BaseLayout } from "@components/ui/layout"
import { getAllCourses } from "@/components/ui/content/courses/fetcher"
import { WalletBar } from "@/components/ui/web3"
import { useAccount } from "@/components/hooks/web3"
import { useNetwork } from "@/components/hooks/web3"


export default function Marketplace({courses}:any) {

    const {account} = useAccount()

    const {network} = useNetwork()
  
  return (
    <>
      <div className="py-4">
        
        <WalletBar
            address= {account.data}
            network={{
              data: network.data,
              target: network.target,
              isSupported: network.isSupported,
              hasInitialResponse: network.hasInitialResponse
            }}
        />
        
      </div>
      <CourseList
        courses={courses}
      >
      {(course: { id: any }) =>
        <CourseCard
          key={course.id}
          course={course}
        />
      }
      </CourseList>
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