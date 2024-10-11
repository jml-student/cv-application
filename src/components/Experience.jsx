import PropTypes from 'prop-types'

function Experience({ cv, setCv }) {
  const updateExperienceField = (index, property, value) => {
    const updatedExperience = cv.experience.map((item, i) =>
      i === index ? { ...item, [property]: value } : item
    )

    setCv((prevCv) => ({
      ...prevCv,
      experience: updatedExperience,
    }))
  }

  const handleAddExperience = (e) => {
    e.preventDefault()
    const updatedExperience = [
      ...cv.experience,
      { company: '', title: '', responsability: '', from: '', to: '' },
    ]
    setCv((prevCv) => ({
      ...prevCv,
      experience: updatedExperience,
    }))
  }

  const handleDeleteExperience = (e, index) => {
    e.preventDefault()
    const updatedExperience = cv.experience.filter((_, i) => i !== index)
    setCv((prevCv) => ({
      ...prevCv,
      experience: updatedExperience,
    }))
  }

  return (
    <div className='experience'>
      <h2>Experience</h2>
      <div className='experience-form'>
        {cv.experience.map((item, index) => {
          return (
            <div key={index} className='experience-item'>
              <div className='experience-field'>
                <label htmlFor={`company-${index}`}>Company</label>
                <input
                  type='text'
                  id={`company-${index}`}
                  name={`company-${index}`}
                  value={item.company}
                  onChange={(e) => {
                    updateExperienceField(index, 'company', e.target.value)
                  }}
                />
              </div>
              <div className='experience-field'>
                <label htmlFor={`job-title-${index}`}>Job Title</label>
                <input
                  type='text'
                  id={`job-title-${index}`}
                  name={`job-title-${index}`}
                  value={item.title}
                  onChange={(e) => {
                    updateExperienceField(index, 'title', e.target.value)
                  }}
                />
              </div>
              <div className='experience-field'>
                <label htmlFor={`responsability-${index}`}>
                  Responsability
                </label>
                <input
                  type='text'
                  id={`responsability-${index}`}
                  name={`responsability-${index}`}
                  value={item.responsability}
                  onChange={(e) => {
                    updateExperienceField(
                      index,
                      'responsability',
                      e.target.value
                    )
                  }}
                />
              </div>
              <div className='experience-field'>
                <label htmlFor={`from-${index}`}>From</label>
                <input
                  type='date'
                  id={`from-${index}`}
                  name={`from-${index}`}
                  value={item.from}
                  onChange={(e) => {
                    updateExperienceField(index, 'from', e.target.value)
                  }}
                />
              </div>
              <div className='experience-field'>
                <label htmlFor={`from-${index}`}>To</label>
                <input
                  type='date'
                  id={`to-${index}`}
                  name={`to-${index}`}
                  value={item.to}
                  onChange={(e) => {
                    updateExperienceField(index, 'to', e.target.value)
                  }}
                />
              </div>
              {index !== 0 && (
                <div className='trash-container'>
                  <button
                    className='btn-education-trash'
                    onClick={(e) => handleDeleteExperience(e, index)}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                      aria-label='Delete experience entry'
                    >
                      <path d='M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z' />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          )
        })}
      </div>
      <div className='experience-buttons'>
        <button className='btn-experience-add' onClick={handleAddExperience}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 24 24'
            aria-label='Add experience entry'
          >
            <path d='M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z' />
          </svg>
        </button>
      </div>
    </div>
  )
}

Experience.propTypes = {
  cv: PropTypes.object.isRequired,
  setCv: PropTypes.func.isRequired, // Ensure setCv is passed and is a function
}

export default Experience
