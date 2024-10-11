import PropTypes from 'prop-types'

function Cv({ cv, setCv }) {
  return (
    <>
      <div className='cv-container'>
        <div className='cv-name-container'>
          <h1 className='cv-name'>{cv.information.name}</h1>
        </div>
        <div className='cv-information'>
          <h2 className='cv-title-contact'>Contact</h2>
          <div className='cv-contact'>
            <h2 className='cv-email'>{cv.information.email}</h2>
            <h2 className='cv-phone'>{cv.information.phone}</h2>
          </div>
        </div>
        <div className='cv-education'>
          <h2 className='cv-title-education'>Education</h2>
          <div className='cv-education-items'>
            {cv.education.map((item, index) => {
              return (
                <div
                  key={`cv-education-${index}`}
                  className='cv-education-item'
                >
                  <h2 className='cv-education-title'>{item.title}</h2>
                  <h2 className='cv-education-school'>{item.school}</h2>
                  <h2 className='cv-education-date'>{item.date}</h2>
                </div>
              )
            })}
          </div>
        </div>
        <div className='cv-experience'>
          <h2 className='cv-title-experience'>Experience</h2>
          <div className='cv-experience-items'>
            {cv.experience.map((item, index) => {
              return (
                <div
                  key={`cv-experience-${index}`}
                  className='cv-experience-item'
                >
                  <h2 className='cv-experience-company'>{item.company}</h2>
                  <h2 className='cv-experience-title'>{item.title}</h2>
                  <h2 className='cv-experience-responsability'>
                    {item.responsability}
                  </h2>
                  <h2 className='cv-experience-from'>{item.from}</h2>
                  <h2 className='cv-experience-to'>{item.to}</h2>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <button
        className='btn-cv-edit'
        onClick={() =>
          setCv((prevCv) => ({
            ...prevCv,
            cv: false,
          }))
        }
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
          viewBox='0 0 24 24'
        >
          <path d='M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z' />
        </svg>
      </button>
    </>
  )
}

Cv.propTypes = {
  cv: PropTypes.object.isRequired,
  setCv: PropTypes.func.isRequired, // Ensure setCv is passed and is a function
}

export default Cv
