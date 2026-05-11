import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminDashboard = () => {
    const [user, setUser] = useState(null)
    const [activeTab, setActiveTab] = useState('overview')
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user') || 'null')
        if (!storedUser) {
            navigate('/signin')
            return
        }
        setUser(storedUser)
        fetchProducts()
    }, [navigate])

    const fetchProducts = async () => {
        setLoading(true)
        try {
            const response = await fetch('https://serahswala.alwaysdata.net/api/get_product_details')
            const data = await response.json()
            setProducts(data)
        } catch (error) {
            console.error('Error fetching products:', error)
        }
        setLoading(false)
    }

    const deleteProduct = async (productId) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            try {
                const formData = new FormData()
                formData.append('product_id', productId)
                await fetch('https://serahswala.alwaysdata.net/api/delete_product', {
                    method: 'POST',
                    body: formData,
                })
                fetchProducts()
            } catch (error) {
                console.error('Error deleting product:', error)
            }
        }
    }

    const handleLogout = () => {
        localStorage.removeItem('user')
        navigate('/signin')
    }

    return (
        <div className="admin-dashboard">
            <div className="admin-header bg-dark text-light py-3 sticky-top shadow">
                <div className="container d-flex justify-content-between align-items-center">
                    <div>
                        <h4 className="mb-0">Admin Dashboard</h4>
                        <p className="text-muted mb-0">Welcome, {user?.username}</p>
                    </div>
                    <button onClick={handleLogout} className="btn btn-outline-light">
                        Logout
                    </button>
                </div>
            </div>

            <div className="container-fluid py-4">
                <div className="row">
                    <div className="col-lg-3 mb-4 mb-lg-0">
                        <div className="list-group sticky-top">
                            <button
                                onClick={() => setActiveTab('overview')}
                                className={`list-group-item list-group-item-action ${activeTab === 'overview' ? 'active' : ''}`}
                            >
                                📊 Overview
                            </button>
                            <button
                                onClick={() => setActiveTab('products')}
                                className={`list-group-item list-group-item-action ${activeTab === 'products' ? 'active' : ''}`}
                            >
                                💊 Products
                            </button>
                            <button
                                onClick={() => setActiveTab('addproduct')}
                                className={`list-group-item list-group-item-action ${activeTab === 'addproduct' ? 'active' : ''}`}
                            >
                                ➕ Add Product
                            </button>
                            <button
                                onClick={() => setActiveTab('appointments')}
                                className={`list-group-item list-group-item-action ${activeTab === 'appointments' ? 'active' : ''}`}
                            >
                                📅 Appointments
                            </button>
                        </div>
                    </div>

                    <div className="col-lg-9">
                        {activeTab === 'overview' && (
                            <div>
                                <h2 className="mb-4">Dashboard Overview</h2>
                                <div className="row g-3">
                                    <div className="col-md-3">
                                        <div className="card border-start-primary shadow h-100 py-2">
                                            <div className="card-body">
                                                <div className="text-primary fw-bold text-uppercase mb-1">
                                                    Total Products
                                                </div>
                                                <div className="h3 mb-0">{products.length}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="card border-start-success shadow h-100 py-2">
                                            <div className="card-body">
                                                <div className="text-success fw-bold text-uppercase mb-1">
                                                    Active Users
                                                </div>
                                                <div className="h3 mb-0">--</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="card border-start-info shadow h-100 py-2">
                                            <div className="card-body">
                                                <div className="text-info fw-bold text-uppercase mb-1">
                                                    Appointments
                                                </div>
                                                <div className="h3 mb-0">--</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="card border-start-warning shadow h-100 py-2">
                                            <div className="card-body">
                                                <div className="text-warning fw-bold text-uppercase mb-1">
                                                    Total Revenue
                                                </div>
                                                <div className="h3 mb-0">--</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'products' && (
                            <div>
                                <h2 className="mb-4">Manage Products</h2>
                                {loading ? (
                                    <p>Loading products...</p>
                                ) : products.length === 0 ? (
                                    <p className="text-muted">No products found.</p>
                                ) : (
                                    <div className="table-responsive">
                                        <table className="table table-hover">
                                            <thead className="table-dark">
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Name</th>
                                                    <th>Price</th>
                                                    <th>Description</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {products.map((product) => (
                                                    <tr key={product.product_id || product.id}>
                                                        <td>{product.product_id || product.id}</td>
                                                        <td className="fw-semibold">{product.product_name}</td>
                                                        <td>KES {product.product_cost}</td>
                                                        <td className="text-muted small">{product.product_description}</td>
                                                        <td>
                                                            <button
                                                                onClick={() => deleteProduct(product.product_id || product.id)}
                                                                className="btn btn-sm btn-danger"
                                                            >
                                                                Delete
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                            </div>
                        )}

                        {activeTab === 'addproduct' && (
                            <div>
                                <h2 className="mb-4">Add New Product</h2>
                                <div className="card shadow-sm p-4">
                                    <p className="text-muted mb-3">
                                        Use the product form to add new medicines to the Health Bridge platform.
                                    </p>
                                    <a href="/addproduct" className="btn btn-primary">
                                        Go to Add Product Form
                                    </a>
                                </div>
                            </div>
                        )}

                        {activeTab === 'appointments' && (
                            <div>
                                <h2 className="mb-4">Appointments</h2>
                                <div className="card shadow-sm p-4">
                                    <p className="text-muted">
                                        Appointment management coming soon. This will display all booking requests.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard;

