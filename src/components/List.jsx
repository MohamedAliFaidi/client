import {useEffect ,useState} from 'react'
import { axiosClient } from '../lib/axiosClient'
import Card from './Card'

function List() {
    const [state, setState] = useState([])
 

    useEffect(() => {

        axiosClient.get("/api/users").then((response) => setState(response.data)).catch((error) =>console.log(error))
      }, [])
    
    


  return (
    <div>

{
    state.map((item, i) =>{
        return <Card key={i} user={item}/>
    })
}

    </div>
  )
}

export default List