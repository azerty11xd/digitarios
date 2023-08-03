import Head from 'next/head'
import Link from 'next/link'

export default function home() {
  return (
    <>
      <Head>
        <title>Service - Axtra</title>
        <link rel='icon' type='image/x-icon' href='/imgs/logo/favicon.png' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <div className='cursor1'></div>
      <div className='cursor2'></div>
      <div className='preloader'>{/* Add preloader HTML content */}</div>
      <div className='has-smooth' id='has_smooth'></div>
      <button id='scroll_top' className='scroll-top'>
        <i className='fa-solid fa-arrow-up'></i>
      </button>
      {/* Offcanvas area start */}
      <div className='offcanvas__area'>{/* Add offcanvas HTML content */}</div>
      {/* Offcanvas area end */}
      <div id='smooth-wrapper'>
        <div id='smooth-content'>
          <main>
            {/* Add your main content here */}
            {/* ... Your entire HTML content from the provided template ... */}
          </main>
          {/* Footer area start */}
          <footer className='footer__area'>
            <div className='footer__top'>
              <div className='container footer-line'></div>
              <img
                src='/imgs/thumb/footer.jpg'
                alt='Footer Image'
                data-speed='0.5'
              />
            </div>
            <div className='footer__btm'>
              <div className='container'>
                <div className='row footer__row'>
                  <div className='col-xxl-12'>
                    <div className='footer__inner'>
                      <div className='footer__widget'>
                        <img
                          className='footer__logo'
                          src='/imgs/logo/footer-logo-white.png'
                          alt='Footer Logo'
                        />
                        <p>
                          When do they work well, and when do they on us and
                          finally, when do we actually need how can we avoid
                          them.
                        </p>
                        <ul className='footer__social'>
                          <li>
                            <a href='#'>
                              <span>
                                <i className='fa-brands fa-facebook-f'></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span>
                                <i className='fa-brands fa-twitter'></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span>
                                <i className='fa-brands fa-instagram'></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <span>
                                <i className='fa-brands fa-linkedin'></i>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      {/* Add other footer widgets */}
                      <div className='footer__widget-2'>
                        <h2 className='footer__widget-title'>Information</h2>
                        <ul className='footer__link'>
                          <li>
                            <a href='/about'>About Company</a>
                          </li>
                          <li>
                            <a href='/portfolio'>Case Study</a>
                          </li>
                          <li>
                            <a href='/career'>Career</a>
                          </li>
                          <li>
                            <a href='/blog'>blog</a>
                          </li>
                          <li>
                            <a href='/contact'>contact</a>
                          </li>
                        </ul>
                      </div>
                      <div className='footer__widget-3'>
                        <h2 className='footer__widget-title'>Contact Us</h2>
                        <ul className='footer__contact'>
                          <li>
                            Valentin, Street Road 24, New York, USA - 67452
                          </li>
                          <li>
                            <a href='tel:02574328301' className='phone'>
                              +02) 574 - 328 - 301{' '}
                            </a>
                          </li>
                          <li>
                            <a href='mailto:info@buildyexample.com'>
                              info@buildyexample.com
                            </a>
                          </li>
                        </ul>
                      </div>
                      {/* Add other footer widgets */}
                      <div className='footer__widget-4'>
                        <h2 className='project-title'>
                          Have a project in your mind?
                        </h2>
                        <div className='btn_wrapper'>
                          <a
                            href='/contact'
                            className='wc-btn-primary btn-hover btn-item'
                          >
                            <span></span> contact us{' '}
                            <i className='fa-solid fa-arrow-right'></i>
                          </a>
                        </div>
                        <h3 className='contact-time'>
                          09 : 00 AM - 10 : 30 PM
                        </h3>
                        <h4 className='contact-day'>Saturday - Thursday</h4>
                      </div>
                      <div className='footer__subscribe'>
                        <form action='#'>
                          <input
                            type='email'
                            name='email'
                            placeholder='Enter your email'
                          />
                          <button type='submit' className='subs-btn'>
                            <i className='fa-solid fa-paper-plane'></i>
                          </button>
                        </form>
                      </div>
                      {/* Add other footer widgets */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className='footer__copyright'>
              © 2022 - 2025 | Alrights reserved by{' '}
              <a href='https://wealcoder.com/' target='_blank'>
                Wealcoder
              </a>
            </p>
          </footer>
          {/* Footer area end */}
        </div>
      </div>
      {/* All JS files */}
      <script src='/js/jquery-3.6.0.min.js'></script>
      <script src='/js/bootstrap.bundle.min.js'></script>
      <script src='/js/swiper-bundle.min.js'></script>
      <script src='/js/counter.js'></script>
      <script src='/js/gsap.min.js'></script>
      <script src='/js/ScrollTrigger.min.js'></script>
      <script src='/js/ScrollToPlugin.min.js'></script>
      <script src='/js/ScrollSmoother.min.js'></script>
      <script src='/js/SplitText.min.js'></script>
      <script src='/js/chroma.min.js'></script>
      <script src='/js/mixitup.min.js'></script>
      <script src='/js/vanilla-tilt.js'></script>
      <script src='/js/jquery.meanmenu.min.js'></script>
      <script src='/js/main.js'></script>
    </>
  )
}
