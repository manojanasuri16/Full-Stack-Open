import React from 'react'

  const App = () => {
    const course = {
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10
        },
        {
          name: 'Using props to pass data',
          exercises: 7
        },
        {
          name: 'State of a component',
          exercises: 14
        }
      ]
    }

  return (
    <div>      
      <Header name={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

const Header=(props)=>{
  return(
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

const Content=(props)=>{
  const P=props.parts
  const Q=P.map((value)=>{
    return(
      <p>{value.name} {value.exercises}</p>
    )
  }
  )
  return Q
}

const Total=(props)=>{
  const P=props.parts
  let count=0;
  for(const i of P){
    count+=i.exercises
  }
  return (
    <div><p>Number of exercises {count}</p></div>
  )
}

export default App
