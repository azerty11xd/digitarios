'use client'
import React from 'react'

function header() {
  return (
    <header className='header__area-3'>
      <div className='header__inner-3'>
        <div className='header__logo-2'>
          <a href='index.html' className='logo-dark'>
            <img src='/imgs/logo/logo-black.png' alt='Site Logo' />
          </a>
          <a href='index.html' className='logo-light'>
            <img src='/imgs/logo/site-logo-white-2.png' alt='Site Logo' />
          </a>
        </div>
        <div className='header__nav-2'>
          <ul className='main-menu-3 menu-anim'>
            <li className='has-megamenu'>
              <a href='#'>home</a>
            </li>
            <li>
              <a href='service.html'>services</a>
            </li>
            <li>
              <a href='contact.html'>Contact</a>
            </li>
          </ul>
        </div>
        <div className='header__nav-icon-3'>
          <button id='open_offcanvas'>
            <img src='/imgs/icon/menu-black.png' alt='Menubar Icon' />
          </button>
        </div>
      </div>
    </header>
  )
}

export default header
