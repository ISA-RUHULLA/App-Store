import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import AllApps from './pages/AllApps'
import AppDetails from './pages/AppDetails'
import Installation from './pages/Installation'
import ErrorPage from './pages/ErrorPage'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Toaster } from 'react-hot-toast'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apps" element={<AllApps />} />
        <Route path="/apps/:id" element={<AppDetails />} />
        <Route path="/installation" element={<Installation />} />
        <Route path="*" element={<ErrorPage />} />        
        <Route path="/apps" element={<NotFoundPage />} />        
      </Routes>
      <Footer />
      <Toaster/>
    </>
  )
}

export default App

