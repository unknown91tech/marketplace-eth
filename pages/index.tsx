/* eslint-disable @next/next/no-img-element */
import { Breadcrumbs, Footer, Hero, Navbar } from "@/components/ui/common";
import { BaseLayout } from "@/components/ui/layout";
import { EthRates, WalletBar } from "@/components/ui/web3";
import { CourseList } from "@components/ui/course"
import { OrderCard } from "@components/ui/order"
import { getAllCourses } from "@/components/ui/content/courses/fetcher";

export default function Home({courses}:any) {
  return (
    <BaseLayout>

        <Hero />
        
        <CourseList courses={courses}/>

    </BaseLayout>
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