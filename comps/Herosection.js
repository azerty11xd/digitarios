import images from '../img.json'
import Image from 'next/image'
import { Row, Col, Button } from 'reactstrap'

function Herosection() {
  return (
    <div>
      {' '}
      <div className='hero-section '>
        <h1 style={{ fontSize: '4rem' }}>
          choose Digitarios as your digital
          <br /> marketing agency
        </h1>
        <Button style={{ marginTop: '40px' }} color='primary'>
          get in touch
        </Button>{' '}
      </div>
      <div style={{overflow:"hidden"}}>
        <Row
          xs='4'
          sm='4'
          md='4'
          className=''
          style={{ margin: '0px',maxWidth: '100%',minWidth:"1800px"  }}
        >
          {images.map((image, index) => (
            <Col key={index} className='d-flex justify-content-center '>
              <div
                className={`image-container ${index % 2 === 0 ? 'up' : 'down'}`}
              >
                <img
                  style={{ borderRadius: '15px',minWidth:"400px",marginTop:"250px" }}
                  src={image.src}
                  alt={image.alt}
                  className='img-fluid'
                  width={300}
                  height={450}
                />
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}

export default Herosection
