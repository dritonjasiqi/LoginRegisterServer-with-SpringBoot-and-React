import React, { useState } from "react";
import axios from "axios";

function Login() {
    
    const [Password, setPasswordValue] = useState('');
    const [userId, setUserIdValue] = useState('');

    const setUserId = (e) => {
        setUserIdValue(e.target.value);
    }
    const setPassword = (e) => {
        setPasswordValue(e.target.value);
    }
    const handleSubmit = async (e) => {
        //api call
        e.preventDefault();
        
        console.log("our data" +  userId + Password);

        //create an object with userId and password to send to the backend
        const data = {
            userId: userId,
            password: Password
        };
        try{
            const response = await axios.post('http://localhost:8082/loginUser', data);
            if(response.data === false){
                alert("Invalid credentials");
            }
            else{
                alert("Login successful");
                
            }
        }catch(e){
            console.log("Error" + e);
        }
    }

    const RedirectToRegister = () => {
        window.location.href = "/register";
    }

    return (
        
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Login Page</h1><br />
                <label>User ID:</label>
                <input type="email"placeholder="Enter User ID" value={userId}  onChange={setUserId} required /><br />
                <label>Password:</label>
                <input type="password" placeholder="Enter Password" value={Password} onChange={setPassword} required /><br />
                <a style={{cursor: "pointer"}} onClick={RedirectToRegister}>dont have an account?</a><br />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;