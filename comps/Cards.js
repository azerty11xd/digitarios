import { Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap'
import mycards from '../cards.json'
import Image from 'next/image'
import Link from 'next/link'
function Cards() {
  return (
    <div className='allCards'>
      <h2 className='text-center title '>
        we are the best choice for your Digital Marketing
      </h2>
      <Row xs='1' sm='2' md='3' className='firstCardsRow mx-auto mt-5'>
        {mycards.map((card, index) => (
          <Col
            key={index}
            className='mb-4  d-flex align-items-stretch justify-content-center'
          >
            <Card className='first-cards'>
              <Image
                className='img-card'
                src={card.imgSrc}
                alt={card.title}
                width={60}
                height={60}
              />

              <CardBody className='cardBody'>
                <h3>{card.title}</h3>
                <p className='firstCardText'>{card.text}</p>
                <Link className='align-self-end' href={`${card.link}`}>
                  learn more
                </Link>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Cards
