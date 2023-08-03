'use client'

import Script from 'next/script'
export default function clientComponent() {
  return (
    <>
      <Script
        src='/js/jquery-3.6.0.min.js'
        strategy='lazyOnload'
        onLoad={() => console.log(`aa`)}
      />
      <Script src='/js/bootstrap.bundle.min.js' strategy='lazyOnload' />
      <Script src='/js/swiper-bundle.min.js' strategy='lazyOnload' />
      <Script src='/js/counter.js' strategy='lazyOnload' />
      <Script src='/js/gsap.min.js' strategy='lazyOnload' />
      <Script src='/js/ScrollTrigger.min.js' strategy='lazyOnload' />
      <Script src='/js/ScrollToPlugin.min.js' strategy='lazyOnload' />
      <Script src='/js/ScrollSmoother.min.js' strategy='lazyOnload' />
      <Script src='/js/SplitText.min.js' strategy='lazyOnload' />
      <Script src='/js/chroma.min.js' strategy='lazyOnload' />
      <Script src='/js/mixitup.min.js' strategy='lazyOnload' />
      <Script src='/js/vanilla-tilt.js' strategy='lazyOnload' />
      <Script src='/js/jquery.meanmenu.min.js' strategy='lazyOnload' />
      <Script src='/js/main.js' strategy='lazyOnload' />
    </>
  )
}
