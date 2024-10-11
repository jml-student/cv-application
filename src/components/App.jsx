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
    education: [{ school: '', title: '', date: '' }],
    experience: [
      { company: '', title: '', responsability: '', from: '', to: '' },
    ],
  })

  return (
    <>
      <div className='App'>
        {!cv.cv ? (
          <form>
            <Information cv={cv} setCv={setCv} />
            <Education cv={cv} setCv={setCv} />
            <Experience cv={cv} setCv={setCv} />
            <Submit cv={cv} setCv={setCv} />
          </form>
        ) : (
          <Cv cv={cv} setCv={setCv} />
        )}
      </div>
    </>
  )
}

export default App
