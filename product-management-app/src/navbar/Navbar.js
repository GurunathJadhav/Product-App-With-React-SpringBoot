import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-lg sticky-top">
    <div className="container">
      {/* Brand Logo */}
      <Link className="navbar-brand fw-bold" to="/">
        Product App
      </Link>
      {/* Toggler for Mobile View */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      {/* Navigation Links */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link active text-light" aria-current="page" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/register-product">
              Register Product
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/product-list">
              Product List
            </Link>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
  )
}
