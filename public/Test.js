import React, { useState } from 'react';




function Test() {
    const people=["ahmed","emna","hsan","zemi","terr"]
    const [index, setindex] = useState(0)
    const [name,setname] = useState("")
    const [etat,setetat] = useState("")
    const [present, setpresent]=useState([])
    const [absent, setabsent] = useState([])
    const[tous,settous] = useState([])
    const[excuse,setexcuse] = useState([])
    const haya = (test) => {
        if (test) {
            setindex(index+1)
            setname(people[index])
        }
    }
   







    return (
        <div>
 <button onclick="haya(1)">Click me</button> 
 <p>{name}</p>

        </div>
    )
}

export default Test
