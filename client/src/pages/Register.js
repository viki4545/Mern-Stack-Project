import React, {useState} from 'react';

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  async function registerUser(event){
    event.preventDefault();
    const response = fetch('http://localhost:1337/api/register', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body:JSON.stringify({
        name,
        email,
        password
      }),
    })
      const data = await response.json()

      console.log(data);
    }
 
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={registerUser}>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text"  placeholder="Name"/>
        <br />
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email"  placeholder="Email"/>
        <br />
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password"  placeholder="Enter your password"/>
        <br />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
}

export default Register;
