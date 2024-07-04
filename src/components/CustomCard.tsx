import { twMerge } from 'tailwind-merge';

type CustomCardProps = {
  text: string;
  color?: 'pink' | 'blue' | 'yellow';
  iconElement: React.ReactNode;
};

export const CustomCard = ({ text, color = 'pink', iconElement }: CustomCardProps) => {
  const colorPallet = {
    pink: 'bg-pink-200',
    blue: 'bg-blue-400',
    yellow: 'bg-yellow-400',
  };

  return (
    <div className={twMerge('flex size-40 flex-col justify-between rounded-2.5xl p-5 text-white', colorPallet[color])}>
      <span className="text-xl font-bold">{text}</span>
      {iconElement}
    </div>
  );
};
