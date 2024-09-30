import { useState, useEffect } from 'react'
import HireForm from './components/HireForm'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import EditForm from './components/EditForm'
import '../../App.css'

function PersonProfile({ onSelection, isHired }) {
  const [person, setPerson] = useState(null)
  const { id } = useParams()
  const navigation = useNavigate()
  const location = useLocation()

  // Set the selected worker's details
  useEffect(() => {
    setPerson(location.state.person)
  }, [id, location.state])

  if (!person) return <p>Loading...</p>

  // Navigate back to Dashboard and call the onSelection function
  const handleSelection = (wage) => {
    onSelection({...person, wage})
    navigation('/')
  }

  return (
    <>
    {isHired ? (
      <article>
        <h2>
          {person.name.first} {person.name.last}
        </h2>
          <EditForm className="form" person={person} onEdit={handleSelection}/>
      </article>
      
    ) : ( 
      <article>
        <h2>
          {person.name.first} {person.name.last}
        </h2>
        <HireForm className="form" person={person} onHire={handleSelection}/>
      </article>
    )}
    </>
  )
}

export default PersonProfile
