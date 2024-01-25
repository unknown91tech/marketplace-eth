import { useAccount, useOwnedCourses } from "@/components/hooks/web3";
import { Button, Message } from "@/components/ui/common";
import { getAllCourses } from "@/components/ui/content/courses/fetcher";
import { OwnedCourseCard } from "@/components/ui/course";
import { BaseLayout } from "@/components/ui/layout";
import { MarketHeader } from "@/components/ui/marketplace";


 

 export default function OwnedCourses({courses}:any) {

  const { account } = useAccount()
  const { ownedCourses } = useOwnedCourses(courses, account.data)

    return (
        <>
        {JSON.stringify(ownedCourses.data)}
        <div className="py-4">
        
        <MarketHeader/>
         
       </div>
        <section className="grid grid-cols-1">
        <OwnedCourseCard>
          <Message type="success">
            My custom message!
          </Message>
          <Button>
            Watch the course
          </Button>
        </OwnedCourseCard>
        </section>
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

 OwnedCourses.Layout = BaseLayout