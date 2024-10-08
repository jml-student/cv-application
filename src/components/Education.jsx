import { useState } from 'react'

function Education() {
  const [education, setEducation] = useState([
    { school: '', title: '', date: '' },
  ])
  return (
    <div className="education">
      <h2>Education</h2>
      <div className="education-form">
        {education.map((item, index) => {
          return (
            <div key={index} className="education-item">
              <div className="education-field">
                <label htmlFor={`school-${index}`}>School</label>
                <input
                  type="text"
                  id={`school-${index}`}
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
              <div className="education-field">
                <label htmlFor={`title-${index}`}>Title</label>
                <input
                  type="text"
                  id={`title-${index}`}
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
              <div className="education-field">
                <label htmlFor={`date-${index}`}>Date</label>
                <input
                  type="date"
                  id={`date-${index}`}
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
            </div>
          )
        })}
      </div>
      <button
        className="btn-education"
        onClick={() =>
          setEducation([...education, { school: '', title: '', date: '' }])
        }
      >
        +
      </button>
    </div>
  )
}

export default Education
