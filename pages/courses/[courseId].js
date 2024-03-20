import React from 'react'
import { useRouter } from 'next/router'
import { AllCourses } from '@/components/Data';
import CourseDetail from '@/components/CourseDetail';

function Course() {
    const router = useRouter();
    const exactId = router.query.courseId;
    const exactCourse = AllCourses.filter((course) => {
      if(course.id == exactId){
        return course;
      }
    }) 
    if(!exactId || !exactCourse){
      return (<h1 style={{textAlign:'center'}}>Loading...</h1>)
    } 
  return (
    <div>
        <CourseDetail data={exactCourse}/>
    </div>
  )
}

export default Course