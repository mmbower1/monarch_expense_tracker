import React from 'react';
import { Link } from 'react-router-dom';

const Logout = () => {
  return (
    <div className='btn-logout'>
      <Link to='/'>
        <span><i className="fas fa-sign-out-alt"></i>&nbsp;LOGOUT</span>
      </Link>
    </div>
  )
}

export default Logout;
