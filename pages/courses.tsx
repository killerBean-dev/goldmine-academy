import Head from "next/head";
import CourseGrid from "@/components/CourseGrid";

export default function CoursesPage() {
  return (
    <>
      <Head>
        <title>Courses – GoldMine Academy</title>
      </Head>
      <CourseGrid />
    </>
  );
}
