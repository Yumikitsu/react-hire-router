import { useState } from 'react'
import '../../../App.css'

function HireForm(props) {
  const [wage, setWage] = useState(0)

  function handleSubmit(event) {
    event.preventDefault()
    props.onHire(wage)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label className="label" htmlFor="wage">Wage Offer:</label>
      <input className="input"
        type="text"
        id="wage"
        name="wage"
        onChange={e => setWage(e.target.value)}
        value={wage}
      />
      <button className="HireButton" type="submit">Hire</button>
    </form>
  )
}

export default HireForm
