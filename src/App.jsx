import Header from './components/Header'
import About from './components/About'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio/index'

import Footer from './components/Footer'
import resumeData from './components/datas/resumeData'

function App() {
  return (
    <div className='App'>
      <Header resumeData={resumeData} />
      <About resumeData={resumeData} />
      <Resume resumeData={resumeData} />
      <Portfolio resumeData={resumeData} />
      <Footer resumeData={resumeData} />
    </div>
  )
}

export default App
