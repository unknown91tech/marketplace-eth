import courses from "./index.json";

interface Course {
  id: string;
  [key: string]: any;
}

interface CourseMap {
  [id: string]: Course & { index: number };
}

export const getAllCourses = (): { data: Course[]; courseMap: CourseMap } => {
  return {
    data: courses,
    courseMap: courses.reduce((a: CourseMap, c: Course, i: number) => {
      a[c.id] = { ...c, index: i }
      return a
    }, {} as CourseMap)
  }
}
