import React from 'react';
import { Link } from 'react-router-dom';

const Auth = () => {
  return (
    <div>
      <h2>Welcome</h2>
      <span className='btn-login'>
        <Link to='/landing'>Sign in </Link><br /><br />
      </span>
    </div>
  )
}

export default Auth;
