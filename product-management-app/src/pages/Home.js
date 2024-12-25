import React from 'react'

export default function Home() {
  return (
    <div className="home-page bg-light text-dark">
    {/* Header Section */}
    <header className="bg-primary text-white text-center py-5 shadow-sm">
      <h1>Welcome to Our Product App</h1>
      <p>Your one-stop shop for high-quality and reliable products.</p>
    </header>

    {/* Features Section */}
    <div className="container my-5">
      <h2 className="text-center mb-4">Why Choose Us?</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card border-0 shadow-lg p-3 mb-5 bg-body rounded text-center">
            <div className="card-body">
              <h5 className="card-title text-primary">High Quality</h5>
              <p className="card-text">
                We provide only the best quality products that meet your expectations.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-0 shadow-lg p-3 mb-5 bg-body rounded text-center">
            <div className="card-body">
              <h5 className="card-title text-primary">Affordable Pricing</h5>
              <p className="card-text">
                Enjoy competitive pricing without compromising on quality.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-0 shadow-lg p-3 mb-5 bg-body rounded text-center">
            <div className="card-body">
              <h5 className="card-title text-primary">Fast Delivery</h5>
              <p className="card-text">
                Get your products delivered to your doorstep on time, every time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Call-to-Action Section */}
    <div className="container my-5 text-center">
      <div className="p-5 bg-primary text-white shadow-lg rounded">
        <h2>Ready to Explore Our Products?</h2>
        <p>Discover a wide range of products tailored to meet your needs.</p>
        <button className="btn btn-light btn-lg shadow-sm">Shop Now</button>
      </div>
    </div>

    {/* Footer Section */}
    <footer className="bg-dark text-white text-center py-3 shadow-sm">
      <p>&copy; 2024 Product App. All rights reserved.</p>
    </footer>
  </div>
  )
}
