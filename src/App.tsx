import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WorkExperience from './components/WorkExperience'
import Education from './components/Education'
import Projects from './components/Projects'
import { portfolioData } from './data/portfolio'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero data={portfolioData.personal} />
        <WorkExperience data={portfolioData.workExperience} />
        <Education data={portfolioData.education} />
        <Projects data={portfolioData.projects} />
      </div>
    </div>
  )
}

export default App 