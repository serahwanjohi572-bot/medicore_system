import React, {useState} from "react"
import axios from "axios"
import { useLocation } from "react-router-dom"
const Mpesapayment = ()=>{
    //  useLocation is used to find a url
    const {product}= useLocation().state || {}
    const[phone, setPhone]= useState("")
    const[message, setMessage]=useState("")

    // image url
     const img_url = "https://malombeswala.alwaysdata.net/static/images/"
     // function to handle data submission
     const submit = async (e) => {
        e.preventDefault()
        setMessage("please wait...")
     try {
        // create a form data
        const data = new FormData()
        // Get the customer phone number
        data.append('phone',phone)// state variabe
        data.append('amount',product.product_cost)// the amount is coming from the product sent from the home component
        // connection to api
           const response = await axios.post("https://serahswala.alwaysdata.net/api/mpesa_payment",data)
           //update your hook with a message from the backend
           setMessage(response.data.message)
     } catch (error) {
        setMessage(error.message)
        
     }
    }
    return(
        <div className="row">
           <div className=" container col-md-6  mt-5">
                <div className="card shadow p-3 mx-auto">
                    <h5 className="display-4 mt-3 text-center text-success"><b>Lipa Na M-pesa</b></h5>
                  <img src={img_url+product.product_photo} alt="product" className="img-fluid mb-2"/>
                    <div className="card-body">
                        <p className="mb-1"><strong>product:</strong>{product.product_name}</p>
                        <p className="mb-1"><strong>price:</strong>{product.product_cost}</p>
                        <form onSubmit={submit}>
                            <input type="text" 
                            placeholder="Enter phone number,254..." 
                            className="form-control mb-2"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}/>
                            {phone}
                        <button type="submit" className="btn btn-dark w-100 mt-2">pay now</button>

                        </form>
                        <p className="text-center mt-2">{message}</p>
                    </div>
                </div>
           </div>
        </div>
    )
}
export default Mpesapayment