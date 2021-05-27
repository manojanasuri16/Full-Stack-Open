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
const Header = (props) => {   
    console.log(props.name)     
    return (
        <div>
            <p>Course : {props.name}</p>            
        </div>
    )
}

const Content = (props) => {
    const part1=props.parts[0]
    console.log(part1)
    const part2=props.parts[1]
    console.log(part2)
    const part3=props.parts[2]    
    console.log(part3)
    return (
        <div>
            <p>{part1.name} - {part1.exercises}</p>
            <p>{part2.name} - {part2.exercises}</p>
            <p>{part3.name} - {part3.exercises}</p>
        </div>
    )
}

const Total = (props) => {  
    const part1=props.parts[0]
    console.log(part1)
    const part2=props.parts[1]
    console.log(part2)
    const part3=props.parts[2]    
    console.log(part3)      
    return (
        <div>
            <p>Total - {part1.exercises+part2.exercises+part3.exercises}</p>
        </div>
    )
}

export default App