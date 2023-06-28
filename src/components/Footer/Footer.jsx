import React from 'react'
import './Footer.scss'

function Footer() {
  return (
    <div className='main-footer-wrapper'>
      <div className="max-wi-wrapper">
        <div className="inner-footer-wrapper">
          <section className="top-section">
            <div className="col-md-5 offset-md-1 mb-3">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of what's new and exciting from us.</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label  htmlFor="newsletter1" className="visually-hidden">Email address</label>
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
              Site by Tequila Tech
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Footer