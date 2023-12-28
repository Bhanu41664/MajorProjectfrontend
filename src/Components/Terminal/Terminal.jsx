
import '../Terminal/Terminal.css'
import Tablecontent from './Tablecontent'
import React, { useEffect, useState } from 'react'
import {inspect} from "util";
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Terminal = () => {
    const [textAreaValue, setTextAreaValue] = useState('');
    const [answerStatus,setAnswerStatus]=useState(false);

    const location=useLocation();
  const path = location.pathname.split('/')[1]
  console.log(path);
  const [post,setPost]=useState({})

  const handleTextAreaChange = (event) => {
    setTextAreaValue(event.target.value);
  };

console.log(post.answer);
  useEffect(()=>{
    const getpost=async ()=>{
      const res=await axios.get(`http://localhost:3000/api/admin/${path}`)
      setPost(res.data)
    }
    getpost();
  },[path])
  const sendDataToBackend = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/sendData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ value : textAreaValue,
          correctanswer: post.answer
         }),
      });

      const data = await response.json();
      console.log('Response from server bhanu:', data.success);
      setAnswerStatus(data.success);
    } catch (error) {
      console.error('Error sending data to server:', error);
    }
  };
  
  return (
    <div>
         <div class="templatecontent">
        <div class="platform">
            <div class="platforminfo">
                <p>Input</p>
                
                <button class="button" onClick={sendDataToBackend}>runQuery</button>
            </div>
            <div class="question">
                <p>Q) 
                  {post.question}
                </p>
            </div>
            <div class="template1">
                <textarea  className='template' placeholder='Please practice here' onChange={handleTextAreaChange}>

                </textarea>
                {/* <p style={{padding: "30px;color: brown;margin: 0;"}}>--Please fill the data</p> */}

            </div>
    
            <h4 style={{color:'green'}}> {answerStatus} </h4>

            <div class="output">
                <div class="tableinfo">
                    <p>Custemers</p>
                    <Tablecontent/>
                
                </div>

            </div>

        </div>
        <div class="tables">
            <div class="platforminfo1">
                <p>Available tables</p>
            </div>
            <div class="tableinfo">
                <p>Custemers</p>
                <Tablecontent/>
            </div>
            <div class="tableinfo">
                <p>Custemers</p>
                <Tablecontent/>
            </div>
            <div class="tableinfo">
                <p>Custemers</p>
                <Tablecontent/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Terminal