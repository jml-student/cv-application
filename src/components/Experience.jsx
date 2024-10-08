import { useState } from 'react'

export default function Experience() {
  const [experience, setExperience] = useState([
    { company: '', title: '', responsability: '', from: '', to: '' },
  ])
  return (
    <div className="experience">
      <h1>Experience</h1>
      <div className="experience-form">
        {experience.forEach((item) => {
          return (
            <div className="experience-item">
              <label htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                value={item.company}
                onChange={(e) =>
                  setExperience(
                    experience.map((item) =>
                      item.company === e.target.value
                        ? { ...item, company: e.target.value }
                        : item
                    )
                  )
                }
              />
              <label htmlFor="job-title">Job Title</label>
              <input
                type="text"
                id="job-title"
                value={item.title}
                onChange={(e) =>
                  setExperience(
                    experience.map((item) =>
                      item.title === e.target.value
                        ? { ...item, title: e.target.value }
                        : item
                    )
                  )
                }
              />
              <label htmlFor="responsability">Responsability</label>
              <input
                type="text"
                id="responsability"
                value={item.responsability}
                onChange={(e) =>
                  setExperience(
                    experience.map((item) =>
                      item.responsability === e.target.value
                        ? { ...item, responsability: e.target.value }
                        : item
                    )
                  )
                }
              />
              <label htmlFor="from">From</label>
              <input
                type="date"
                id="from"
                value={item.from}
                onChange={(e) =>
                  setExperience(
                    experience.map((item) =>
                      item.from === e.target.value
                        ? { ...item, from: e.target.value }
                        : item
                    )
                  )
                }
              />
              <label htmlFor="to">To</label>
              <input
                type="date"
                id="to"
                value={item.to}
                onChange={(e) =>
                  setExperience(
                    experience.map((item) =>
                      item.to === e.target.value
                        ? { ...item, to: e.target.value }
                        : item
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
        onClick={setExperience([
          ...experience,
          { company: '', title: '', responsability: '', from: '', to: '' },
        ])}
      >
        +
      </button>
    </div>
  )
}
