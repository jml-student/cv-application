import { useState } from 'react'

function Information() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  return (
    <div className="information">
      <h2>Information</h2>
      <div className="information-form">
        <div className="information-field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="information-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="information-field">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>
      <button type="submit" className="btn-information">
        Submit
      </button>
    </div>
  )
}

export default Information
