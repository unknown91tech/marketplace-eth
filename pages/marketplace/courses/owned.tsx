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
        <MarketHeader/>

        <section className="grid grid-cols-1">
          {ownedCourses.data?.map((course:any) => 
              <OwnedCourseCard 
                key= {course.id}
                course ={course}
              >
              
              <Button>
                Watch the course
              </Button>
            </OwnedCourseCard>
          )}
        
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