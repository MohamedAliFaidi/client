
import { useState, useEffect, lazy, startTransition } from 'react'
import './App.css'

import Bears from './components/Bears'
const Child = lazy(() => import("./components/Child"))
import { axiosClient } from './lib/axiosClient'
import List from './components/List'

function App() {
  const [state, setState] = useState(``)

  const fetchbackend = ()=>{
    axiosClient.get('/v1').then(res=>{
      setState(`
      \nwe just fetched our backend api !!!
    `)
    })
  }

 



  return (
    <>
      {/* <Bears />
      <button onClick={() => startTransition(() => {
        setState(!state)
      })}>show/hide setters</button>
      {state && <Child />} */}

      {/* <List/> */}
      <button style={
        {
          backgroundColor: 'green',
          color: 'white',
          padding: '10px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }
      } onClick={fetchbackend}>fetch backend</button>
      <div
      style={
        {
           display:'flex',
          padding: '10px',
          borderRadius: '5px',
          cursor: 'pointer'
        }
      }
      >
        {state}
      </div>
    </>
  )
}

export default App
