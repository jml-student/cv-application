import PropTypes from 'prop-types'

function Cv({ cv }) {
  return (
    <div className='cv'>
      <div className='cv-information' key={'cv-information'}>
        <h1 key={'cv-name'}>{cv.information.name}</h1>
        <h1 key={'cv-email'}>{cv.information.email}</h1>
        <h1 key={'cv-phone'}>{cv.information.phone}</h1>
      </div>

      {cv.education.map((item, index) => {
        return (
          <div className='cv-education-item' key={`cv-education-${index}`}>
            <h1 key={`cv-school-${index}`}>{item.school}</h1>
            <h1 key={`cv-title-${index}`}>{item.title}</h1>
            <h1 key={`cv-date-${index}`}>{item.date}</h1>
          </div>
        )
      })}
      {cv.experience.map((item, index) => {
        return (
          <div className='cv-experience-item' key={`cv-experience-${index}`}>
            <h1 key={`cv-company-${index}`}>{item.company}</h1>
            <h1 key={`cv-jobtitle-${index}`}>{item.title}</h1>
            <h1 key={`cv-responsability-${index}`}>{item.responsability}</h1>
            <h1 key={`cv-from-${index}`}>{item.from}</h1>
            <h1 key={`cv-to-${index}`}>{item.to}</h1>
          </div>
        )
      })}
    </div>
  )
}

Cv.propTypes = {
  cv: PropTypes.object.isRequired, // Ensure setCv is passed and is a function
}

export default Cv
