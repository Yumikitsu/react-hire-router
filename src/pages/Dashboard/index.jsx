import { useEffect, useState } from 'react'
import PeopleList from './components/PeopleList'

function Dashboard(props) {
  const { hiredPeople } = props

  const [people, setPeople] = useState([])

  //Fetch some users
  useEffect(() => {
    // Const function fetch method
    const peopleData = async() => {
        try {
            const response = await fetch('https://randomuser.me/api/?results=50')
            if(!response.ok) {
                throw new Error('Network response was not ok')
            }
            const data = await response.json()
            setPeople(data.results)
        } catch (error) {
            console.error('Fetch operation failed:', error)
        }
    }

    // Call the fetch function
    peopleData()
  }, [])

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={people} isHired={false}/>
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList people={hiredPeople} isHired={true} />
      </section>
    </main>
  )
}

export default Dashboard
