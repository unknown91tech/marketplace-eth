
import { Hero , QrCode , Message} from "@components/ui/common"
import { CourseCard, CourseHero, CourseList, ManagedCourseCard  } from "@components/ui/course"
import { BaseLayout } from "@components/ui/layout"
import { getAllCourses } from "@/components/ui/content/courses/fetcher"
import { useAccount, useOwnedCourse } from "@/components/hooks/web3"
import {Card, CardFooter, Image, Button, CardBody, CardHeader, Divider, Link} from "@nextui-org/react";
import { OwnedCourseCard } from "@/components/ui/course";
import { useRouter } from "next/router"
import { createCourseHash } from "@/utils/hash"
import web3 from "web3"
import { normalizeOwnedCourse } from "@/utils/normalize"
import {Code} from "@nextui-org/react";


export default function Home({courses}:any) {
  const {account} = useAccount()
  const { ownedCourse } = useOwnedCourse(courses, account.data)


  const router = useRouter()
  const isAdmin = account.isAdmin;
  const isManufacturer =account.isManufacturer;


  return (
    <>
    
    {
      isAdmin ? 
      <>
      <div className=" font-extrabold justify-center items-center  py-10">
        <h1 className=" text-center text-6xl">
          Hello Admin
        </h1>
      </div>
      <CourseList
          courses={courses}
        >
          {(course: { id: any} ) => <CourseCard
            key={course.id}
            course={course} />}

        </CourseList>
      </>
        :
        isManufacturer ?
        <>
        
          <Card className="w-full mt-3">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">Logo</p>
          <p className="text-small text-default-500">logoqrcode.org</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        {/* <p className="text">Scan this QR Code to verify   */}
          <div className="mt-2">
          
          </div>


        {/* </p> */}
        <QrCode course={courses} />
      </CardBody>
      <Divider/>
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter>
    </Card>
        
       
    <div className=" mb-64">

    </div>
        </>
        : 
        <>
        <Hero /><CourseList
              courses={courses}
            >
              {(course: { id: any} ) => <CourseCard
                key={course.id}
                course={course} />}

            </CourseList>
        </>
        

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
Home.Layout = BaseLayout