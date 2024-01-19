
import { useState, useEffect, lazy, startTransition } from 'react'
import './App.css'

import Bears from './components/Bears'
const Child = lazy(() => import("./components/Child"))
import { axiosClient } from './lib/axiosClient'
import List from './components/List'

function App() {
  const [state, setState] = useState(false)

 



  return (
    <>
      {/* <Bears />
      <button onClick={() => startTransition(() => {
        setState(!state)
      })}>show/hide setters</button>
      {state && <Child />} */}

      <List/>
    </>
  )
}

export default App
