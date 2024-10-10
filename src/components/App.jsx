import { useState } from 'react'
import Information from './Information.jsx'
import Education from './Education.jsx'
import Experience from './Experience.jsx'
import Submit from './Submit.jsx'
import Cv from './Cv.jsx'

function App() {
  const [cv, setCv] = useState(false)

  return (
    <>
      <div className='App'>
        {!cv ? (
          <form>
            <Information />
            <Education />
            <Experience />
            <Submit setCv={setCv} />
          </form>
        ) : (
          <Cv />
        )}
      </div>
    </>
  )
}

export default App
