import { useState } from 'react'
import '../../../App.css'

function EditForm(props) {
  const [wage, setWage] = useState(0)

  function handleSubmit(event) {
    event.preventDefault()
    props.onEdit(wage)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label className="label" htmlFor="wage">New Wage:</label>
      <input className="input"
        type="text"
        id="wage"
        name="wage"
        onChange={e => setWage(e.target.value)}
        value={wage}
      />
      {wage !== '0' && wage !== 0 && wage !== '' && wage[0] !== '-' ? <button className="EditButton" type="submit">Save Changes</button> : <button className="FireButton" type="submit">Fire!</button>}
    </form>
  )
}

export default EditForm