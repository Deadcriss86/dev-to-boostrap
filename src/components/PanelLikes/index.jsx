import { MessageCircle as MessageCircleIcon, Heart, Save } from 'react-feather';

const likesData = [
  { Icon: MessageCircleIcon, count: 69 },
  { Icon: Heart, count: 63 },
  { Icon: Save, count: 25 }
];

export default function Likes() {
  return (
    <div className="flex flex-col items-center space-y-4 justify-content-center">
      {likesData.map((like, index) => (
        <div key={index} className="flex flex-col items-center py-2 px-1 mx-0">
          <like.Icon className="text-gray-400 h-6 w-6" />
          <span className="text-sm font-medium p-1">{like.count}</span>
        </div>
      ))}
      <div className="flex space-x-1">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="h-2 w-2 rounded-full bg-gray-400" />
        ))}
      </div>
    </div>
  );
}
