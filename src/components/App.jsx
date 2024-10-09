import Information from './Information.jsx'
import Education from './Education.jsx'
import Experience from './Experience.jsx'

function App() {
  return (
    <>
      <div className="App">
        <Information />
        <Education />
        <Experience />
      </div>
      <button type="submit" className="btn-submit">
        Submit
      </button>
    </>
  )
}

export default App
