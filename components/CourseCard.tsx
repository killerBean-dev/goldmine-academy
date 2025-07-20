import { motion } from "framer-motion";

interface Props {
  title: string;
  category: string;
  mascotImage: string;
  coinReward: number;
  difficulty: string;
}

export default function CourseCard({
  title,
  category,
  mascotImage,
  coinReward,
  difficulty,
}: Props) {
  return (
    <motion.div
      className="bg-gray-900 text-white rounded-2xl shadow-lg p-4 w-full max-w-sm hover:scale-105 transition-transform duration-300 cursor-pointer"
      whileHover={{ scale: 1.05 }}
    >
      <img
        src={mascotImage}
        alt={title}
        className="w-full h-48 object-cover rounded-xl mb-4"
      />
      <h2 className="text-xl font-bold mb-1">{title}</h2>
      <p className="text-sm text-gray-400">{category} • {difficulty}</p>
      <div className="flex justify-between items-center mt-3">
        <span className="text-yellow-400 font-semibold">⭐ {coinReward} Coins</span>
        <span className="text-xs bg-gray-800 px-2 py-1 rounded">{difficulty}</span>
      </div>
    </motion.div>
  );
}
