import { useState } from 'react'

function Experience() {
  const [experience, setExperience] = useState([
    { company: '', title: '', responsability: '', from: '', to: '' },
  ])
  return (
    <div className="experience">
      <h1>Experience</h1>
      <div className="experience-form">
        {experience.map((item, index) => {
          return (
            <div key={index} className="experience-item">
              <label htmlFor={`company-${index}`}>Company</label>
              <input
                type="text"
                id={`company-${index}`}
                value={item.company}
                onChange={(e) =>
                  setExperience(
                    experience.map((item, i) =>
                      i === index ? { ...item, company: e.target.value } : item
                    )
                  )
                }
              />
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
              <label htmlFor={`responsability-${index}`}>Responsability</label>
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
          )
        })}
      </div>
      <button
        className="btn-add-experience"
        onClick={() =>
          setExperience([
            ...experience,
            { company: '', title: '', responsability: '', from: '', to: '' },
          ])
        }
      >
        +
      </button>
    </div>
  )
}

export default Experience
