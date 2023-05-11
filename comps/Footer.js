import { Container, Row, Col } from 'reactstrap';
import NextLink from 'next/link'
function Footer() {
  return (
    <footer>
    <div className='container-fluid'>
    <Row className=' no-gutters d-flex  firstRowFooter'>
      <Col xs="6" sm="6" className='justify-content-center'>
        <li>logo</li>
      </Col>  
      <Col xs="6" sm="6" className='justify-content-end'>
        <li>social media links</li>
      </Col>

    </Row>


      <Row className='justify-content-center no-gutters footerLinks'>
        <Col xs="12" sm="2" className='d-flex flex-column align-items-center'>
          <h5>Column 1</h5>
          <ul className="list-unstyled">
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
        </Col>
        <Col xs="12" sm="2" className='d-flex flex-column align-items-center' >
          <h5>Column 2</h5>
          <ul className="list-unstyled">
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
        </Col>
        <Col xs="12" sm="2" className='d-flex flex-column align-items-center' >
          <h5>Column 3</h5>
          <ul className="list-unstyled">
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
        </Col>
        <Col xs="12" sm="2" className='d-flex flex-column align-items-center'>
          <h5>Column 4</h5>
          <ul className="list-unstyled">
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
        </Col>

        <Col xs="12" sm="2" className='d-flex flex-column align-items-center'>
          <h5>Column 5</h5>
          <ul className="list-unstyled">
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
        </Col>
      </Row>
      <hr style={{ 
        borderTop: '2px solid #eee',
       
      }} />
    </div >
 <div className='d-flex justify-content-between lastLineFooter'>
    <p className='footerText'>© 2023 Digitarios,inc.All rights reserved</p>
    <div>
    <NextLink className=' test ' href="/">
        <a className='Link'>learn more</a>
      </NextLink>
      <NextLink className=' test ' href="/">
        <a className='Link'>learn more</a>
      </NextLink>
    </div>

 </div>
 
  </footer>
)
  
}

export default Footer
