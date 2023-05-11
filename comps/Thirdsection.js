import {  Button, Row, Col } from 'reactstrap'

function Thirdsection() {
  return (
    <div className='container-fluid innerCard'>
      <div className='marginWithPaddingS3'>
        <Row className='py-5'>
          <Col className='col-12 col-lg-6      '>
            <h1>
              Ready to grow with a digital marketing agency you can trust ? get
              your proposal right now
            </h1>
          </Col>
          <Col className='col-12 col-lg-6   '>
            {' '}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae at vitae cumque sapiente iusto reiciendis ipsa, dicta
              consequuntur odio? Esse cumque dolorem hic accusantium distinctio
              voluptas iure iusto nemo nesciunt maiores quibusdam totam, iste
              sunt ut inventore vero earum est. Quia esse aut id, temporibus
              enim et quisquam voluptate consequatur.

            </p>
            <Button className=' customButton'>
                <span>send me a proposal</span>
                <img
                  src='/success.png'
                  alt='image'
                  contain
                  width={30}
                  height={30}
                />
              </Button>{' '}
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Thirdsection
