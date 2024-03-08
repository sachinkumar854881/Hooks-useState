import React,{useState} from 'react'

function App(){
    const[count, setCount] = useState(0) //destructuring 

    // incre function it increase the value when click button
    const incre = () =>{
        setCount(count+1)
    }

    return(
        <div>
            <h1> useState Counter:{count}</h1>
            <button onClick={incre}>increment</button>
        </div>
    )
}
export default App;