function Cv() {
  const name = document.querySelector('#name').value
  const email = document.querySelector('#email').value
  const phone = document.querySelector('#phone').value

  return (
    <div className='cv'>
      <h1>{name}</h1>
      <h1>{email}</h1>
      <h1>{phone}</h1>
    </div>
  )
}

export default Cv
