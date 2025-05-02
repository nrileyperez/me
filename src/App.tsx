import Navbar from './components/Navbar'
import Hero from './components/Hero.tsx'
import WorkExperience from './components/WorkExperience.tsx'
import Education from './components/Education'
import Projects from './components/Projects.tsx'
import { portfolioData } from './data/portfolio'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-16">
        <Hero data={portfolioData.personal} />
        <div className="bg-white">
          <WorkExperience data={portfolioData.workExperience} />
        </div>
        <Education data={portfolioData.education} />
        <div className="bg-white">
          <Projects data={portfolioData.projects} />
        </div>
      </main>
    </div>
  )
}

export default App 