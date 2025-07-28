// app/page.tsx
'use client';

import CourseGrid from '@/components/CourseGrid';
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function Home() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function fetchCourses() {
      const { data } = await supabase.from('courses').select('*');
      setCourses(data || []);
    }

    fetchCourses();
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold text-yellow-400 mb-6">Available Courses</h1>
      <CourseGrid courses={courses} />
    </main>
  );
}
