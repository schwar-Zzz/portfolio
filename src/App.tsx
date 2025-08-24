// import { useState } from 'react'
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Hero from './components/Hero.tsx';
import Navbar from './components/Navbar.tsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function LandingPageLayout({ children }: { children: React.ReactNode }) {
  // const location = useLocation();
  return (
    <main className="relative w-full lg:h-screen p-0 sm:p-5 bg-black">
    <div className="w-full h-full rounded-2xl sm:border sm:border-white/20 flex flex-wrap justify-between lg:divide-x lg:divide-white/20">
      {/* Left Column - Hero Section */}
      <div className="w-full lg:w-2/5 p-2 md:p-8 lg:h-full lg:overflow-y-hidden">
        <Hero />
      </div>
      
      {/* Right Column - Navigation & Content */}
      <div className="relative w-full mt-3 max-w-4xl mx-auto lg:mt-0 lg:h-full lg:w-3/5 p-2 md:p-8 lg:overflow-y-scroll">
        <Navbar />
        {children}
      </div>
    </div>
  </main>
  );
}




// components with routes
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <LandingPageLayout>
              <Experience />
            </LandingPageLayout>
          } />
          <Route path="/projects" element={
            <LandingPageLayout>
              <Projects />
            </LandingPageLayout>
          } />
        </Routes>
      </div>
    </Router>
  )
}

export default App
