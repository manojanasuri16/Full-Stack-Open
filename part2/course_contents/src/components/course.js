import React from 'react'

const Course=({p})=>{
    return(
      <div>
        <Header name={p.name}/>
        <Content h={p.parts}/>
        <Total h={p.parts}/>
      </div>
    )
  }
   
  const Header=({name})=>{return <h2>{name}</h2>}
    
  const Content=({h})=>{
    return(
      <div>
        {
          h.map(part=>{
            return(
              <Part key={part.id} name1={part.name} name2={part.exercises}/>
            )
          }

          )
        }
      </div>
    )
  }
  
  const Part=({name1,name2})=>{
    return(
      <p>{name1} {name2}</p>
    )
  }

  const Total=({h})=>{
    const d=h.map((can)=>{return(can.exercises)})
    const sol=d.reduce((d,e)=>{return d+e})
    return(
      <strong><p>total of {sol} exercises</p></strong>
    )    
  }

  export default Course