import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WorkExperience from './components/WorkExperience'
import Education from './components/Education'
import Projects from './components/Projects'
import { portfolioData } from './data/portfolio'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <Navbar />
      <main className="pt-16 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero data={portfolioData.personal} />
        <div className="bg-white rounded-lg shadow-sm my-8">
          <WorkExperience data={portfolioData.workExperience} />
        </div>
        <Education data={portfolioData.education} />
        <div className="bg-white rounded-lg shadow-sm my-8">
          <Projects data={portfolioData.projects} />
        </div>
      </main>
    </div>
  )
}

export default App 