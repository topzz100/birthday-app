import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
    const [profile, setProfile ] = useState(data)

 
  return <>
    <main>
      <h2>{profile.length} Birthdays today</h2>
      <div className = "container">
        <List profile = {profile}/>
      </div>
      <button onClick = {() => { setProfile([])}}>clear all</button>
      
    </main>
   
  </>
}

export default App;
