import React, { useState } from 'react';

const App = () => {  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const G=()=>setGood(good+1)
  const N=()=>setNeutral(neutral+1)
  const B=()=>setBad(bad+1)

  return (
    <div>
      <h2>give feedback</h2>
      <Button event={G} text='good'/>
      <Button event={N} text='neutral'/>
      <Button event={B} text='bad'/>
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

const Button=({text,event})=>{
  return(
    <button onClick={event}>{text}</button>
  )
}

const Statistic=(props)=>{
  return(
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = ({good,neutral,bad}) => {
  const Total=()=>good+neutral+bad
  const average=()=> (good*1+neutral*0+bad*-1)/Total()
  const positive=()=>(good/Total())*100
  if(good===0 && neutral===0 && bad===0){
    return(<div>No feedback given</div>)    
  }
  else{
    return(
      <table> 
        <tbody>       
          <Statistic text='good' value={good}/>
          <Statistic text='neutral' value={neutral}/>
          <Statistic text='bad' value={bad}/>
          <Statistic text='all' value={Total()}/>
          <Statistic text='average' value={average()}/>
          <Statistic text='positive' value={positive()+' %'}/>        
        </tbody>
      </table>
    )
  }
}

export default App