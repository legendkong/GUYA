import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Form() {
  const [job, setJob] = useState('Working Adult');
  const [income, setIncome] = useState('$1000-$2500');
  const [risk, setRisk] = useState('High');
  const [retire, setRetire] = useState('40-45');

  let navigate = useNavigate();

  return (
    <div>
      <h1 className='onboard'>Welcome onboard!</h1>
      <img className='guyalogo' src='https://www.linkpicture.com/q/guyalogo.jpeg'></img>
      
      
      <form>
        <br></br>
        <br></br>
        <h3>Tell us more about yourself...</h3>
        <br></br>
        <br></br>
        <label>I am a... </label>
        <select
          value={job}
          onChange={(e) => setJob(e.target.value)}
        >
          <option value="Working Adult">Working Adult</option>
          <option value="Student">Student</option>
          <option value="Retiree">Retiree</option>
        </select><br></br><br></br>

        <label>My monthly income is...  </label>
        <select
        value={income}
          onChange={(e) => setIncome(e.target.value)}
          >
          <option value="$1000-$2500">$1000-$2500</option>
          <option value="$2500-$4000">$2500-$4000</option>
          <option value="$4000-$6000">$4000-$6000</option>
          <option value="$6000 and above">$6000 and above</option>
        </select><br></br><br></br>

        <label>My investment risk appetite is... </label>
        <select
        value={risk}
          onChange={(e) => setRisk(e.target.value)}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
          <option value="Unsure">Unsure</option>
        </select><br></br><br></br>

        <label>I desire to retire by... </label>
        <select
        value={retire}
          onChange={(e) => setRetire(e.target.value)}
        >
          <option value="40-45">40-45</option>
          <option value="46-50">46-50</option>
          <option value="51-55">51-55</option>
          <option value="55 and above">55 and above</option>
        </select>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <h3>On a scale of 1-3...</h3><br></br>
        <p className='sidenote'>
        **1 = Not at all <br></br>
        **2 = Hmm... <br></br>
        **3 = Yes, all the time!
        </p>
        <br></br>
        <label>I am always able to pay my bills on time&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  </label>
       
          <input type="radio" value="1a" name="1a" /> 1&nbsp;
          <input type="radio" value="2a" name="2a" /> 2&nbsp;
          <input type="radio" value="3a" name="3a" /> 3
        <br></br><br></br>

        <label>I am an experienced investor &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>

          <input type="radio" value="1b" name="1b" /> 1&nbsp;
          <input type="radio" value="2b" name="2b" /> 2&nbsp;
          <input type="radio" value="3b" name="3b" /> 3
        <br></br><br></br>

        <label>I stay updated with the latest finance news &nbsp;&nbsp;&nbsp;</label>
          <input type="radio" value="1c" name="1c" /> 1&nbsp;
          <input type="radio" value="2c" name="2c" /> 2&nbsp;
          <input type="radio" value="3c" name="3c" /> 3
        <br></br><br></br>

        <label>I tend to be frugal with my spendings &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input type="radio" value="1d" name="1d" /> 1&nbsp;
          <input type="radio" value="2d" name="2d" /> 2&nbsp;
          <input type="radio" value="3d" name="3d" /> 3
      <br></br>
      <br></br>
      <br></br>
      <p class="automate">I am a <tag>{ job }</tag>, with a monthly salary of <tag>{ income }</tag>. My investment risk appetite is <tag>{ risk }</tag> and I plan to retire by <tag>{ retire }</tag>. <br></br>Let's use GUYA! </p>
      
      <button className='generate' onClick={() => {navigate("/portfolio");}}>
        GENERATE PORTFOLIO
      </button>
      </form>

    </div>
  )
}

export default Form