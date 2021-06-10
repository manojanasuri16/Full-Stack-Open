import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ] 
   
  const [selected, setSelected] = useState(0)
  
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  
  const nextAnecdote=()=>setSelected(Math.floor((Math.random() * anecdotes.length)))  
  
  const vote=()=>{
    const copy=[...votes]; //Copy of the last state of votes
    copy[selected]+=1 //Increment by one for the corresponding anecdote
    setVotes(copy) //Set the array with the update votes to the component's state
  }

  const maxVote=votes.reduce(function(a,b){
    return Math.max(a,b)
  })

  const maxAnecdote=anecdotes[votes.indexOf(maxVote)]

  return (
    <div>
      <Anecdote anecdote={anecdotes[selected]} votes={votes[selected]}/>    
      <Button listener={vote} text='vote'/>
      <Button listener={nextAnecdote} text='nextanecdote'/>            
      <MostVotedAnecdote maxAnecdote={maxAnecdote} maxVotes={maxVote}/>
    </div>
  )
}

const Anecdote=({anecdote,votes})=>{
  return(
    <div>
      <h2>Anecdote of the day</h2>
      {anecdote}<br/>has {votes} votes
    </div>
  )
}

const Button=({text,listener}) => <button onClick={listener}>{text}</button>

const MostVotedAnecdote=({maxAnecdote,maxVotes})=>{
  return(
    <div>
      <h2>Anecdote with most votes</h2>
      <p>{maxAnecdote}<br/>has {maxVotes} votes</p>
    </div>    
  )
}

export default App