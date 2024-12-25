import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


export default function ProductList() {
 

    const[products,setProducts]=useState([]);

    

    useEffect(()=>{
        loadProducts();
    },[])

    const loadProducts=async()=>{

        const result=await axios.get("http://localhost:8080/api/product/list")
        setProducts(result.data)

    }

    const deleteProduct=async(id)=>{
      if(window.confirm("Are you want to delete this product?")){
        await axios.delete(`http://localhost:8080/api/product/delete/${id}`)
        loadProducts();
      }
      loadProducts();
    

    }

  return (
    <div className="bg-primary min-vh-100 d-flex flex-column justify-content-start align-items-center py-5">
    <div className="container px-5 py-4">
      {/* Title and Description */}
      <div className="mb-4 text-center">
        <h2 className="text-light">Product Inventory</h2>
        <p className="text-light">
          Browse through our extensive collection of products. Easily manage your inventory with actions to view, edit, or delete products.
        </p>
      </div>

      {/* Table */}
      <table className="table table-hover table-bordered shadow-lg bg-white">
        <thead className="bg-dark text-white">
          <tr>
            <th scope="col">Sl No.</th>
            <th scope="col">Product Name</th>
            <th scope="col">Product Model</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
            <th scope="col" className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product, index) => (
              <tr key={product.id || index}>
                <th scope="row">{index + 1}</th>
                <td>{product.productName}</td>
                <td>{product.model}</td>
                <td>{product.category}</td>
                <td>${product.price.toFixed(2)}</td>
                <td className="text-center">
                  <Link className="btn btn-outline-primary btn-sm me-2" to={`/product-details/${product.id}`}>
                    View
                  </Link>
                  <Link className="btn btn-outline-success btn-sm me-2" to={`/update-product/${product.id}`}>
                    Edit
                  </Link>
                  <button className="btn btn-outline-danger btn-sm" onClick={() => deleteProduct(product.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center text-muted">
                No products available. Add new products to display them here.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Summary Section */}
      {products.length > 0 && (
        <div className="mt-4 text-end">
          <p className="fw-bold text-light">
            Total Products: <span className="text-light">{products.length}</span>
          </p>
        </div>
      )}
    </div>
  </div>
  
  )
}
