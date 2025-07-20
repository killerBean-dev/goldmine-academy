interface Course {
  id: number;
  title: string;
  description: string;
  category: string;
  coin_reward: number;
  video_url: string;
  mascot_image: string;
}

type Props = {
  course: Course;
};

export default function CourseCard({ course }: Props) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md text-white">
      <img
        src={course.mascot_image}
        alt={course.title}
        className="w-full h-40 object-cover rounded-md mb-2"
      />
      <h2 className="text-xl font-semibold">{course.title}</h2>
      <p className="text-sm">{course.description}</p>
      <p className="mt-2 text-yellow-400">Reward: {course.coin_reward} coins</p>
      <a
        href={course.video_url}
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-2 text-blue-400 underline"
      >
        Watch Video
      </a>
    </div>
  );
}
