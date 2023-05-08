

import 'bootstrap/dist/css/bootstrap.min.css'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Progress,
  Footer,
  Button,
  Container,
} from 'reactstrap'
const images = [
  {
    src: '/test.png',
    alt: 'Image 1',
  },
  {
    src: '/test.png',
    alt: 'Image 2',
  },
  {
    src: '/test.png',
    alt: 'Image 3',
  },
  {
    src: '/test.png',
    alt: 'Image 4',
  },
]

const cards = [
  {
    title: 'Card 1',
    imgSrc: '/test.png',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut posuere sapien non nulla lacinia, eget sollicitudin est interdum. Duis vitae massa et felis laoreet aliquet.',
  },
  {
    title: 'Card 2',
    imgSrc: '/test.png',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut posuere sapien non nulla lacinia, eget sollicitudin est interdum. Duis vitae massa et felis laoreet aliquet.',
  },
  {
    title: 'Card 3',
    imgSrc: '/test.png',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut posuere sapien non nulla lacinia, eget sollicitudin est interdum. Duis vitae massa et felis laoreet aliquet.',
    link: '/',
  },
]
export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)
  return (
    <div>
      <Navbar className='nav' expand='md'>
        <NavbarBrand href='/'>logo goes here</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='mx-auto' navbar>
            <NavItem>
              <NavLink href='/'>What we do</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/'>Our work</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/'>Who we are</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/'>Blog</NavLink>
            </NavItem>
          </Nav>
          <Button color='primary'>get in touch</Button>{' '}
        </Collapse>
      </Navbar>
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

      <h2 style={{ fontSize: '2em', marginTop: '150px' }}>
        we are the best choice for your Digital Marketing
      </h2>
      <Row xs='1' sm='2' md='3' style={{ margin: '0px', marginTop: '150px' }}>
        {cards.map((card, index) => (
          <Col key={index} className='mb-4'>
            <Card style={{ border: '0px' }}>
              <div className='card-img-container'>
                <Image
                  src={card.imgSrc}
                  alt={card.title}
                  width={50}
                  height={50}
                />
              </div>
              <CardBody>
                <CardTitle tag='h5'>{card.title}</CardTitle>
                <CardText>{card.text}</CardText>
                <Link href={`${card.link}`}>learn more</Link>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>

      <Container className='middle-section-container'>
        <div
          className='upper-middle-section-container'
          style={{ display: 'flex', justifyContent: 'space-around' }}
        >
          <div>
            {' '}
            <p style={{ fontSize: '150px', fontWeight: 'bold' }}>
              700+
              <br />
              <span
                style={{
                  fontSize: '40px',
                  fontWeight: 'normal',
                  position: 'relative',
                  bottom: '160px',
                }}
              >
                {' '}
                Brands already onboard
              </span>
            </p>{' '}
          </div>
          <div>
            <span className='dot'></span>
            <span className='dot'></span>
            <span className='dot'></span>
            <span className='dot'></span>
          </div>
        </div>

        <Container
          className='lower-middle-section-container'
          style={{ display: 'flex' }}
        >
          <div>
            {' '}
            <Image
              src='/test.png'
              className='img-fluid'
              alt='image'
              width={500}
              height={500}
            />
          </div>
          <div>
            <h2>How Digitarios creates growth business </h2>
            <p>
              {' '}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur, sed.
            </p>
            <p>
              {' '}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur, sed.
            </p>
            <p>
              {' '}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur, sed.
            </p>
            <p>
              {' '}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur, sed.
            </p>
            <Button style={{ marginTop: '40px' }} color='primary'>
              send me a proposal
            </Button>{' '}
          </div>
        </Container>
        <Container style={{ display: 'flex' }}>
          <Card style={{ border: '0px' }}>
            <div className='card-img-container'>
              <Image src='/test.png' alt='img' width={50} height={50} />
            </div>
            <CardBody>
              <CardTitle tag='h5'>proven performance</CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                veniam, repellat, quis doloribus libero ut magni, non
                repellendus iste omnis quidem. Modi, unde excepturi veniam
                molestiae ut voluptatibus iure doloribus.
              </CardText>
            </CardBody>
          </Card>
          <Card style={{ border: '0px' }}>
            <div className='card-img-container'>
              <Image src='/test.png' alt='img' width={50} height={50} />
            </div>
            <CardBody>
              <CardTitle tag='h5'>proven performance</CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                veniam, repellat, quis doloribus libero ut magni, non
                repellendus iste omnis quidem. Modi, unde excepturi veniam
                molestiae ut voluptatibus iure doloribus.
              </CardText>
            </CardBody>
          </Card>
        </Container>
      </Container>
      <Container
        style={{
          backgroundColor: 'white',
          marginTop: '100px',
          display: 'flex',
        }}
      >
        <Container
          style={{
            backgroundColor: 'blue',

            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <h2>
            by the numbers <br></br> <span>92%</span>
          </h2>
          <h3>Retention rate</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa esse
            nemo eaque ullam libero. Molestias impedit distinctio labore, ullam
            optio velit doloribus quo voluptas sed quia necessitatibus odit,
            itaque blanditiis autem, obcaecati tempore neque deserunt reiciendis
            quas cumque. Nisi, inventore.
          </p>
        </Container>
        <Container
          style={{
            backgroundColor: 'red',

            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            blanditiis delectus molestias totam.
          </p>
          <div
            style={{
              display: 'flex',
              marginTop: '80px',
            }}
          >
            <Progress className='vertical-progress-bar' value={30} max={100} />
            <Progress className='vertical-progress-bar' value={70} max={100} />
            <Progress className='vertical-progress-bar' value={20} max={100} />
            <Progress className='vertical-progress-bar' value={40} max={100} />
          </div>
        </Container>
      </Container>
      <Container style={{ display: 'flex', marginTop: '100px' }}>
        <Container>
          {' '}
          <h1>
            Ready to grow with a digital marketing agency you can trust ? get
            your proposal right now
          </h1>
        </Container>
        <Container>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            at vitae cumque sapiente iusto reiciendis ipsa, dicta consequuntur
            odio? Esse cumque dolorem hic accusantium distinctio voluptas iure
            iusto nemo nesciunt maiores quibusdam totam, iste sunt ut inventore
            vero earum est. Quia esse aut id, temporibus enim et quisquam
            voluptate consequatur.
          </p>
          <Button>send me a proposal</Button>
        </Container>
      </Container>

      <Container className='container-fluid bg-primary px-0'>
          

        </Container>

 

 <Container className='container-fluid bg-danger px-0 '   > test</Container>
 <Container className='container bg-primary px-0 '   > test</Container>

 
 <div className='container-fluid  test  ' >
 <Row>
            <Col className='col-12 col-lg-6 d-flex justify-content-center  '   >
            <Image 
        
              src='/test.png'
              className='img img-fluid  '
              fill="responsive"
              alt='image'
              width={600}
              height={400}
          
            />
            </Col>
            <Col className='col-12 col-lg-6 d-flex justify-content-center pt-3 '   >
              <div>
              <h2>How Digitarios creates growth business </h2>
            <div className='pl-3'>


           
            <p>
              {' '}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur, sed.
            </p>
            <p>
              {' '}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur, sed.
            </p>
            <p>
              {' '}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur, sed.
            </p>
            <p>
              {' '}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur, sed.
            </p>
            </div>
            <Button className='my-4' color='primary'>
              send me a proposal
            </Button>{' '}

              </div>
           
            </Col>
          </Row>

          <Row>
              <Col className='col-12 col-md-6 p-3' ><Card style={{ border: '0px' }}>
            <div className='card-img-container'>
              <Image className='rounded-more ' src='/test.png' alt='img' width={60} height={60} />
            </div>
            <CardBody>
              <CardTitle tag='h5'>proven performance</CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                veniam, repellat, quis doloribus libero ut magni, non
                repellendus iste omnis quidem. Modi, unde excepturi veniam
                molestiae ut voluptatibus iure doloribus.
              </CardText>
            </CardBody>
              </Card></Col>
                    <Col className='col-12 col-md-6 p-3'><Card style={{ border: '0px' }}>
            <div className='card-img-container'>
              <Image className='rounded-more ' src='/test.png' alt='img' width={60} height={60} />
            </div>
            <CardBody>
              <CardTitle tag='h5'>proven performance</CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                veniam, repellat, quis doloribus libero ut magni, non
                repellendus iste omnis quidem. Modi, unde excepturi veniam
                molestiae ut voluptatibus iure doloribus.
              </CardText>
            </CardBody>
          </Card></Col>

          </Row>

 </div>
 <div className=' container-test container-fluid  ' >test</div>
 
    </div>
  )
}
