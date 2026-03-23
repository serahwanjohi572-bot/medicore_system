import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const GetProducts = () => {
    //Hooks
    // products hooks
    const [products, setProducts] = useState([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState("")
    const navigate=useNavigate()// navigation from one component to another

    //path to our images
    const img_url = "https://serahswala.alwaysdata.net/static/images/"

    // function to get all the products
    const getproducts = async () => {
        setLoading("wait...")
        try {
            // connect to ur backend api
            const response = await axios.get("https://serahswala.alwaysdata.net/api/get_product_details")
            // Update the products hook with the data from the api response
            setProducts(response.data)
            // reset the loading hook after getting the response
            setLoading("")
        } catch (error) {
            setLoading("")
            setError("sorry...something went wrong")

        }
    }
    //useEffect is used to run side effcts 
    useEffect(() => {
        getproducts()
    }, [])// the empty dependancy ensures that the gets products function runs once when the component mounts

    return (
        <div className="row ">
            <h5 className="display-4 mt-3 text-center text-dark"><b>Available products</b></h5>
            {error}
            {loading}
            {products.map((product) => (

                <div className="col-md-3 text-center mb-4">
                    {/* a card with dummy data*/}
                    <div className="card shadow">
                        <img src={img_url+product.product_photo} alt="" className="product_img mt-4" />
                        <div className="card-body">
                            <h5 className="mt-2">{product.product_name}</h5>
                            <p className="text-danger">{product.product_description}</p>
                            <p className="text-dark">{product.product_cost} KES</p>
                            <button onClick={()=>navigate('/mpesapayment',{state:{product}})} className="btn btn-warning w-100 mt-2">Purchase now</button>
                        </div>

                    </div>
                </div>
            ))}
        </div>
    )
}
export default GetProducts