import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
const SignIn = () => {
    // hooks
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    //
    const [loading, setLoading] = useState("")
    const [message, setMessage] = useState("")
    const [error, setError] = useState("")
    // craete a useNavigate hook to navigatr from one component to another
    const navigate = useNavigate()
    // function to handle submit
    const submit = async (e) => {
        e.preventDefault() // prevents the browser frm refreshing
        // update the loading hook
        setLoading("this will take a few minutes...")
        try {
            //new form data to append username and password
            const data = new FormData()
            data.append('username', username)
            data.append('password', password)
            //post data to backend API
            const response = await axios.post("http://serahswala.alwaysdata.net/api/signin", data)
            //
            setLoading("")
            //
            setMessage(response.data.message)
            //
            setUsername("")
            setPassword("")
            // check if the response is a user object.
            if (response.data.user){
                //if the user is found, save  localStorage.setItem("user")
            localStorage.setItem("user",JSON.stringify(response.data.user)) // stringify changes the user object from the object string.
            // redirect to home component- get  products
            navigate("/")
            }else{
                // if  the user is not found show an error
                setError(response.data.message)
            }
        } catch (error) {
            setLoading("")
            setError(error.data.message)
        }
    }
    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="col-md-6 p-4 card shadow-lg rounded-4 signin-card">
                {message}
                {error}
                {loading}
                <form onSubmit={submit} className="card-body">
                    <h1 className="text-center mb-4 fw-bold text-danger">Sign In</h1>
                    <input type="text" placeholder="username"
                        className="text-primary form-control" required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} />
             
             
                 {username}
                    <br />
                    <input type="password" placeholder="password"
                        className="text-primary form-control" required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    {password}
                    <br />
                    <button type="submit" className="btn btn-danger">sign in</button>
                    <p className="text-primary">Already have an account?</p>
                    <Link to='/signup' className="text-decoration-none fw-semibold link-classic text-danger">sign up</Link>
                </form>
            </div>
        </div>
    )
}

export default SignIn