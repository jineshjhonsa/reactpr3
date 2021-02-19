
import './App.css';
import Tabs from "./Tabs"; 
import Myinfo from './page1'
import Body from './body'
import Tablist from './tablist'
import { useState } from 'react';

function App() {
  const [active,setactive] = useState(1)
  const tabs =[{
      id:1,
      title:'Home'
  },
  {
      id:2,
      title: 'Table'
  },
  {
    id:3,
    title:'Data'
  }
]
const changetab =(id) =>{
  setactive(id)
}
  return (
    
    <div className="App">
      <h1>Tabs Demo</h1>
  <div className="nav-bar">
    <Tablist tabs ={tabs} activetab ={active} ctab ={changetab}/>
  </div>
    <div className="main-body">
    <Body activetab ={active}/>
    </div>
    </div>
  );
}

export default App;
