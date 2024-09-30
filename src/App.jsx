import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import PersonProfile from './pages/PersonProfile'

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])

  //Hire a new worker if the wage is more than 0
  const handleHire = (worker) => {
    if(worker.wage > 0) {
      setHiredPeople(current => [...current, worker])
    }
  }

  //Edit a worker's wage, if it is less than 0 then remove the worker instead
  const handleEdit = (worker) => {
    setHiredPeople(current => {
      if(worker.wage <= 0) {
        return current.filter(person => person.email !== worker.email)
      } else {
        return current.map(person => 
          person.email === worker.email ? {...person, wage: worker.wage } : person
        )
      }
    })
  } 

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li><Link to="/">Dashboard</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Dashboard hiredPeople={hiredPeople}/>}/>
        <Route path="/view/:id" element={<PersonProfile onSelection={handleHire} isHired={false}/>}/>
        <Route path="/edit/:id" element={<PersonProfile onSelection={handleEdit} isHired={true}/>}/>
      </Routes>
    </>
  )
}
