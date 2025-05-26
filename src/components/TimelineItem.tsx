import React from 'react';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  year, 
  title, 
  description, 
  icon,
  isLast = false
}) => {
  return (
    <div className="flex">
      <div className="flex flex-col items-center mr-4">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white">
          {icon ? icon : year.substring(2)}
        </div>
        {!isLast && <div className="w-px h-full bg-gray-700 mt-2"></div>}
      </div>
      <div className={`pb-8 ${isLast ? '' : 'border-l border-transparent'}`}>
        <p className="text-sm text-primary font-medium mb-1">{year}</p>
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;