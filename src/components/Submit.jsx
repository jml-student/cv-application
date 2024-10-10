import PropTypes from 'prop-types'

function Submit({ setCv }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    setCv(true)
  }

  return (
    <div className='submit'>
      <button
        className='btn-submit'
        type='submit'
        onClick={(e) => handleSubmit(e)}
      >
        Submit
      </button>
    </div>
  )
}

Submit.propTypes = {
  setCv: PropTypes.func.isRequired, // Ensure setCv is passed and is a function
}

export default Submit
