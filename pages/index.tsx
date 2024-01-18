/* eslint-disable @next/next/no-img-element */
import { Breadcrumbs, Footer, Hero, Navbar } from "@/components/common";
import { BaseLayout } from "@/components/layout";
import { EthRates, WalletBar } from "@/components/web3";
import { CourseList } from "@components/course"
import { OrderCard } from "@components/order"
import { getAllCourses } from "@/components/content/courses/fetcher";

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