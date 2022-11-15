import React, { useState } from 'react';
import { LoginForm } from '../../components/login/login.comp';
import { ResetPassword } from '../../components/password-reset/passwordreset.comp';
import './entry.style.css';

export const Entry = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [frmload, setFrmLoad] = useState('login');

  const handleOnChange = e =>{
    const {name, value} = e.target
    switch(name){
      case 'username' : setUsername(value);
      break;
      case 'password' : setPassword(value);
      break;
      default:
        break;
    }
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    
    if (!username || !password){
      return alert("Fill up all the form!")
    }

    //TODO call api to submit the form
    console.log(username, password)
  };

  const handleOnResetSubmit = e => {
    e.preventDefault();
    
    if (!username){
      return alert("Please enter Username!")
    }

    //TODO call api to submit the form
    console.log(username)
  };

  const fromSwitcher = frmType => {
    setFrmLoad(frmType);
  }

  return (
    <div className='entry-page bg-info'>
        <div className='jumbotron form-box'>
          {frmload === 'login' && (<LoginForm
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            fromSwitcher={fromSwitcher}
            username={username}
            password={password}/>)}

            {frmload === 'reset' && (<ResetPassword
            handleOnChange={handleOnChange}
            handleOnResetSubmit={handleOnResetSubmit}
            fromSwitcher={fromSwitcher}
            username={username}/>)}
        </div>
    </div>
  )
}

