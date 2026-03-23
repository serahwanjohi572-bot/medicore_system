import axios from "axios"
import React, { useState } from "react"
const AddProduct = ()=>{
    // Hooks
    const[product_name, setproduct_name]= useState("")
    const[product_description, setproduct_description]= useState("")
    const[product_cost, setproduct_cost]= useState("")
    const[product_photo, setproduct_photo]= useState("")
    
    //
    const[loading, setLoading]= useState("")
    const[success, setMessage]= useState("")
    const[error, setError]= useState("")
    // Handling submit
    const submit = async (e) => {
        e.preventDefault()
        setLoading("This will take a few minutes...please wait.") 
        try {
            const data= new FormData()
            data.append('product_name', product_name)
            data.append('product_description', product_description)
            data.append('product_cost', product_cost)
            data.append('product_photo', product_photo)
            const response = await axios.post("https://serahswala.alwaysdata.net/api/add_product",data)
            setLoading("")
            setMessage(response.data.message)
            setproduct_name("")
            setproduct_description("")
            setproduct_cost("")
            setproduct_photo("")
        } catch (error) {
            setLoading("")
            setError(error.message)
        }
    }
    return(
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light ">
            <div className=" col-md-6 p-4 card shadow-lg rounded-4 signin-card">
                {success}
                {loading}
                {error}
                <form onSubmit={submit} className="card-body">
                    <h1 className="text-danger">Upload products</h1>
                    <input type="text" placeholder="Enter product name" 
                    className="form-control" required 
                    value={product_name} 
                    onChange={(e) => setproduct_name(e.target.value)}/> 
                    {product_name}
                    <br />
                  <textarea 
                  className="form-control" 
                  placeholder="Describe your product" required 
                  value={product_description} 
                  onChange={(e) => setproduct_description(e.target.value)}
                  ></textarea>
                  {product_description}
                    <br />
                    <input type="number" placeholder="Enter product cost" 
                    className="form-control" required
                    value={product_cost}
                    onChange={(e) => setproduct_cost(e.target.value)}/>
                    {product_cost}
                    <br />
                    <h5 className="text-primary">Browse/upload product image</h5>
                    <input type="file" placeholder="" 
                    className="form-control" 
                    accept="image/*"
                    required
                    onChange={(e) => setproduct_photo(e.target.files[0])}/>
                    <br />
                     <button type="submit" className="btn btn-danger">uplaod product</button> <br />
                </form>
            </div>
        </div>
    )
}
export default AddProduct