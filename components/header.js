'use client'
import React from 'react'
import dynamic from 'next/dynamic'
function header() {
  return (
    <header className='header__area-3'>
      <div className='header__inner-3'>
        <div className='header__logo-2'>
          <a href='/' className='logo-dark'>
            <img src='/imgs/logo/logo-black.png' alt='Site Logo' />
          </a>
          <a href='/' className='logo-light'>
            <img src='/imgs/logo/site-logo-white-2.png' alt='Site Logo' />
          </a>
        </div>
        <div className='header__nav-2'>
          <ul className='main-menu-3 menu-anim'>
            <li className='has-megamenu'>
              <a href='/'>home</a>
            </li>
            <li>
              <a href='service'>services</a>
            </li>
            <li>
              <a href='contact'>Contact</a>
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

//export default dynamic(() => Promise.resolve(header), { ssr: true })
