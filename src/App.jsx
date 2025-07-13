import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// PAGES
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

// COMPONENTS
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'

// CONTEXT
import { AppProvider, AppContext } from './contexts/AppContext'

// UTILS
import ScrollToTop from './utils/ScrollTop'
import { useContext } from 'react'

function AppRoutes() {
  const { loading } = useContext(AppContext)

  if (loading) return <LoadingSpinner />

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  )
}

export default App
