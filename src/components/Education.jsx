import { useState } from 'react'

function Education() {
  const [education, setEducation] = useState([
    { school: '', title: '', date: '' },
  ])

  const handleAddEducation = (e) => {
    e.preventDefault()
    setEducation([...education, { school: '', title: '', date: '' }])
  }

  const handleDeleteEducation = (e, index) => {
    e.preventDefault()
    setEducation(education.filter((_, i) => i !== index))
  }

  return (
    <div className='education'>
      <h2>Education</h2>
      <div className='education-form'>
        {education.map((item, index) => {
          return (
            <div key={index} className='education-item'>
              <div className='education-field'>
                <label htmlFor={`school-${index}`}>School</label>
                <input
                  type='text'
                  id={`school-${index}`}
                  name={`school-${index}`}
                  value={item.school}
                  onChange={(e) =>
                    setEducation(
                      education.map((item, i) =>
                        i === index ? { ...item, school: e.target.value } : item
                      )
                    )
                  }
                />
              </div>
              <div className='education-field'>
                <label htmlFor={`title-${index}`}>Title</label>
                <input
                  type='text'
                  id={`title-${index}`}
                  name={`title-${index}`}
                  value={item.title}
                  onChange={(e) =>
                    setEducation(
                      education.map((item, i) =>
                        i === index ? { ...item, title: e.target.value } : item
                      )
                    )
                  }
                />
              </div>
              <div className='education-field'>
                <label htmlFor={`date-${index}`}>Date</label>
                <input
                  type='date'
                  id={`date-${index}`}
                  name={`date-${index}`}
                  value={item.date}
                  onChange={(e) =>
                    setEducation(
                      education.map((item, i) =>
                        i === index ? { ...item, date: e.target.value } : item
                      )
                    )
                  }
                />
              </div>
              {index !== 0 && (
                <div className='trash-container'>
                  <button
                    className='btn-education-trash'
                    onClick={(e) => handleDeleteEducation(e, index)}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                      aria-label='Delete education entry'
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
      <div className='education-buttons'>
        <button className='btn-education-add' onClick={handleAddEducation}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 24 24'
            aria-label='Add education entry'
          >
            <path d='M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z' />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Education
