"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import CourseCard from "./CourseCard";

interface Course {
  id: number;
  title: string;
  description: string;
  category: string;
  coin_reward: number;
  video_url: string;
  mascot_image: string;
}

export default function CourseGrid() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCourses() {
      const { data, error } = await supabase.from("courses").select("*");
      if (error) {
        console.error("Error fetching courses:", error.message);
      } else {
        setCourses(data || []);
      }
      setLoading(false);
    }
    fetchCourses();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-white text-2xl font-bold mb-4">Available Courses</h1>
      {loading ? (
        <p className="text-white">Loading...</p>
      ) : courses.length === 0 ? (
        <p className="text-white">No courses found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}
    </div>
  );
}

