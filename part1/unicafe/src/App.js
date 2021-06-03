import React,{useState} from 'react';

const App = () =>{
  const [good,setGood] = useState(0)
  const [neutral,setNeutral] = useState(0)
  const [bad,setBad] = useState(0)

  const goodFeedback = () => setGood(good  + 1)
  const neutralFeedback  = () => setNeutral(neutral + 1)
  const badFeedback = () => setBad(bad + 1)

  return (
    <div>
      <h2>give feedback</h2>
      <div>
        <Button text="good" event={goodFeedback}/>
        <Button text="neutral" event={neutralFeedback}/>
        <Button text="bad" event={badFeedback}/>
      </div>
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  );
}

const Statistics = ({good,neutral,bad}) => {

  if(good !== 0 || neutral!==0 || bad !== 0){
    const Total = () => good + bad + neutral
    const Avg  = () =>  ((1*good) + (0*neutral) + (-1 * bad))/Total()
    const Positive=()=> (good / Total()) * 100

    return (
      <table>
        <tbody>
          <Statistic text="good" value ={good}/>
          <Statistic text="neutral" value ={neutral}/>
          <Statistic text="bad" value ={bad}/>
          <Statistic text="all" value ={Total()}/>
          <Statistic text="average" value ={Avg()}/>
          <Statistic text="positive" value ={Positive()}/>
        </tbody>
      </table>
    )
  }
  else{
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
}

const Statistic = ({text,value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}
const Button = ({text,event}) => {
  return(
    <button onClick={event}>
      {text}
    </button>
  )
}

export default App;