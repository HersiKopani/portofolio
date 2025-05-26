import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import BlogCard from '../components/BlogCard';
import { getBlog, getRelatedBlogs } from '../data/blogsData';
import Markdown from 'react-markdown';

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  
  const blog = getBlog(id || '');
  const relatedBlogs = getRelatedBlogs(id || '');
  
  useEffect(() => {
    if (!blog) {
      navigate('/blogs', { replace: true });
      return;
    }
    
    // Simulate loading for smooth transitions
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);
    
    // Update document title
    document.title = `${blog.title} - Hersi K.`;
    
    return () => {
      clearTimeout(timer);
      document.title = 'Hersi K. - Portfolio';
    };
  }, [blog, navigate]);
  
  if (loading || !blog) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  
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
    <div className="min-h-screen pt-24">
      {/* Blog Header */}
      <section className="py-12 bg-background-dark/70">
        <div className="container-custom">
          <Link to="/blogs" className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors">
            <ArrowLeft size={16} className="mr-2" />
            Back to Blogs
          </Link>
          
          <div className="max-w-4xl mx-auto text-center">
            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${getCategoryColor(blog.category)}`}>
              {blog.category}
            </span>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {blog.title}
            </h1>
            
            <div className="flex items-center justify-center gap-6 text-gray-400 mb-8">
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2" />
                <span>{blog.readTime}</span>
              </div>
            </div>
            
            <div className="w-full h-96 rounded-xl overflow-hidden mb-8">
              <img 
                src={blog.image} 
                alt={blog.title} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img 
                  src={blog.author.avatar} 
                  alt={blog.author.name}
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="text-left">
                <p className="font-medium">{blog.author.name}</p>
                <p className="text-sm text-gray-400">Author</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg prose-invert max-w-none">
              <Markdown>
                {blog.content}
              </Markdown>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-800">
              <div className="flex items-center flex-wrap gap-3">
                <Tag size={18} className="text-gray-400 mr-2" />
                {blog.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-background-light rounded-full text-sm text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Posts */}
      {relatedBlogs.length > 0 && (
        <section className="py-16 bg-background-dark/50">
          <div className="container-custom">
            <SectionHeading 
              title="Related Articles"
              subtitle="You might also be interested in these posts"
              center
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedBlogs.map((relatedBlog, index) => (
                <BlogCard 
                  key={index}
                  id={relatedBlog.id}
                  title={relatedBlog.title}
                  excerpt={relatedBlog.excerpt}
                  date={relatedBlog.date}
                  readTime={relatedBlog.readTime}
                  category={relatedBlog.category}
                  image={relatedBlog.image}
                  tags={relatedBlog.tags}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogDetail;