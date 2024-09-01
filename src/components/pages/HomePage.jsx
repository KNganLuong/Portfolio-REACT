import Header from '../Header/index'
import About from '../About'
import Resume from '../Resume'
import Portfolio from '../Portfolio/index'
import Footer from '../Footer'
import resumeData from '../datas/resumeData'

const HomePage = () => {
  return (
    <div>
      <Header />
      <main>
        <About resumeData={resumeData} />
        <Resume resumeData={resumeData} />
        <Portfolio resumeData={resumeData} />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
