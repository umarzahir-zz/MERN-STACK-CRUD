import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar'
import NewData from './components/addNewData'
import List from './components/list';

function App() {
  return (
    <div className="App">
     <Navbar/>
      <NewData/>
      <List/>
    </div>
  );
}

export default App;
