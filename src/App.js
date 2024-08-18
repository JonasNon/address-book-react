import './App.css';
import React , { useState } from 'react';
import axios from 'axios';
import UserCard from './UserCard'



function App() {

  const [users, setUsers] = useState([])
  const [expandedList, setExpanded] = useState([])

  useState(() => {
    axios.get("https://randomuser.me/api?results=25")
    .then( res => {
      const newUsers = res.data.results
      setUsers(newUsers)      
    })
  }, [])


  const addExpanded = (index) => {
    expandedList.includes(index) ? 
    setExpanded([...expandedList.slice(0, expandedList.indexOf(index)), expandedList.slice(expandedList.indexOf(index) + 1)]) :
    setExpanded([...expandedList, index])
  }



  return (
    <div className="App">
      <button onClick={() => console.log(users)}>log something</button>
      <h1>Click on a name to expand details!</h1>
      <ol>{users.map((user, index) => {
            return <UserCard 
            key={index} 
            userInfo={user} 
            index={index} 
            expandMe={() => addExpanded(index)}
            expanded={expandedList.includes(index)}
            />
            
          })}</ol>
    </div>
  );
}


export default App;
