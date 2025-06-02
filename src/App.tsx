import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Blogs from './pages/Blogs';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCnhMULda_zQR8pBSB9wPSvx4UreaZNDkw",
  authDomain: "portofolio-b6d8f.firebaseapp.com",
  projectId: "portofolio-b6d8f",
  storageBucket: "portofolio-b6d8f.firebasestorage.app",
  messagingSenderId: "734206212274",
  appId: "1:734206212274:web:3bfe6ccd7b7e7c4ccdf1ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;