import React, {useState} from 'react';

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  async function loginUser(event){
    event.preventDefault();
    const response = fetch('http://localhost:1337/api/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body:JSON.stringify({
        email,
        password
      }),
    })
      const data = await response.json()

      console.log(data);
    }
 
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={loginUser}>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email"  placeholder="Email"/>
        <br />
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password"  placeholder="Enter your password"/>
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
