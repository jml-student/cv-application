import { useState } from 'react'

function Experience() {
  const [experience, setExperience] = useState([
    { company: '', title: '', responsability: '', from: '', to: '' },
  ])

  const handleAddExperience = (e) => {
    e.preventDefault()
    setExperience([
      ...experience,
      { company: '', title: '', responsability: '', from: '', to: '' },
    ])
  }

  const handleDeleteExperience = (e, index) => {
    e.preventDefault()
    setExperience(experience.filter((_, i) => i !== index))
  }

  return (
    <div className='experience'>
      <h2>Experience</h2>
      <div className='experience-form'>
        {experience.map((item, index) => {
          return (
            <div key={index} className='experience-item'>
              <div className='experience-field'>
                <label htmlFor={`company-${index}`}>Company</label>
                <input
                  type='text'
                  id={`company-${index}`}
                  name={`company-${index}`}
                  value={item.company}
                  onChange={(e) =>
                    setExperience(
                      experience.map((item, i) =>
                        i === index
                          ? { ...item, company: e.target.value }
                          : item
                      )
                    )
                  }
                />
              </div>
              <div className='experience-field'>
                <label htmlFor={`job-title-${index}`}>Job Title</label>
                <input
                  type='text'
                  id={`job-title-${index}`}
                  name={`job-title-${index}`}
                  value={item.title}
                  onChange={(e) =>
                    setExperience(
                      experience.map((item, i) =>
                        i === index ? { ...item, title: e.target.value } : item
                      )
                    )
                  }
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
                  onChange={(e) =>
                    setExperience(
                      experience.map((item, i) =>
                        i === index
                          ? { ...item, responsability: e.target.value }
                          : item
                      )
                    )
                  }
                />
              </div>
              <div className='experience-field'>
                <label htmlFor={`from-${index}`}>From</label>
                <input
                  type='date'
                  id={`from-${index}`}
                  name={`from-${index}`}
                  value={item.from}
                  onChange={(e) =>
                    setExperience(
                      experience.map((item, i) =>
                        i === index ? { ...item, from: e.target.value } : item
                      )
                    )
                  }
                />
              </div>
              <div className='experience-field'>
                <label htmlFor={`from-${index}`}>To</label>
                <input
                  type='date'
                  id={`to-${index}`}
                  name={`to-${index}`}
                  value={item.to}
                  onChange={(e) =>
                    setExperience(
                      experience.map((item, i) =>
                        i === index ? { ...item, to: e.target.value } : item
                      )
                    )
                  }
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

export default Experience
