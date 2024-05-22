import React from 'react';



const LOGIN: React.FC = () => {
  return (
    <div className="login-container">
      <div className="login-content">
        <h1>LOGIN</h1>
        
        <div className="form login">

        <form action="#">
          <input type="text" placeholder="Email address or Username" required />
          <input type="password" placeholder="Password" required />
          <a href="#">Forgot password?</a>
          <input type="submit" value="Login" style={{marginTop:'20px'}}/>
        </form>
      </div>

        
      </div>
    </div>
  );
}

export default LOGIN;
