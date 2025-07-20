import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import CourseCard from "./CourseCard";

interface Course {
  id: number;
  title: string;
  category: string;
  mascot_image: string;
  coin_reward: number;
  difficulty: string;
}

export default function CourseGrid() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCourses() {
      const { data, error } = await supabase.from("courses").select("*");
      if (error) console.error("Error loading courses:", error);
      else setCourses(data || []);
      setLoading(false);
    }

    fetchCourses();
  }, []);

  if (loading) return <p className="text-white text-center">Loading courses...</p>;

  return (
    <div className="min-h-screen bg-black text-white px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Available Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            title={course.title}
            category={course.category}
            mascotImage={course.mascot_image}
            coinReward={course.coin_reward}
            difficulty={course.difficulty}
          />
        ))}
      </div>
    </div>
  );
}
