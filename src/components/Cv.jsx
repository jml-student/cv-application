import PropTypes from 'prop-types'

function Cv({ cv }) {
  return (
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
              <div key={`cv-education-${index}`} className='cv-education-item'>
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
  )
}

Cv.propTypes = {
  cv: PropTypes.object.isRequired, // Ensure setCv is passed and is a function
}

export default Cv
