import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  center = false,
  className = '',
}) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''} ${className}`}>
      <h2 className="font-bold relative inline-block mb-4">
        {title}
        <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary rounded-full"></span>
      </h2>
      {subtitle && (
        <p className="text-gray-400 max-w-2xl mt-4">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;