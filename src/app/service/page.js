import React from 'react'
import ServiceHeroArea from '../../../components/serviceHeroArea'
import ServiceAreaServices from '../../../components/serviceAreaServices'
import BrandArea from '../../../components/brandArea'
import Cta from '../../../components/cta'
import ServiceFooter from '../../../components/serviceFooter'
import ClientComponent from '../../../components/clientComponent'
import Offcanvas from '../../../components/offcanvas'

import '../styles/bootstrap.min.css'
import '../styles/all.min.css'
import '../styles/swiper-bundle.min.css'
import '../styles/progressbar.css'
import '../styles/meanmenu.min.css'
import '../styles/master.scss'
export default function Service() {
  return (
    <div>
      <Offcanvas />
      <div className='cursor1'></div>
      <div className='cursor2'></div>

      <div className='has-smooth' id='has_smooth'></div>
      <div id='smooth-wrapper'>
        <div id='smooth-content'>
          <ClientComponent />
          <ServiceHeroArea />
          <ServiceAreaServices />
          <BrandArea />
          <Cta />
          <ServiceFooter />
        </div>
      </div>
    </div>
  )
}
