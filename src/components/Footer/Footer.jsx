import React from 'react'
import './Footer.scss'

function Footer() {
  return (
    <div className='main-footer-wrapper'>
      <div className="max-wi-wrapper">
        <div className="inner-footer-wrapper">
          <section className="top-section">

            <div className="services">
              <div className="col-6 col-md-2 mb-3">
                <h5>Services</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2"><a href='www.google.com' className="nav-link p-0 text-muted">Home</a></li>
                  <li className="nav-item mb-2"><a href='www.google.com' className="nav-link p-0 text-muted">Features</a></li>
                  <li className="nav-item mb-2"><a href='www.google.com' className="nav-link p-0 text-muted">Pricing</a></li>
                  <li className="nav-item mb-2"><a href='www.google.com' className="nav-link p-0 text-muted">FAQs</a></li>
                  <li className="nav-item mb-2"><a href='www.google.com' className="nav-link p-0 text-muted">About</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-5 offset-md-1 mb-3">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of what's new and exciting from us.</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label for="newsletter1" className="visually-hidden">Email address</label>
                  <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                  <button className="btn btn-primary" type="button">Subscribe</button>
                </div>
              </form>
            </div>

          </section>
          <section className="bottom-section">
            <div className="copy-rights">
              © 2022 Company, Inc. All rights reserved.
            </div>
            <div className="social-media-links">
              social media links
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Footer