import axios from 'axios';
import React, { useState } from 'react'
import {Link, useNavigate } from 'react-router-dom';

export default function Register() {

    const[product,setProduact]=useState({
        productName:"",
        price:"",
        model:"",
        category:"",
        description:""
    })

    let navigation=useNavigate();

    const{productName,price,model,category,description}=product;

    const onInputChange=(e)=>{
        setProduact({...product,[e.target.name]:e.target.value})
    }

    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/api/product/register",product);
        navigation("/product-list");
       

    }

    return (
        
        <div className="bg-primary min-vh-100 d-flex justify-content-center align-items-center">
      <div className="container d-flex justify-content-center my-5">
        <div className="card shadow-lg p-4 col-md-10 col-lg-8 bg-light">
          <h3 className="text-center text-primary mb-4">Product Registration</h3>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="row">
              {/* Left Column */}
              <div className="col-md-6">
                {/* Product Name */}
                <div className="mb-3">
                  <label htmlFor="productName" className="form-label">
                    Product Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="productName"
                    placeholder="Enter product name"
                    name="productName"
                    value={productName}
                    onChange={(e) => onInputChange(e)}
                    required
                  />
                </div>

                {/* Model */}
                <div className="mb-3">
                  <label htmlFor="model" className="form-label">
                    Product Model
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="model"
                    placeholder="Enter product model"
                    name="model"
                    value={model}
                    onChange={(e) => onInputChange(e)}
                    required
                  />
                </div>

                {/* Price */}
                <div className="mb-3">
                  <label htmlFor="price" className="form-label">
                    Price
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="price"
                    placeholder="Enter product price"
                    name="price"
                    value={price}
                    onChange={(e) => onInputChange(e)}
                    required
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="col-md-6">
                {/* Department */}
                <div className="mb-3">
                  <label htmlFor="categody" className="form-label">
                    Category
                  </label>
                  <select
                    className="form-select"
                    id="categody"
                    name="category"
                    value={category}
                    onChange={(e) => onInputChange(e)}
                    required
                  >
                    <option value="">Select Department</option>
                    <option value="electronics">Electronics</option>
                    <option value="furniture">Furniture</option>
                    <option value="clothing">Clothing</option>
                    <option value="sports">Sports</option>
                  </select>
                </div>

                {/* Description */}
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="description"
                    rows="3"
                    placeholder="Enter product description"
                    name="description"
                    value={description}
                    onChange={(e) => onInputChange(e)}
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-outline-primary w-50 shadow-lg mx-1">
                      Register
                    </button>
                    <Link className="btn btn-outline-danger w-50 shadow-lg mx-1" to="/">
                      Cancel
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
        

    )
}
