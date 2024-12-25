import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link,useNavigate,useParams } from 'react-router-dom';

export default function ProductDetails() {

    const [product,setProduct]=useState([]);
    let navigation=useNavigate();

    const {id}=useParams();

    useEffect(()=>{
        loadProduct();
    },[])

    const loadProduct=async()=>{

        const result=await axios.get(`http://localhost:8080/api/product/${id}`)
        setProduct(result.data)

    }

    const addToCart=()=>{
        alert("Product added successfully")
        navigation("/product-list")

    }

  return (
    <div className="bg-primary min-vh-100 d-flex justify-content-center align-items-center">
    <div className="container my-5">
      <div className="card shadow-lg bg-light">
        <div className="row g-0">
          {/* Colored Section */}
          <div className="col-md-4 d-flex align-items-center justify-content-center bg-info text-white text-center">
            <div>
              <h4 className="fw-bold">Product Details</h4>
              <p className="mb-0">Explore the features of this amazing product!</p>
            </div>
          </div>

          {/* Product Details Section */}
          <div className="col-md-8">
            <div className="card-body p-4">
              <h3 className="card-title text-primary mb-3">{product.productName}</h3>

              <p className="card-text text-muted">
                <strong>Description:</strong> {product.description}
              </p>

              <p className="card-text text-success">
                <strong>Price:</strong> ${product.price}
              </p>

              <p className="card-text">
                <strong>Category:</strong> {product.category}
              </p>

              <p className="card-text">
                <strong>Model:</strong> {product.model}
              </p>

              <div className="mt-4">
                <button className="btn btn-outline-primary shadow-sm me-2" onClick={()=>addToCart()}>Add to Cart</button>
                <Link className="btn btn-outline-secondary shadow-sm" to="/product-list">
                  Back to Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
