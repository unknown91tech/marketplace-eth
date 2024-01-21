/* eslint-disable @next/next/no-img-element */

import { Key} from "react";

import { CourseCard } from "..";


export default function List({courses, children}:any) {
  return (
    <section className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 mb-5">
      { courses.map((course: {
        slug: any; id: Key | null ;
                               coverImage: string ; 
                              title: string; 
                              type: string | number ; 
                              description: string | number |null ; }) =>
        children(course)
      )}
    </section>
  )
}