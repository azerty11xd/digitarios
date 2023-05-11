import { Container, Progress, Row, Col, Button } from 'reactstrap'
function Secondsection() {
  const progress = 50
  return (
    <div className='container-fluid  innerCard'>
      <div className='marginWithPaddingS2'>
        <Row className='py-5 p-0 '>
          <Col className='col-12 col-lg-6 p-0   d-flex justify-content-center    '>
            <Container style={{}}>
              <h2 className='s2H2'>
                by the numbers <br></br> <span className='s2h2Span'>92%</span>
              </h2>
              <h2 className='s2H2'>Retention rate</h2>
              <p className='S2Text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                esse nemo eaque ullam libero. Molestias impedit distinctio
                labore, ullam optio velit doloribus quo voluptas sed quia
                necessitatibus odit, itaque blanditiis autem, obcaecati tempore
                neque deserunt reiciendis quas cumque. Nisi, inventore.
              </p>
            </Container>
          </Col>
          <Col className='col-12 col-lg-6  p-0  d-flex justify-content-center pt-3 '>
            {' '}
            <Container>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis blanditiis delectus molestias totam.
              </p>
              <div className='allProgBars'>
                {' '}
                <div className='vertical-progress '>
                  <div
                    className='vertical-progress-bar custom-progress-bar-1'
                    style={{ height: `${progress}%` }}
                    role='progressbar'
                    aria-valuenow={progress}
                    aria-valuemin='0'
                    aria-valuemax='100'
                  ></div>
                </div>
                <div className='vertical-progress  '>
                  <div
                    className='vertical-progress-bar custom-progress-bar-2'
                    style={{ height: `${progress}%` }}
                    role='progressbar'
                    aria-valuenow={progress}
                    aria-valuemin='0'
                    aria-valuemax='100'
                  ></div>
                </div>
                <div className='vertical-progress'>
                  <div
                    className='vertical-progress-bar custom-progress-bar-3'
                    style={{ height: 350 }}
                    role='progressbar'
                    aria-valuenow={350}
                    aria-valuemin='0'
                    aria-valuemax='100'
                  ></div>
                </div>
                <div className='vertical-progress'>
                  <div
                    className='vertical-progress-bar custom-progress-bar-4'
                    style={{ height: 80 }}
                    role='progressbar'
                    aria-valuenow={80}
                    aria-valuemin='0'
                    aria-valuemax='100'
                  ></div>
                </div>
              </div>
            </Container>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Secondsection
