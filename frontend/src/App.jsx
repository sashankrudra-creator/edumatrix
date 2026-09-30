import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Stem from './pages/Stem';
import Academics from './pages/Academics';
import Schools from './pages/Schools';
import './index.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stem" element={<Stem />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/schools" element={<Schools />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
