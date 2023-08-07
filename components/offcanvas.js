import React from 'react'

function offcanvas() {
  return (
    <div className='offcanvas__area'>
      <div className='offcanvas__body'>
        <div className='offcanvas__left'>
          <div className='offcanvas__logo'>
            <a href='/'>
              <img
                src='/imgs/logo/site-logo-white-2.png'
                alt='Offcanvas Logo'
              />
            </a>
          </div>
          <div className='offcanvas__links'>
            {/* Add your offcanvas links here */}
          </div>
        </div>
        <div className='offcanvas__mid'>
          <div className='offcanvas__menu-wrapper'>
            <nav className='offcanvas__menu'>
              <ul className='menu-anim'>
                <li>
                  <a href='/'>Home</a>
                </li>
                <li>
                  <a href='service'>Service</a>
                </li>
                <li>
                  <a href='contact'>contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className='offcanvas__right'>
          <div className='offcanvas__search'>
            <form action='#'>
              <input type='text' name='search' placeholder='Search keyword' />
              <button>
                <i className='fa-solid fa-magnifying-glass'></i>
              </button>
            </form>
          </div>
          <div className='offcanvas__contact'>
            <h3>Get in touch</h3>
            <ul>
              <li>
                <a href='tel:02094980547'>+(02) - 094 980 547</a>
              </li>
              <li>
                <a href='mailto:info@extradesign.com'>info@extradesign.com</a>
              </li>
              <li>230 Norman Street New York, QC (USA) H8R 1A1</li>
            </ul>
          </div>
          <img src='/imgs/shape/11.png' alt='shape' className='shape-1' />
          <img src='/imgs/shape/12.png' alt='shape' className='shape-2' />
        </div>
        <div className='offcanvas__close'>
          <button type='button' id='close_offcanvas'>
            <i className='fa-solid fa-xmark'></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default offcanvas
