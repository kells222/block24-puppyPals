import { useState } from 'react'
import './App.css'
import { puppyList } from './data'
import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  // console.log(puppies)
  // console.log("puppyList:", puppyList)
  const [featPupId, setFeatPupId] = useState(null)
  // console.log(featPupId)

  return (
    <>
      <div className='App'>
      
      {featPupId && <p>{ featPupId } </p>}
      
      {
        puppies.map((puppy)=>{
          const featuredPup = puppies.find((pup) => pup.id === featPupId)
          {featPupId && (
            <div>
              <h2>{featuredPup.name}</h2>
              <ul>
                <li>Age: {featuredPup.age}</li>
                <li>Email: {featuredPup.email}</li>
              </ul>
            </div>
          )}
          console.log(featuredPup)
          return <p onClick={()=>{setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
        })
      }
      </div>
      
    </>
  )
}

export default App

