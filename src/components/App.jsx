import { useState } from 'react'
import Information from './Information.jsx'
import Education from './Education.jsx'
import Experience from './Experience.jsx'
import Submit from './Submit.jsx'
import Cv from './Cv.jsx'

function App() {
  const [cv, setCv] = useState({
    cv: false,
    information: [],
    education: [],
    experience: [],
  })

  return (
    <>
      <div className='App'>
        {!cv.cv ? (
          <form>
            <Information setCv={setCv} />
            <Education setCv={setCv} />
            <Experience setCv={setCv} />
            <Submit setCv={setCv} />
          </form>
        ) : (
          <Cv cv={cv} />
        )}
      </div>
    </>
  )
}

export default App
