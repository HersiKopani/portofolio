import React from 'react';

interface StatCardProps {
  count: number;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ count, title, description, icon }) => {
  return (
    <div className="card hover:shadow-glow group">
      <div className="flex items-start gap-4">
        {icon && (
          <div className="p-3 bg-primary/20 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
            {icon}
          </div>
        )}
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">{count}</h3>
          <p className="text-lg font-medium text-primary mb-2">{title}</p>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default StatCard;