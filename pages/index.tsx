/* eslint-disable @next/next/no-img-element */
import { Breadcrumbs, Footer, Hero, Navbar } from "@/components/common";
import { BaseLayout } from "@/components/layout";
import { EthRates, WalletBar } from "@/components/web3";
import { CourseList } from "@components/course"
import { OrderCard } from "@components/order"

export default function Home() {
  return (
    <BaseLayout>

        <Hero />
        <Breadcrumbs />
        <WalletBar />
        <EthRates />
        <OrderCard />
        <CourseList />

    </BaseLayout>
  )
}