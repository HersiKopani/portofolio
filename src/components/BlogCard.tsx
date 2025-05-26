import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
}

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  title,
  excerpt,
  date,
  readTime,
  category,
  image,
  tags,
}) => {
  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'software engineering':
        return 'bg-primary/20 text-primary';
      case 'system design':
        return 'bg-accent/20 text-accent';
      case 'ai':
        return 'bg-success/20 text-success';
      case 'cloud computing':
        return 'bg-warning/20 text-warning';
      default:
        return 'bg-gray-700 text-gray-300';
    }
  };
  
  return (
    <div className="card h-full flex flex-col hover:shadow-glow">
      <div className="relative mb-4">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover rounded-lg"
        />
        <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(category)}`}>
          {category}
        </span>
      </div>
      
      <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
        <div className="flex items-center gap-1">
          <Calendar size={14} />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock size={14} />
          <span>{readTime}</span>
        </div>
      </div>
      
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      
      <p className="text-gray-400 mb-4 flex-grow line-clamp-3">{excerpt}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.slice(0, 3).map((tag, index) => (
          <span 
            key={index} 
            className="text-xs px-2 py-1 bg-background rounded-full text-gray-300"
          >
            {tag}
          </span>
        ))}
        {tags.length > 3 && (
          <span className="text-xs px-2 py-1 bg-background rounded-full text-gray-300">
            +{tags.length - 3}
          </span>
        )}
      </div>
      
      <Link 
        to={`/blogs/${id}`} 
        className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-light group"
      >
        Read More
        <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};

export default BlogCard;