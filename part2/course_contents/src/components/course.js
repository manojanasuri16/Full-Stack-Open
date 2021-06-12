import React from 'react'

const Course=({course})=>{  
    return(
      <div>    
      <Header key={course.id} name={course.name}/> 
      <Content parts={course.parts}/>    
      <Total course={course.parts}/>
      </div>
    )
}
  
  const Total=({course})=>{  
    const total=course.map((value)=>{
      return(value.exercises)
    })
    const Q=total.reduce((total,e)=>{return total+e})  
    return(
      <div>total of {Q} exercises</div>
    )
  }
  
  const Header=({name})=>{  
    return(
      <div>
        <h1>{name}</h1>
      </div>
    )
  }
  
  const Content=(props)=>{  
    const P=props.parts
    const Q=P.map(value=>{
      return(
        <Part key={value.id} name={value.name} exercises={value.exercises}/> 
      )
    })
    return(<div>{Q}</div>)
  }  
  
  const Part=(props)=>{  
    return(
      <div>
        <p>{props.name} {props.exercises}</p>
      </div>
    )
  }
  
  export default Course