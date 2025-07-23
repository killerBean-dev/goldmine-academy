// components/CourseCard.tsx

import React from "react";

export type Course = {
  id: number;
  title: string;
  description: string;
  mascot_image: string;
  coin_reward: number;
};

type Props = {
  course: Course;
};

const CourseCard: React.FC<Props> = ({ course }) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-2xl shadow-lg">
      <img
        src={course.mascot_image}
        alt={course.title}
        className="w-full h-40 object-cover rounded-xl mb-4"
      />
      <h3 className="text-lg font-bold mb-2">{course.title}</h3>
      <p className="text-sm mb-2">{course.description}</p>
      <p className="text-yellow-400 font-semibold">
        🎯 Earn {course.coin_reward} coins
      </p>
    </div>
  );
};

export default CourseCard;
