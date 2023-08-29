import { useState } from 'react'
import { puppyList } from './data'
import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  console.log(puppies)
  // console.log("puppyList:", puppyList)
  const [featPupId, setFeatPupId] = useState(null)
  console.log(featPupId)

  let content = puppies.map((puppy,idx,arr)=>{
    // const featuredPup = arr.find((pup) => pup.id === featPupId)
    
    
    return  <div key={puppy.id}>
        <p onClick={()=>{setFeatPupId(puppy)}} key={puppy.id}>{puppy.name}</p>
        {/* <h2>{featuredPup.name}</h2> */}
        <ul>
          <li>Age: {puppy.age}</li>
          <li>Email: {puppy.email}</li>
        </ul>
      </div>
  });
    return (
    <>
    {content}
    </>
    )
  }


export default App

    
{/* <nav>
<button onClick={()=> setPuppies(puppyList)}>{puppy.name}</button>

</nav>
<div>
  {puppies === 'puppyList.name' && <Render puppyList={Data} pupIndex={0}/> }
</div> */}

