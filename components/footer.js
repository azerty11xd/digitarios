import React from 'react'

function footer() {
  return (
    <footer className='footer__area-3'>
      <div className='footer__btm-3'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-xxl-4 col-xl-4 col-lg-4'>
              <div className='footer__copyright-3'>
                <p>
                  © 2022 - 2025 | Alrights reserved by{' '}
                  <a
                    href='https://wealcoder.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Wealcoder
                  </a>
                </p>
              </div>
            </div>
            <div className='col-xxl-8 col-xl-8 col-lg-8'>
              <div className='footer__nav-2'>
                <ul className='footer-menu-2 menu-anim'>
                  <li>
                    <a href='home.html'>Home</a>
                  </li>
                  <li>
                    <a href='service'>Service</a>
                  </li>
                  <li>
                    <a href='contact'>Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default footer
