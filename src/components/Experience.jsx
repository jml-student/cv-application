import { useState } from 'react'

function Experience() {
  const [experience, setExperience] = useState([
    { company: '', title: '', responsability: '', from: '', to: '' },
  ])
  return (
    <div className="experience">
      <h2>Experience</h2>
      <div className="experience-form">
        {experience.map((item, index) => {
          return (
            <div key={index} className="experience-item">
              <div className="experience-field">
                <label htmlFor={`company-${index}`}>Company</label>
                <input
                  type="text"
                  id={`company-${index}`}
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
              <div className="experience-field">
                <label htmlFor={`job-title-${index}`}>Job Title</label>
                <input
                  type="text"
                  id={`job-title-${index}`}
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
              <div className="experience-field">
                <label htmlFor={`responsability-${index}`}>
                  Responsability
                </label>
                <input
                  type="text"
                  id={`responsability-${index}`}
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
              <div className="experience-field">
                <label htmlFor={`from-${index}`}>From</label>
                <input
                  type="date"
                  id={`from-${index}`}
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
              <div className="experience-field">
                <label htmlFor={`from-${index}`}>To</label>
                <input
                  type="date"
                  id={`from-${index}`}
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
            </div>
          )
        })}
      </div>
      <div className="experience-buttons">
        <button
          className="btn-experience-add"
          onClick={() =>
            setExperience([
              ...experience,
              { company: '', title: '', responsability: '', from: '', to: '' },
            ])
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
          </svg>
        </button>
        <button className="btn-experience-edit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Experience
