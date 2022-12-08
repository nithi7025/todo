import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Typography } from '@mui/material';
function App() {
  const [toDos,settoDos]=useState([])
  const[toDo,settoDo]=useState('')
  return (
    <div className="app">
    <div className="mainHeading">
    <Typography variant="h4" sx={{textAlign:"center",fontFamily:"Brush Script MT",fontSize:"50px"}}component="h2">
  TO DO APP
</Typography>
    </div>
    <div className="subHeading">
      <br />
      
    </div>
    <div className="input">
      <input value={toDo} onChange={(e)=>settoDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
      <AddCircleOutlineIcon sx={{color:"orange"}} onClick={()=>settoDos([...toDos,{id:Date.now(), text: toDo,status:false}])} className="fas fa-plus"></AddCircleOutlineIcon>
    </div>
    <div className="todos">
      { toDos.map((obj)=>{

      
      return(
      <div className="todo">
        <div className="left">
          <input onChange={(e)=>{
           console.log(e.target.checked)
           console.log(obj)
           settoDos(toDos.filter(obj1=>{
            if(obj1.id===obj.id){
              obj1.status=e.target.checked
            }
            return obj1
           }))
          }}
           value={obj.status} type="checkbox" name="" id="" />
          <p>{obj.text}</p>
        </div>
        <div className="right">
          <HighlightOffIcon sx={{color:"red"}}   onClick={(e)=>{
            settoDos(toDos.filter(obj1=>{
              let temp;
              if(obj1.id !=obj.id){
                temp = obj1;

              }
              return temp;
            }));
          }} className="fas fa-times"></HighlightOffIcon >
        </div>
      </div>)
    }) }
    {toDos.map((obj)=>{
      if(obj.status){
        return<h1>{obj.text}</h1>
      }

    })}
    </div>
  </div>
  );
}

export default App;
