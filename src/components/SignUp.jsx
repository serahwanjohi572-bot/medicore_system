import axios from "axios"
import React, { useState } from "react"
import { Link } from "react-router-dom"
const SignUp = () => {
    //HOOKS
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    //
    const [loading, setLoading] = useState("") // show a message when loading load
    const [success, setSuccess] = useState("")// suuccessfully signed up
    const [error, setError] = useState("")// incase we get an error
    // function to handle submit
    const submit = async (e) => {
        e.preventDefault()// prevents refreshing the browser
        // update the loading hook with a message
        setLoading("This will take a few minutes...please wait.")
        try {
            // put the updated hooks data into variables by creating a form data
            const data = new FormData()
            data.append('username', username)
            data.append('email', email)
            data.append('password', password)
            data.append('phone', phone)
            //post data to backend API
            const response = await axios.post("http://serahswala.alwaysdata.net/api/signup",data)
            // After data has been posted successfully, set loading hook variable to be empty
            setLoading("")
            //Update success hook with a message
            setSuccess(response.data.Success)
            // clear the form fields
            setUsername("")
            setEmail("")
            setPassword("")
            setPhone("")
        } catch (error) {
            setLoading("") // updating our hook to be empty
            setError(error.message)
        }
    }

    return (
        <div className="d-flex justify-content-center row text-center">
            <div className=" col-md-6 p-2 mt-3 card shadow">
                {success}
                {loading}
                {error}
                <form onSubmit={submit} className="card-body ">
                    <h1 className="display-4">Sign UP</h1>
                    <input type="text" placeholder="Enter your username"
                        className='form-control' required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    {username}
                    <br />
                    <input type="email" placeholder="Enter your email"
                        className='form-control' required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    {email}
                    <br />
                    <input type="password" placeholder="Enter your password"
                        className='form-control' required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    {password}
                    <br />
                    <input type="text" placeholder="Enter your phone number"
                        className='form-control' required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)} />
                    {phone}
                    <br />

                    <button type="submit" className="btn btn-primary">sign up</button> <br />

                    <p>Already have an account?<Link to='/signin'>sign In</Link></p>
                </form>
            </div>
        </div>
    )
}
export default SignUp