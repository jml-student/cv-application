import Information from './Information.jsx'
import Education from './Education.jsx'
import Experience from './Experience.jsx'
import Submit from './Submit.jsx'

function App() {
  return (
    <>
      <div className='App'>
        <form>
          <Information />
          <Education />
          <Experience />
          <Submit />
        </form>
      </div>
    </>
  )
}

export default App
