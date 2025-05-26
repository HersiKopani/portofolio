export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: 'Software Engineering' | 'System Design' | 'AI' | 'Cloud Computing';
  image: string;
  tags: string[];
  author: {
    name: string;
    avatar: string;
  };
  relatedPosts?: string[];
}

const blogsData: Blog[] = [
  {
    id: 'react-performance-optimization',
    title: 'Advanced React Performance Optimization Techniques',
    excerpt: 'Discover proven strategies to significantly improve your React application\'s performance, from component optimization to efficient state management.',
    content: `
# Advanced React Performance Optimization Techniques

React has become the go-to library for building user interfaces, but as applications grow in complexity, performance can suffer. In this comprehensive guide, I'll share advanced optimization techniques that have helped me build lightning-fast React applications.

## Understanding React's Rendering Mechanism

Before diving into optimization techniques, it's crucial to understand how React's rendering process works. React uses a virtual DOM to efficiently update the actual DOM. When state changes, React:

1. Creates a new virtual DOM representation
2. Compares it with the previous one (diffing)
3. Updates only the necessary parts of the actual DOM

However, this process can become costly in complex applications. Let's explore how to optimize it.

## Component Memoization with React.memo

\`\`\`jsx
// Before optimization
const UserProfile = (props) => {
  // Component logic
  return <div>{/* JSX */}</div>;
};

// After optimization
const UserProfile = React.memo((props) => {
  // Component logic
  return <div>{/* JSX */}</div>;
});
\`\`\`

React.memo prevents unnecessary re-renders by doing a shallow comparison of props. For more complex props, you can provide a custom comparison function:

\`\`\`jsx
const arePropsEqual = (prevProps, nextProps) => {
  return prevProps.id === nextProps.id && prevProps.name === nextProps.name;
};

const UserProfile = React.memo((props) => {
  // Component logic
}, arePropsEqual);
\`\`\`

## Optimization with useMemo and useCallback

### useMemo for Expensive Calculations

\`\`\`jsx
const sortedUsers = useMemo(() => {
  console.log("Sorting users...");
  return [...users].sort((a, b) => a.name.localeCompare(b.name));
}, [users]);
\`\`\`

### useCallback for Stable Function References

\`\`\`jsx
const handleUserUpdate = useCallback((userId, data) => {
  updateUser(userId, data);
}, [updateUser]);
\`\`\`

## Code Splitting and Lazy Loading

Reduce your initial bundle size by splitting your code and loading components only when needed:

\`\`\`jsx
import React, { Suspense, lazy } from 'react';

const Dashboard = lazy(() => import('./Dashboard'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Dashboard />
    </Suspense>
  );
}
\`\`\`

## Virtualized Lists for Large Datasets

When rendering large lists, use virtualization libraries like \`react-window\` or \`react-virtualized\`:

\`\`\`jsx
import { FixedSizeList } from 'react-window';

const UserList = ({ users }) => {
  const Row = ({ index, style }) => (
    <div style={style}>
      {users[index].name}
    </div>
  );

  return (
    <FixedSizeList
      height={500}
      width={300}
      itemCount={users.length}
      itemSize={50}
    >
      {Row}
    </FixedSizeList>
  );
};
\`\`\`

## Optimizing Context API Usage

Context API is powerful but can cause performance issues if not used correctly:

\`\`\`jsx
// Split your contexts based on update frequency
const UserDataContext = createContext();
const ThemeContext = createContext();

// Use context selectors to prevent unnecessary re-renders
function useUserName() {
  const { userName } = useContext(UserContext);
  return userName;
}
\`\`\`

## Profiling and Measuring Performance

Use React's built-in Profiler API and browser developer tools to identify performance bottlenecks:

\`\`\`jsx
import { Profiler } from 'react';

const onRenderCallback = (
  id, // the "id" prop of the Profiler tree
  phase, // "mount" or "update"
  actualDuration, // time spent rendering
  baseDuration, // estimated time for the entire subtree
  startTime, // when React began rendering
  commitTime // when React committed the updates
) => {
  console.log({
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime
  });
};

<Profiler id="UserList" onRender={onRenderCallback}>
  <UserList users={users} />
</Profiler>
\`\`\`

## Conclusion

Optimizing React applications requires a combination of techniques and a good understanding of React's internals. By applying these advanced optimization strategies, you can significantly improve your application's performance, leading to better user experience and potentially higher conversion rates.

Remember, premature optimization is the root of all evil. Always measure first, then optimize where necessary.
`,
    date: 'May 15, 2023',
    readTime: '10 min read',
    category: 'Software Engineering',
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['React', 'Performance', 'JavaScript', 'Web Development', 'Optimization'],
    author: {
      name: 'Hersi K.',
      avatar: 'https://imags-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    relatedPosts: ['state-management-comparison', 'frontend-architecture-patterns']
  },
];

export const getBlog = (id: string): Blog | undefined => {
  return blogsData.find(blog => blog.id === id);
};

export const getRelatedBlogs = (blogId: string): Blog[] => {
  const blog = getBlog(blogId);
  if (!blog || !blog.relatedPosts || blog.relatedPosts.length === 0) {
    // If no related posts are specified, return blogs in the same category
    return getRandomBlogs(3, [blogId]);
  }
  
  return blog.relatedPosts
    .map(id => getBlog(id))
    .filter((blog): blog is Blog => blog !== undefined);
};

export const getRandomBlogs = (count: number, excludeIds: string[] = []): Blog[] => {
  const filteredBlogs = blogsData.filter(blog => !excludeIds.includes(blog.id));
  const shuffled = [...filteredBlogs].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export default blogsData