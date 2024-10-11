import PropTypes from 'prop-types'

function Information({ cv, setCv }) {
  const updateInformationField = (property, value) => {
    const updatedInformation = { ...cv.information, [property]: value }

    setCv((prevCv) => ({
      ...prevCv,
      information: updatedInformation,
    }))
  }

  return (
    <div className='information'>
      <h2>Information</h2>
      <div className='information-form'>
        <div className='information-field'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            name='name'
            value={cv.information.name}
            onChange={(e) => {
              updateInformationField('name', e.target.value)
            }}
          />
        </div>
        <div className='information-field'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            value={cv.information.email}
            onChange={(e) => {
              updateInformationField('email', e.target.value)
            }}
          />
        </div>
        <div className='information-field'>
          <label htmlFor='phone'>Phone</label>
          <input
            type='tel'
            id='phone'
            name='phone'
            value={cv.information.phone}
            onChange={(e) => {
              updateInformationField('phone', e.target.value)
            }}
          />
        </div>
      </div>
    </div>
  )
}

Information.propTypes = {
  cv: PropTypes.object.isRequired,
  setCv: PropTypes.func.isRequired, // Ensure setCv is passed and is a function
}

export default Information
