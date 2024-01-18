

import { Navbar, Footer } from "@components/common"

export default function BaseLayout({children}:any) {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4">
        <Navbar />
        <div className="fit">
          {children}
        </div>
      </div>
      <Footer />
    </>
  )
}