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
      <div>
        <Row
          xs='auto'
          sm='auto'
          md='auto'
          className='justify-content-center'
          style={{ margin: '0px', marginTop: '150px' }}
        >
          {images.map((image, index) => (
            <Col key={index} className='d-flex justify-content-center '>
              <div
                className={`image-container ${index % 2 === 0 ? 'up' : 'down'}`}
              >
                <Image
                  style={{ borderRadius: '15px', margin: '50px' }}
                  src={image.src}
                  alt={image.alt}
                  width={350}
                  height={500}
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
