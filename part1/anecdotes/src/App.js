import React, {useState} from 'react';

const  App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const [selected,setSelected] = useState(0)
  const [points,setPoints] = useState(Array(6).fill(0))  

  const vote=()=>{
    const copy = [...points]
     copy[selected] += 1;
     setPoints(copy) 
  }

  const nextAncedote=()=>{setSelected(Math.round(Math.random() * 5))}

  return (
    <div>
      <h3>Anecdote of the day</h3>
      <p>
      <Display anecdote={anecdotes[selected]} votes={points[selected]}/>
      <Button listener={vote} text="vote"/>
      <Button listener={nextAncedote} text='nextanecdote'/>
      </p>
      <h3>Anecdote with most votes</h3>
      <MaxVotes anecdotes={anecdotes} points={points} />
    </div>
  );
}

const Display=({anecdote,votes})=>{
  return(
    <div>
        {anecdote}<br/>
        has {votes} votes
    </div>
  )
}

const Button = ({text,listener}) => {
  return(
    <button onClick={listener}>{text}</button>
  )
}

const MaxVotes = ({anecdotes,points}) => {
  const a=Math.max(...points)
  const b=points.indexOf(a)
  return(
    <Display anecdote={anecdotes[b]} votes={points[b]}/>
  )
}

export default App;