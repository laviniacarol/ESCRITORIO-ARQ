import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// PAGES
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

// UTILS
import ScrollToTop from './utils/ScrollTop'

// CONTEXT
import { AppProvider } from './contexts/AppContext'

function App() {
  return (
    <AppProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </AppProvider>
  )
}

export default App
