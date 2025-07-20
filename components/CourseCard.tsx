// components/CourseCard.tsx

import React from "react";

interface Course {
  id: number;
  title: string;
  description: string;
  category: string;
  coin_reward: number;
  video_url: string;
  mascot_image: string;
}

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden p-4">
      <img
        src={course.mascot_image}
        alt="Mascot"
        className="w-full h-40 object-contain mb-4"
      />
      <h2 className="text-xl font-bold mb-2">{course.title}</h2>
      <p className="text-gray-600 text-sm mb-2">{course.description}</p>
      <p className="text-xs text-indigo-600 font-semibold">
        Category: {course.category} • Reward: {course.coin_reward} coins
      </p>
      <a
        href={course.video_url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 text-sm text-white bg-indigo-600 px-3 py-1 rounded-xl"
      >
        Watch Video
      </a>
    </div>
  );
};

export default CourseCard;
