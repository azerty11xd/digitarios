import Image from 'next/image'
import {
  Row,
  Col,
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
} from 'reactstrap'

function Firstsection() {
  return (
    <div className='container-fluid  innerCard '>
      <div className='marginWithPadding'>
        <Row>
          <Col className='col-12 col-xl-6   d-flex justify-content-center    '>
            <img
              src='/test.png'
              className='img-fluid img  '
              alt='image'
              contain
              width={600}
              height={400}
            />
          </Col>
          <Col className='col-12 col-xl-6  d-flex justify-content-center pt-3 '>
            <div>
              <h2 className='display-4 sectionOneTitle'>
                How Digitarios creates
                <br /> growth business{' '}
              </h2>
              <div className='pt-4 '>
                <div className=' d-flex align-items-center '>
                  <img
                    src='/success.png'
                    className='mb-1 '
                    alt='image'
                    contain
                    width={40}
                    height={40}
                  />
                  <p className='mt-1 ml-2  '>
                    {' '}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur, sed.
                  </p>
                </div>

                <div className=' d-flex align-items-center '>
                  <img
                    src='/success.png'
                    className='mb-1 '
                    alt='image'
                    contain
                    width={40}
                    height={40}
                  />
                  <p className='mt-1 ml-2  '>
                    {' '}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur, sed.
                  </p>
                </div>
                <div className=' d-flex align-items-center '>
                  <img
                    src='/success.png'
                    className='mb-1 '
                    alt='image'
                    contain
                    width={40}
                    height={40}
                  />
                  <p className='mt-1 ml-2  '>
                    {' '}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur, sed.
                  </p>
                </div>
                <div className=' d-flex align-items-center '>
                  <img
                    src='/success.png'
                    className='mb-1 '
                    alt='image'
                    contain
                    width={40}
                    height={40}
                  />
                  <p className='mt-1 ml-2  '>
                    {' '}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur, sed.
                  </p>
                </div>
              </div>
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
            </div>
          </Col>
        </Row>

        <Row className='firstSectionCards'>
          <Col className='col-12 col-lg-6 p-3 d-flex justify-content-center'>
            <Card className='second-section-card'>
              <div className='card-img-container'>
                <img
                  className='rounded '
                  src='/test.png'
                  alt='img'
                  width={60}
                  height={60}
                />
              </div>
              <CardBody>
                <CardTitle className='h4 mt-5'>proven performance</CardTitle>
                <CardText className='mt-2'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum veniam, repellat, quis doloribus libero ut magni, non
                  repellendus iste omnis quidem. Modi, unde excepturi veniam
                  molestiae ut voluptatibus iure doloribus.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col className='col-12 col-lg-6 p-3'>
            <Card className='second-section-card'>
              <div className='card-img-container'>
                <img
                  className='rounded '
                  src='/test.png'
                  alt='img'
                  width={60}
                  height={60}
                />
              </div>
              <CardBody>
                <CardTitle className='h4 mt-5'>proven performance</CardTitle>
                <CardText className='mt-2'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum veniam, repellat, quis doloribus libero ut magni, non
                  repellendus iste omnis quidem. Modi, unde excepturi veniam
                  molestiae ut voluptatibus iure doloribus.
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Firstsection
