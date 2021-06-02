import React,{useState} from 'react';

const App = () => {  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>give feedback</h2>
      <div>
        <button onClick={()=>setGood(good+1)}>good</button>
        <button onClick={()=>setNeutral(neutral+1)}>neutral</button>
        <button onClick={()=>setBad(bad+1)}>bad</button>    
      </div>      
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>  
  )
}

const Statistics = ({good,neutral,bad}) => { 
  if(good!==0 || bad!==0 || neutral!==0){
    const calTotal=()=>good+neutral+bad
    const calAverage=()=>((good*1)+(neutral*0)+(bad*-1))/calTotal()
    const calPositive=()=>(good/calTotal())*100
    return(      
     <table>
      <tbody>
        <Statistic text="good" value={good}/>
        <Statistic text="neutral" value={neutral}/>
        <Statistic text="bad" value={bad}/>
        <Statistic text="all" value={calTotal()}/>
        <Statistic text="average" value={calAverage()}/>
        <Statistic text="positive" value={calPositive()}/>
      </tbody>
      </table>       
    )    
  }
  else{
    return(
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
}

const Statistic=({text,value})=>{
  return(
    <tr>
      <td>{text}</td>      
      <td>{value}</td>
    </tr>    
  )
}

export default App