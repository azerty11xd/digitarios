import { Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap'
import mycards from '../cards.json'
import NextLink from 'next/link'

import Image from 'next/image'
import Link from 'next/link'
function Cards() {
  return (
    <div className='allCards'>
      <h2 className='text-center title '>
        we are the best choice for your Digital Marketing
      </h2>
      <Row xs='4' sm='4' md='4' className='firstCardsRow mx-auto mt-5'>
        {mycards.map((card, index) => (
          <Col
            key={index}
            className='mb-4  d-flex align-items-stretch justify-content-center'
          >
            <Card className='first-cards'>
              <img
                className='img-card'
                src={card.imgSrc}
                alt={card.title}
                width={60}
                height={60}
              />

              <CardBody className='cardBody'>
                <h3>{card.title}</h3>
                <p className='firstCardText'>{card.text}</p>
                <NextLink className='align-self-end test ' href={`${card.link}`}>
                  <a className='cardLink'>learn more</a>
                </NextLink>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Cards
