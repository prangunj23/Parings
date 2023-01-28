import React from 'react';
import './static/css/form.css';

function Login() {

    return (
      <div class="box">
        <center>
          <form>
            <input type="text" className="name" name="username" placeholder="First Name" required/>
            <input type="text" className="name" name="password" placeholder="Last Name" required/>
            <input type="number" className="name" name="password" placeholder="Rating" required/>
            <button className="button" type="submit">Login</button>
            <br/>
          </form>
        </center>
      </div>
    );
}

export default Login;