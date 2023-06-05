import React from 'react';
import "./Home.css";
import {Button, MenuItem, TextField} from "@mui/material";
import Categories, { } from '../../Data/Categories';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { useState } from 'react';
import {useNavigate} from "react-router-dom";

const Home = ({name, setName,fetchQuestions}) => {
  const [category, setCategory]=useState("");
  const[difficulty, setDifficulty]=useState("");
  const[error, setError]=useState(false);

  const navigate=useNavigate();
  
  const handleSubmit=()=> {
    if(!category || !difficulty || !name){
      setError(true);
      return ;
    }
    else
    {
      setError(false);
      fetchQuestions(category, difficulty);
      navigate("/quiz");
    }
  };

  return ( 
    <div className='content'>
    <div className='settings'>
    {error && <ErrorMessage>Please Fill all the feilds</ErrorMessage>}
      <span style={{fontSize: 30}}>Quiz settings</span>
      <div className='settings_select'>
        <TextField 
          style={{marginBottom:25}}
          label="Enter your name"
          variant='outlined'
          onChange={(e)=> setName(e.target.value)}
        />

        <TextField 
        select 
        label="Select Category"
        variant='outlined'
        style={{marginBottom:30}}
        onChange={(e)=> setCategory(e.target.value)}
        value={category}
        >
        {
          Categories.map((cat)=>(
            <MenuItem key={cat.category} value={cat.value} >
            {cat.category}
            </MenuItem>
          ))
          }
        </TextField>

        <TextField
        select
        label="Select Difficulty"
        variant='outlined'
        style={{marginBottom:30}}
        onChange={(e)=> setDifficulty(e.target.value)}
        value={difficulty}
        >
        <MenuItem key="Easy" value="easy">
          Easy
        </MenuItem>
        <MenuItem key="Medium" value="Medium">
          Medium
        </MenuItem>
        <MenuItem key="Hard" value="Hard">
          Hard
        </MenuItem>
        </TextField>
        
        <Button 
        variant='contained'
        color='primary'
        size='large'
        onClick={handleSubmit}
        >
        Start Quiz
        </Button>
      </div>
    </div>
    <img src='/quiz.svg' className='banner' alt='quiz image'/>
    
    </div>
  )
}

export default Home