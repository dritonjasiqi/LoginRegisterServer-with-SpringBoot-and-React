import React from "react";
import axios from "axios";

function Register() {

    const registerData = {
        name: "",
        email: "",
        password: ""
    }
    
    const [register, setRegister] = React.useState(registerData);

    const handleChange = (e) => {
        setRegister({
            ...register,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        //api call to register the user
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8082/addUser', register);
console.log("response.data JSON:", JSON.stringify(response.data, null, 2)); // Shfaq si JSON të lexueshëm

            alert("Registration successful");
        }catch(e){
            console.log("Error" + e);
        }

    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Register Page</h1>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Enter Name" value={register.name} onChange={handleChange} required /><br />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Enter Email" value={register.email} onChange={handleChange} required /><br />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="Enter Password" value={register.password} onChange={handleChange} required /><br />
                <button type="submit">Register</button>
            </form>
        </div>

    )
}

export default Register;