import Image from 'next/image'
import styles from './page.module.css'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Offcanvas from '../../components/offcanvas'
import HeroSection from '../../components/heroSection'
import BrandArea from '../../components/brandArea'
import Service from '../../components/service'
import About from '../../components/about'
import Portfolio from '../../components/portfolio'
import Testemonial from '../../components/testemonial'
import Workflow from '../../components/workflow'
import Price from '../../components/price'
import Blog from '../../components/blog'
import './styles/master.scss'
import './styles/all.min.css'
import './styles/bootstrap.min.css'

import './styles/locomotive-scroll.min.css'
import './styles/master-dist.css'
//import './styles/master.css.map'
import './styles/meanmenu.min.css'
import './styles/progressbar.css'
import './styles/swiper-bundle.min.css'
import ClientComponent from '../../components/clientComponent'

import Head from 'next/head'
export default function Home() {
  return (
    <main className={styles.main}>
      <ClientComponent />
      <Header />
      <Offcanvas />
      <div className='cursor1'></div>
      <div className='cursor2'></div>

      <div className='has-smooth' id='has_smooth'></div>

      <button id='scroll_top' className='scroll-top'>
        <i className='fa-solid fa-arrow-up'></i>
      </button>
      <div id='smooth-wrapper'>
        <div id='smooth-content'>
          <HeroSection />
          <BrandArea />
          <About />
          <Service />
          <Portfolio />
          <Testemonial />
          <Workflow />
          <Price />
          <Blog />
          <Footer />
        </div>
      </div>
    </main>
  )
}
