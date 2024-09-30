import { Link } from 'react-router-dom'
import '../../../App.css'
function PeopleListItem(props) {
  const { person, isHired } = props

  return (
    <li>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
      {!isHired ? <Link className="view-worker" to={`/view/${person.email}`} state={{person}}>View Worker</Link> : <Link className="edit-worker" to={`/edit/${person.email}`} state={{person}}>Edit Worker</Link>}
    </li>
  )
}

export default PeopleListItem
