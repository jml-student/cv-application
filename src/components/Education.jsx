import { useState } from 'react'

export default function Education() {
  const [education, setEducation] = useState([
    { school: '', title: '', date: '' },
  ])
  return (
    <div className="education">
      <h1>Education</h1>
      <div className="education-form">
        {education.forEach((item) => {
          return (
            <div className="education-item">
              <label htmlFor="school">School</label>
              <input
                type="text"
                id="school"
                value={item.school}
                onChange={(e) =>
                  setEducation(
                    education.map((item) =>
                      item.school === e.target.value
                        ? { ...item, school: e.target.value }
                        : item
                    )
                  )
                }
              />
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                value={item.title}
                onChange={(e) =>
                  setEducation(
                    education.map((item) =>
                      item.title === e.target.value
                        ? { ...item, title: e.target.value }
                        : item
                    )
                  )
                }
              />
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                value={item.date}
                onChange={(e) =>
                  setEducation(
                    education.map((item) =>
                      item.date === e.target.value
                        ? { ...item, date: e.target.value }
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
        className="btn-add-education"
        onClick={setEducation([
          ...education,
          { school: '', title: '', date: '' },
        ])}
      >
        +
      </button>
    </div>
  )
}
